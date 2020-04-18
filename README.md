# Swticher Component For React
<br/>

![npm](https://img.shields.io/npm/v/react-switcher-rc)

- **Draggable** with the mouse or with a touch screen.
- **Customizable** - Easy to customize size, color and more.
* Very light weight
* You can overide css properties

## Installation

```bash
npm install react-switcher-rc
```

## Usage

```javascript
import React, {useState} from 'react';
import Switcher from 'react-switcher-rc';

function SwitcherExample() {
    const [switcherState, setSwitcherState] = useState(false);
    const onHandleChange = e => {
        setSwitcherState(e.target.checked);
    }
    return (
        <div>
            <Switcher 
                name="my-switcher"
                onChange={onHandleChange}
                checked={switcherState}
            />
        </div>
    )
}
```

## Development

You're welcome to contribute to react-switch. Keep in mind that big changes have to be thoroughly tested on lots of different browsers and devices before they can be merged.

To set up the project:

1.  Fork and clone the repository
2.  `$ npm install`
3.  `$ npm run start`