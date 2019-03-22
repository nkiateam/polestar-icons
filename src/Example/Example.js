import React from 'react';
import FontIcon from './FontIcon';
import ImageIcon from './ImageIcon';
import Icon from '../index';

import packageJson from '../../package.json';

class Example extends React.Component {
    renderUsage = () => {
        const usage = `
        import Icon from 'polestar-icons';
        
        render() {
            return (
                 <Icon
                    name="glass"
                    color="red" 
                />
            )
        }
        `;
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    <h1>
                        Usage&nbsp;
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
                <pre>{usage}</pre>
            </div>
        );
    };

    renderStackedIcon = () => {
        const usage = `
            import Icon from 'polestar-icons';

            render() {
                return (
                    <Icon
                        name="cloud"
                        color="grey"
                        size={2}
                        innerName="moon"
                        innerColor="blue"
                        innerSize={2}
                    />
                )
            }
        `;
        return (
            <div>
                <h1>Stacked Icon</h1>
                <pre>{usage}</pre>
                <div>
                    <Icon
                        name="cloud"
                        color="grey"
                        size={2}
                        innerName="moon-o"
                        innerColor="blue"
                        innerSize={1}
                    />
                    <Icon
                        name="cloud"
                        color="grey"
                        innerName="moon-o"
                        innerColor="blue"
                        stackRatio={[2, 1]}
                    />
                </div>
            </div>
        );
    }

    renderAnimationIcon = () => {
        const animations = ['spin', 'spin-pulse', 'wrench', 'ring', 'vertical', 'horizontal', 'flash', 'bounce',
            'float', 'pulse', 'tada', 'passing', 'passing-reverse', 'burst', 'falling', 'shake'];
        const usage = `
            import Icon from 'polestar-icons';

            render() {
                return (
                    <Icon
                        name="bell"
                        animation="ring"
                        animationType="duration"
                        animationDuration={10}
                    />
                )
            }
        `;
        const icons = animations.map((animation) => (
            <div key={animation} style={{ minWidth: '250px', margin: '20px 0px' }}>
                <Icon
                    name="spinner"
                    color="blue"
                    size={1}
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                <Icon
                    name="square-o"
                    color="blue"
                    size={1}
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                <Icon
                    name="star-o"
                    color="blue"
                    size={1}
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                {animation}
            </div>
        ));
        return (
            <div>
                <h1>Animation Icon</h1>
                <pre>{usage}</pre>
                <div
                    style={{
                        display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', margin: '10px 30px',
                    }}
                >
                    {icons}
                </div>
            </div>
        );
    }

    renderIconSize = () => {
        const usage = `
            import Icon from 'polestar-icons';

            render() {
                return (
                    <Icon
                        name="bell"
                        color="black"
                        size={1}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={2}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={3}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={4}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={5}
                    />
                )
            }
        `;
        return (
            <div>
                <h1>Icon Size</h1>
                <pre>{usage}</pre>
                <div>
                    <Icon
                        name="bell"
                        color="black"
                        size={1}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={2}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={3}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={4}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={5}
                    />
                </div>
            </div>
        );
    }

    renderFontIcons = () => <FontIcon />;

    renderImageIcons = () => <ImageIcon />;

    render() {
        return (
            <div>
                {this.renderUsage()}
                {this.renderStackedIcon()}
                {this.renderAnimationIcon()}
                {this.renderIconSize()}
                {this.renderFontIcons()}
                {this.renderImageIcons()}
            </div>
        );
    }
}

export default Example;
