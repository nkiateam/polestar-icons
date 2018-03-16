import React from 'react';
import FontIcon from './FontIcon';
import ImageIcon from './ImageIcon';

class Example extends React.Component {

    renderUsage = () => {
        const usage = `
        import Icon from 'polestar-icons';
        
        render() {
            return (
                 <Icon
                    name="glass"
                    size={24}
                    color="red" 
                />
            )
        }
        `;
        return (
            <div>
                <h1>Usage</h1>
                <pre>{usage}</pre>
            </div>
        );
    };

    renderFontIcons = () => <FontIcon />;

    renderImageIcons = () => <ImageIcon />;

    render() {
        return (
            <div>
                {this.renderUsage()}
                {this.renderFontIcons()}
                {this.renderImageIcons()}
            </div>
        );
    }
}

export default Example;
