import React, { Component } from 'react';

import Icon from '../index';

class Usage extends Component {
    renderBasic = () => {
        const code = `
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
                <h3>Basic</h3>
                <pre>{code}</pre>
                <div>
                    <Icon
                        name="glass"
                        color="red"
                    />
                </div>
            </div>
        );
    };

    renderStackedIcon = () => {
        const code = `
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
                <h3>Stacked Icon</h3>
                <pre>{code}</pre>
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
        const code = `
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
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                <Icon
                    name="square-o"
                    color="blue"
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                <Icon
                    name="star-o"
                    color="blue"
                    animation={animation}
                    style={{ margin: '0 10px' }}
                />
                {animation}
            </div>
        ));
        return (
            <div>
                <h3>Animation Icon</h3>
                <pre>{code}</pre>
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
        const code = `
            import Icon from 'polestar-icons';

            render() {
                return (
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
                    <Icon
                        name="bell"
                        color="black"
                        size={6}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={7}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={8}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={9}
                    />
                )
            }
        `;
        return (
            <div>
                <h3>Icon Size</h3>
                <pre>{code}</pre>
                <div>
                    {/* <Icon
                        name="bell"
                        color="black"
                    /> */}
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
                    <Icon
                        name="bell"
                        color="black"
                        size={6}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={7}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={8}
                    />
                    <Icon
                        name="bell"
                        color="black"
                        size={9}
                    />
                </div>
            </div>
        );
    }

    renderSVGBasic = () => {
        const code = `
            import Icon from 'polestar-icons';
            
            render() {
                return (
                    <Icon
                        type="svg"
                        name="server"
                    />
                )
            }
        `;
        return (
            <div>
                <h3>Basic</h3>
                <pre>{code}</pre>
                <div>
                    <Icon
                        type="svg"
                        name="server"
                        // name="window-service-monitor"
                    />
                </div>
            </div>
        );
    };

    renderSVGIconSize = () => {
        const code = `
            import Icon from 'polestar-icons';

            render() {
                return (
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={2}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={3}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={4}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={5}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={6}
                    />
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={7}
                    />
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={8}
                    />
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={9}
                    />
                    <Icon
                        type="svg"
                        name="server-device"
                        width={200}
                        height={250}
                    />
                )
            }
        `;
        return (
            <div>
                <h3>Icon Size</h3>
                <pre>{code}</pre>
                <div>
                    {/* <Icon
                        type="svg"
                        name="window-service-monitor"
                    />&nbsp; */}
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={2}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={3}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={4}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={5}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={6}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={7}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={8}
                    />&nbsp;
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        size={9}
                    />
                </div>
                <div>
                    <Icon
                        type="svg"
                        name="window-service-monitor"
                        width={200}
                        height={250}
                    />
                </div>
            </div>
        );
    }

    renderSVGClass = () => {
        const code = `
            import Icon from 'polestar-icons';
            
            render() {
                return (
                    <Icon
                        type="svg"
                        className="svg-test-server"
                        name="server"
                    />
                )
            }
        `;
        return (
            <div>
                <h3>className</h3>
                <pre>{code}</pre>
                <div>
                    <Icon
                        type="svg"
                        className="svg-test-server"
                        name="server"
                    />
                </div>
            </div>
        );
    };

    render() {
        return (
            <div>
                <h2>Font Icon Usage</h2>
                {this.renderBasic()}
                {this.renderStackedIcon()}
                {this.renderAnimationIcon()}
                {this.renderIconSize()}
                <br />

                <h2>SVG Icon Usage</h2>
                {this.renderSVGBasic()}
                {this.renderSVGIconSize()}
                {this.renderSVGClass()}
                <br />

                <div
                    role="presentation"
                    style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={this.props.collapseUsage}
                >
                    [닫기]
                </div>
                <hr
                    style={{
                        display: 'block',
                        height: '1px',
                        border: 0,
                        borderTop: '1px solid #4d524e',
                        margin: '1em 0',
                        padding: 0,
                    }}
                />
            </div>
        );
    }
}

export default Usage;
