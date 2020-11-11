// import React from 'react';
import loadable from '@loadable/component';

const AsyncSvg = loadable(
    (props) => {
        // if (!props.name || typeof props.name !== 'string') name = 'default-icon';
        let name = '';
        props.name.split('-').forEach((n) => {
            name += n.charAt(0).toUpperCase() + n.slice(1);
        });
        // console.log('name', name);
        return import(`./svgComponents/${name}`);
        // return import('./svgComponents/' + name);
        // 배포할 때 아래 코드로 배포해야 함(lib 에서 직접 수정 후 배포)
        // return Promise.resolve().then(function () {
        //     return _interopRequireWildcard(require("./svgComponents/".concat(name)));
        // });
    },
    {
        fallback: null, // <div>Loading...</div>,
    },
);

export default AsyncSvg;
