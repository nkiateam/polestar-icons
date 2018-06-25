import chalk from 'chalk';
import clear from 'cli-clear';
import figlet from 'figlet';
import inquirer from 'inquirer';
import path from 'path';
import fs from 'fs';
import transform from './transform';

clear();
console.log(chalk.yellow(figlet.textSync('SVG to FONTICON')));

const ROOT = path.resolve('./generator');
const inputPath = path.join(ROOT, 'input');
const basePath = path.join(ROOT, '__base__');
fs.existsSync(inputPath) || fs.mkdirSync(inputPath);
fs.existsSync(basePath) || fs.mkdirSync(basePath);
const files = fs.readdirSync(inputPath);
const filesToBeMerged = fs.readdirSync(basePath);
const svgFiles = [];
const pathsOfBasedSvgFile = [];

files.forEach((file) => {
    if (new RegExp(/\.svg$/).test(file)) {
        svgFiles.push(file);
    }
});

filesToBeMerged.forEach((file) => {
    if (new RegExp(/\.svg$/).test(file)) {
        pathsOfBasedSvgFile.push(path.join(basePath, file));
    }
});

const questions = [
    {
        type: 'list',
        name: 'svgFile',
        message: 'CSS 파일로 변환할 SVG 폰트 파일을 선택하세요:)',
        choices: svgFiles,
    }
];

// if (svgFiles.length === 0) {
//     throw new Error('input 폴더에 변환할 svg 파일을 넣어주세요');
// }

inquirer.prompt(questions).then((answer) => {
    const { svgFile, prefix } = answer;
    transform(path.join(inputPath, svgFile), pathsOfBasedSvgFile, prefix);
});
