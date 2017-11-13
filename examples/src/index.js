import React from 'react';
import ReactDOM from 'react-dom';

import Icon from 'polestar-icons';
import 'styles/font-awesome.css';
import 'styles/sprite.css';

const App = () => (
    <div>
        <Icon name="fa-bar-chart" />
        <Icon type="image" name="title-icon" />
    </div>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);