const path = require('path');
const fs = require('fs');
// import path from 'path';
// import fs from 'fs';

const input = path.resolve(__dirname, '../src/svgs');
const output = path.resolve(__dirname, '../src/Example');

const files = fs.readdirSync(input); // 디렉토리를 읽어온다
// console.log(files);

const icons = [];
files.forEach((file) => {
    const suffix = file.substr(file.length - 4, file.length); // 확장자 추출
    // console.log(suffix);

    if (suffix === '.svg') {
        const fileName = file.substr(0, file.length - 4); // 확장자 추출
        // console.log(fileName);
        const icon = {};
        icon['name'] = fileName;
        icons.push(icon);
    }
});
// console.log({ icons });

fs.writeFile(
    path.resolve(__dirname, '../src/Example/svgIcons.json'),
    JSON.stringify({ icons }),
    (err) => {
        if (err) throw err;
        console.log(
            '\x1b[36m%s\x1b[0m',
            'Icon List file for SVG Examples is Saved!',
        );
    },
);
