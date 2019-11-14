// import React from 'react';
import loadable from '@loadable/component';

const AsyncSvg = loadable(props => {
    // if (!props.name || typeof props.name !== 'string') name = 'default-icon';
    let name = '';
    props.name.split('-').forEach(n => {
        name += n.charAt(0).toUpperCase() + n.slice(1);
    });
    // console.log('name', name);
    return import(`./svgComponents/${name}`);
}, {
    fallback: null, // <div>Loading...</div>,
});

export default AsyncSvg;
