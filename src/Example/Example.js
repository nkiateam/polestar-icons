import React from 'react';

import Icon from '../index';
import Usage from './Usage';
import FontIcon from './FontIcon';
import SvgIcon from './SvgIcon';
import ImageIcon from './ImageIcon';

import packageJson from '../../package.json';

class Example extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showUsage: false,
        };
    }

    collapseUsage = () => {
        this.setState({
            showUsage: !this.state.showUsage,
        });
    }

    renderUsage = () => {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <h1>
                        Polestar Icons&nbsp;
                        <a
                            href="https://github.com/nkiateam/polestar-icons"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <Icon name="github" />
                        </a>&nbsp;
                        <a
                            href="http://192.168.232.211/polestar-icons/docs"
                            rel="noopener noreferrer"
                            target="_blank"
                            style={{ textDecoration: 'none' }}
                        >
                            <Icon name="file-text-o" />
                        </a>
                    </h1>
                    <span style={{ marginLeft: '10px', marginTop: '34px' }}>v{packageJson.version}</span>
                </div>
                <div>
                    Usage&nbsp;
                    <span
                        role="presentation"
                        style={{ cursor: 'pointer', textDecoration: 'underline' }}
                        onClick={this.collapseUsage}
                    >
                        {this.state.showUsage ? '[닫기]' : '[보기]'}
                    </span>
                </div>
            </div>
        );
    };

    renderFontIcons = () => <FontIcon />;

    renderSvgIcons = () => <SvgIcon />;

    renderImageIcons = () => <ImageIcon />;

    render() {
        return (
            <div>
                {this.renderUsage()}
                {this.state.showUsage ? <Usage collapseUsage={this.collapseUsage} /> : null}
                <br />
                {this.renderFontIcons()}
                {this.renderSvgIcons()}
                {this.renderImageIcons()}
            </div>
        );
    }
}

export default Example;
