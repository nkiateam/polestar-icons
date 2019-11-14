import React, { Component } from 'react';
import Icon from 'polestar-icons';

// import Server from '../svgComponents/Server';
// import ServerDevice from '../svgComponents/ServerDevice';
// import WindowServiceMonitor from '../svgComponents/WindowServiceMonitor';

class SvgIcon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: [
                {
                    name: 'server',
                    className: 'svg-test-server',
                    width: 50,
                    height: 50,
                },
                {
                    name: 'server-device',
                    className: 'svg-test-server-device',
                    width: 150,
                    height: 150,
                },
                {
                    name: 'network-switch',
                    className: 'svg-test-network-switch',
                    width: 50,
                    height: 50,
                },
                {
                    name: 'window-service-monitor',
                    className: 'svg-test-window-service-monitor',
                    width: 150,
                    height: 150,
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h1 className="__ps-image-icon-title__">Polestar SVG Icons</h1>
                <div
                    className="__ps_image-icon-list__"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                    }}
                >
                    {/* <Icon type="image" name="title-icon" /> */}
                    {/* <Server />
                    <ServerDevice width={200} height={200} />
                    <WindowServiceMonitor width={16} height={16.8} /> */}
                    {this.state.icons.map(icon => (
                        <span
                            key={icon.name}
                            // className="__ps_font-icon__"
                            // style={{
                            //     display: 'flex',
                            //     alignItems: 'center',
                            //     flexBasis: 250,
                            //     height: 50,
                            //     paddingLeft: 10,
                            // }}
                        >
                            <Icon
                                type="svg"
                                name={icon.name}
                                className={icon.className}
                                width={icon.width}
                                height={icon.height}
                                // color="rgba(0,0,0,1)"
                            />
                            <span style={{
                                color: 'grey',
                                marginLeft: 5,
                            }}
                            >{icon.name}
                            </span>
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default SvgIcon;
