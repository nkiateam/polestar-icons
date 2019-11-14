# polestar-icons
[![npm](https://img.shields.io/npm/v/polestar-icons.svg)](https://www.npmjs.com/package/polestar-icons)
[![Build Status](https://travis-ci.org/nkiateam/polestar-icons.svg?branch=master)](https://travis-ci.org/nkiateam/polestar-icons)
[![Dependencies](https://img.shields.io/david/nkiateam/polestar-icons.svg)](https://david-dm.org/nkiateam/polestar-icons)
[![DevDependencies](https://img.shields.io/david/dev/nkiateam/polestar-icons.svg)](https://david-dm.org/nkiateam/polestar-icons?type=dev)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nkiateam/polestar-icons/master/LICENSE)

polestar-icons

## Installation

```sh
npm install polestar-icons --save
```

Then add it to your babel configuration like so:
(.babelrc or babel.config.js)

```js
{
  "plugins": [
        "syntax-dynamic-import"
    ]
}
```

### Usage

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from 'polestar-icons';

const App = () => (
    <Icon name="icon-name" />
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

## Examples

To run and development examples:

1. Clone this repo
2. Run `npm install`
3. Start the development server with `npm start`
4. Point your browser to http://localhost:4100

## Documentation

https://nkiateam.github.io/polestar-icons/

## svg 생성 가이드

1. 사이즈 조절 가능
2. css(className 설정) 로 제어 가능

## License

[The MIT License (MIT)](/LICENSE)
