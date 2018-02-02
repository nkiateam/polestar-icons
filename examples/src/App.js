import React from 'react';

import Icon from 'polestar-icons';
import FontIcon from './FontIcon';
import ImageIcon from './ImageIcon';

const Icons = () => (
    <div>
        <div>
            <h1 className="__ps-font-icon-title__">
                Usage&nbsp;
                <a href="https://github.com/nkiateam/polestar-icons" target="_blank" style={{ textDecoration: 'none' }}><Icon name="github-circled-alt2" /></a>&nbsp;
                <a href="http://192.168.232.211/polestar-icons/docs" target="_blank" style={{ textDecoration: 'none' }}><Icon name="doc-text" /></a>
            </h1>
            {`import Icon from 'polestar-icons';`}<br/>
            {`<Icon name="icon-name" />`}
        </div>
        <FontIcon />
        <ImageIcon />
    </div>
);

export default Icons;