import React from 'react';
import Icon from 'polestar-icons';
import iconList from './polestar.json';

const FontIcon = () => (
    <div>
        <h1 className="__ps-font-icon-title__">Polestar Font Icons</h1>
        <div
            className="__ps_font-icon-list__"
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            }}
        >
            {iconList.icons.map(icon => (
                <span
                    key={icon.name}
                    className="__ps_font-icon__"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexBasis: 250,
                        height: 50,
                        paddingLeft: 10,
                    }}
                >
                    <Icon
                        name={icon.name}
                        color="rgba(0,0,0,1)"
                    />
                    <span style={{
                        color: 'grey',
                        marginLeft: 15,
                    }}
                    >{icon.name}
                    </span>
                </span>
            ))}
        </div>
    </div>
);

export default FontIcon;
