// import React from 'react';
import loadable from '@loadable/component';

const AsyncSvg = loadable(props => import(`./svgComponents/${props.name}`));

export default AsyncSvg;
