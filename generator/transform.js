import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import chalk from 'chalk';
import svg2ttf from 'svg2ttf';
import ttf2eot from 'ttf2eot';
import ttf2woff from 'ttf2woff';
import ttf2woff2 from 'ttf2woff2';
import toUnicode from './toUnicode';
import cssTemplate from './templates/cssTemplate';
import svgTemplate from './templates/svgTemplate';
import htmlTemplate from './templates/htmlTemplate';

/**
 * 2018-01-23 정현승
 * @param svgPath
 * @param pathsOfBasedSvgFile
 * @param prefix
 */
export default (svgPath, pathsOfBasedSvgFile, prefix = 'icon') => new Promise((resolve, reject) => {
    console.time('transform');
    // Input SVG file
    const svg = fs.readFileSync(svgPath, 'utf-8');
    const dom = new JSDOM(svg);
    const { document } = dom.window;
    const $fontFace = document.querySelector('font-face');
    const $glyphs = document.querySelectorAll('glyph');
    const $mergedGlyphs = [];

    // Input SVG file to be merged
    let numberOfBasedGlyphs = 0;
    pathsOfBasedSvgFile.forEach(path => {
        const _svg = fs.readFileSync(path, 'utf-8');
        const _dom = new JSDOM(_svg);
        const _document = _dom.window.document;
        const _$glyphs = _document.querySelectorAll('glyph');
        for (let i = 0, count = _$glyphs.length; i < count; i += 1) {
            $mergedGlyphs.push(_$glyphs[i]);
            numberOfBasedGlyphs += 1;
            document.querySelector('font').appendChild(_$glyphs[i]);
        }
    });
    $glyphs.forEach(glyph => {
        $mergedGlyphs.push(glyph);
    });
    console.log('Glyphs :', $glyphs.length);
    console.log('Based glyphs :', numberOfBasedGlyphs);
    console.log('Total glyphs :', $mergedGlyphs.length);

    // const fontFamily = $fontFace.getAttribute('font-family');
    const fontFamily = 'polestar';

    let buffer = cssTemplate({
        fontFamily, // 폰트 이름
        prefix, // 접두사
    });

    const glyphsLength = $mergedGlyphs.length;
    let iconList = '';
    let counter = 63488;
    for (let i = 0; i < glyphsLength; i += 1) {
        const glyphName = $mergedGlyphs[i].getAttribute('glyph-name');
        const hexCounter = counter.toString(16);
        buffer += `.${prefix}-${glyphName}:before { content: '\\${hexCounter.toUpperCase()}' } \n`;
        $mergedGlyphs[i].setAttribute('unicode', '');
        $mergedGlyphs[i].setAttribute('unicode', `{{amp}}#x${hexCounter};`);
        counter += 1;
        iconList += `<span class="${prefix}-${glyphName}">.${prefix}-${glyphName}</span>`;
    }

    const now = new Date();
    const buildTime =
        `${now.getFullYear() +
        (`0${now.getMonth() + 1}`).slice(-2) +
        (`0${now.getDate()}`).slice(-2)}_${
            (`0${now.getHours()}`).slice(-2)
        }${(`0${now.getMinutes()}`).slice(-2)
        }${(`0${now.getSeconds()}`).slice(-2)}`;

    const outputDirName = `${buildTime}_${fontFamily}`;
    const outputDirPath = path.resolve('./generator/output');
    const outputDirFullPath = path.resolve(`./generator/output/${outputDirName}`);
    const cssPath = path.join(outputDirFullPath, 'css');
    const fontPath = path.join(outputDirFullPath, 'fonts');
    const srcPath = path.resolve('./src');
    const distCssPath = path.join(srcPath, 'css');
    const distFontPath = path.join(srcPath, 'fonts');
    fs.existsSync(outputDirPath) || fs.mkdirSync(outputDirPath);
    fs.mkdirSync(outputDirFullPath);
    fs.mkdirSync(cssPath);
    fs.mkdirSync(fontPath);

    const newSvgPath = path.join(fontPath, `${fontFamily}.svg`);
    const newSvgFile = svgTemplate(dom.window.document.body.innerHTML.replace(/{{amp}}/gi, '&'));



    fs.writeFileSync(newSvgPath, newSvgFile, 'utf-8');
    fs.writeFileSync(path.join(distFontPath, `${fontFamily}.svg`), newSvgFile, 'utf-8');
    console.log(chalk.greenBright(`${fontFamily}.svg 파일이 이동되었습니다`));
    const newSvg = fs.readFileSync(newSvgPath, 'utf-8');
    const examples = htmlTemplate(fontFamily, iconList);

    fs.writeFileSync(path.join(srcPath, `${fontFamily}.html`), examples, 'utf-8');
    fs.writeFile(
        path.join(outputDirFullPath, `${fontFamily}.html`),
        examples, 'utf-8', (err) => {
            if (err) {
                return console.log(err);
            }
            console.log(chalk.greenBright(`${fontFamily}.html 파일을 생성하였습니다`));
        },
    );

    /**
     * SVG -> CSS
     */
    const transformSVGtoCSS = new Promise((resolve, reject) => {
        console.log('Start to generate css file...');
        fs.writeFileSync(path.join(distCssPath, `${fontFamily}.css`), buffer, 'utf-8');
        fs.writeFile(path.join(cssPath, `${fontFamily}.css`), buffer, 'utf-8', (err) => {
            if (err) {
                return reject(err);
            }
            console.log(chalk.greenBright(`${fontFamily}.css 파일로 변환되었습니다`));
            return resolve();
        });
    });

    /**
     * SVG -> TTF
     */
    const transformSVGtoTTF = () => new Promise((resolve, reject) => {
        console.log('Start to generate ttf file...');
        const ttf = svg2ttf(newSvg, {});
        fs.writeFileSync(path.join(distFontPath, `${fontFamily}.ttf`), Buffer.from(ttf.buffer), 'utf-8');
        fs.writeFile(path.join(fontPath, `${fontFamily}.ttf`), Buffer.from(ttf.buffer), 'utf-8', (err) => {
            if (err) {
                return reject(err);
            }
            console.log(chalk.greenBright(`${fontFamily}.ttf 파일로 변환되었습니다`));
            /**
             * 생성된 ttf 파일 읽기
             */
            const ttfOutput = new Uint8Array(new Buffer(ttf.buffer));
            return resolve(ttfOutput);
        });
    });

    /**
     * TTF -> EOT
     */
    const transformTTFtoEOT = ttfOutput => new Promise((resolve, reject) => {
        console.log('Start to generate eot file...');
        const eot = ttf2eot(ttfOutput);
        fs.writeFileSync(path.join(distFontPath, `${fontFamily}.eot`), Buffer.from(eot.buffer), 'utf-8');
        fs.writeFile(path.join(fontPath, `${fontFamily}.eot`), Buffer.from(eot.buffer), 'utf-8', (err) => {
            if (err) {
                return reject(err);
            }
            console.log(chalk.greenBright(`${fontFamily}.eot 파일로 변환되었습니다`));
            return resolve();
        });
    });

    /**
     * TTF -> WOFF
     */
    const transformTTFtoWOFF = ttfOutput => new Promise((resolve, reject) => {
        console.log('Start to generate woff file...');
        const woff = ttf2woff(ttfOutput);
        fs.writeFileSync(path.join(distFontPath, `${fontFamily}.woff`), Buffer.from(woff.buffer), 'utf-8');
        fs.writeFile(path.join(fontPath, `${fontFamily}.woff`), Buffer.from(woff.buffer), 'utf-8', (err) => {
            if (err) {
                return reject(err);
            }
            console.log(chalk.greenBright(`${fontFamily}.woff 파일로 변환되었습니다`));
            return resolve();
        });
    });

    /**
     * TTF -> WOFF2
     */
    const transformTTFtoWOFF2 = ttfOutput => new Promise((resolve, reject) => {
        console.log('Start to generate woff2 file...');
        const woff2 = ttf2woff2(ttfOutput);
        fs.writeFileSync(path.join(distFontPath, `${fontFamily}.woff2`), woff2, 'utf-8');
        fs.writeFile(path.join(fontPath, `${fontFamily}.woff2`), woff2, 'utf-8', (err) => {
            if (err) {
                return reject(err);
            }
            console.log(chalk.greenBright(`${fontFamily}.woff2 파일로 변환되었습니다`));
            return resolve();
        });
    });

    transformSVGtoCSS
        .then(transformSVGtoTTF)
        .then((ttfOutput) => {
            Promise.all([
                transformTTFtoEOT(ttfOutput),
                transformTTFtoWOFF(ttfOutput),
                transformTTFtoWOFF2(ttfOutput),
            ]).then(() => {
                console.timeEnd('transform');
                console.log(chalk.cyan(`${outputDirName} transform success.`));
            }).catch((err) => {
                console.timeEnd('transform');
                console.log(err);
            });
        })
        .catch((err) => {
            console.timeEnd('transform');
            console.log(err);
        });
});
