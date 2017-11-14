Icon Component Example:
```jsx static
import React from 'react';
import Icon from 'polestar-icons';

class MyComponent extends React.Component {

    render() {
        return (
            <a href="#"><Icon name="fa-cog" /> Settings</a>
        );
    }
}

export default MyComponent;
```

Icon Component props usage:
```js
<a href="#"><Icon name="fa-cog" /> Settings</a>
```