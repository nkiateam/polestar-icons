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
            {iconList.icons.map(icon => {
                return (
                    <span
                        key={icon.name}
                        className="__ps_font-icon__"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexBasis: 250,
                            height: 50,
                        }}
                    >
                        <Icon name={icon.name} size={24} />
                        <span>{icon.name}</span>
                    </span>
                );
            })}
        </div>
    </div>
);

export default FontIcon;