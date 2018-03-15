import React from 'react';
import FontIcon from './FontIcon';
import ImageIcon from './ImageIcon';

class Example extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1 className="__ps-font-icon-title__">
                        Usage&nbsp;
                    </h1>
                </div>
                <FontIcon />
                <ImageIcon />
            </div>
        );
    }
}

export default Example;
