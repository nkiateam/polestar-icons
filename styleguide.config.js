const path = require('path');

// Configuration Reference => https://react-styleguidist.js.org/docs/configuration
module.exports = {

    // 문서 서버 포트
    serverPort: 4001,

    // 문서화 할 컴포넌트 스코프
    // components: './src/index.js',
    sections: [
        {
            name: 'PROPS & METHODS',
            components: './src/index.js',
        },
        {
            name: 'The Icons',
            components: './examples/src/App.js',
        },
        // {
        //   name: 'The Icons',
        //   content: 'docs/ui.md',
        //   components: 'lib/components/ui/*.js'
        // }
    ],

    // 문서화 할때 같이 번들링 할 의존성들
    require: [
        './src/css/font-awesome.css',
        './src/css/sprite.css',
        './examples/src/styles/style.css',
    ],

    webpackConfig: require('./webpack.config.js'),

    styleguideDir: './docs',

    // props와 methods를 기본적으로 펼칠지 말지
    showUsage: true,

    // example code를 기본적으로 펼칠지 말지
    showCode: true,

    title: 'Polestar-Icons Reference',

    // 문서 스타일 설정
    // theme: {
    //     color: {
    //         base: '#333',
    //         light: '#999',
    //         lightest: '#ccc',
    //         link: '#CBCBCB',
    //         linkHover: '#FFFFFF',
    //         border: '#404040',
    //         name: '#7f9a44',
    //         type: '#b77daa',
    //         error: '#fff',
    //         baseBackground: '#fff',
    //         errorBackground: '#c00',
    //         codeBackground: '#f5f5f5',
    //         sidebarBackground: '#404040',
    //     },
    //     fontFamily: {
    //         base: [
    //             '-apple-system',
    //             'BlinkMacSystemFont',
    //             '"Segoe UI"',
    //             '"Roboto"',
    //             '"Oxygen"',
    //             '"Ubuntu"',
    //             '"Cantarell"',
    //             '"Fira Sans"',
    //             '"Droid Sans"',
    //             '"Helvetica Neue"',
    //             'sans-serif',
    //         ],
    //         monospace: ['Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
    //     },
    //     fontSize: {
    //         base: 15,
    //         text: 16,
    //         small: 13,
    //         h1: 48,
    //         h2: 36,
    //         h3: 24,
    //         h4: 18,
    //         h5: 16,
    //         h6: 16,
    //     },
    //     mq: {
    //         small: '@media (max-width: 600px)',
    //     },
    //     borderRadius: 3,
    //     maxWidth: 1000,
    //     sidebarWidth: 250,
    // },
    // styles: {
    //     Logo: {
    //         logo: {
    //             color: '#FFFFFF'
    //         },
    //         '@keyframes blink': {
    //             to: { opacity: 0 }
    //         }
    //     },
    //     TableOfContents: {
    //         input: {
    //         }
    //     }
    // }
};