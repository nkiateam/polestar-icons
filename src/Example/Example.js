import React from 'react';
import FontIcon from './FontIcon';
import ImageIcon from './ImageIcon';
import Icon from '../index';

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
                        innerName="moon"
                        innerColor="blue"
                        innerSize={1}
                    />
                    <Icon
                        name="cloud"
                        color="grey"
                        innerName="moon"
                        innerColor="blue"
                        stackRatio={[2, 1]}
                    />
                </div>
            </div>
        );
    }

    renderAnimationIcon = () => {
        const animations = ['spin', 'spin-pulse', 'wrench', 'ring', 'vertical', 'horizontal', 'flash', 'bounce',
            'float', 'pulse', 'tada', 'passing', 'passing-reverse', 'burst', 'falling'];
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
                    size={2}
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                <Icon
                    name="spinner1"
                    color="blue"
                    size={2}
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                <Icon
                    name="spinner2"
                    color="blue"
                    size={2}
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

    renderFontIcons = () => <FontIcon />;

    renderImageIcons = () => <ImageIcon />;

    render() {
        return (
            <div>
                {this.renderUsage()}
                {this.renderStackedIcon()}
                {this.renderAnimationIcon()}
                {this.renderFontIcons()}
                {this.renderImageIcons()}
            </div>
        );
    }
}

export default Example;
