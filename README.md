# Swticher Component For React
<br/>

![npm](https://img.shields.io/npm/v/react-switcher-rc)
![npm](https://img.shields.io/npm/dm/react-switcher-rc)
[![Build Status](https://travis-ci.com/Qubaish/react-switcher-component.svg?branch=master)](https://travis-ci.com/Qubaish/react-switcher-component)
[![Netlify Status](https://api.netlify.com/api/v1/badges/748368e6-84ed-4b1e-87d0-3cc828826b28/deploy-status)](https://app.netlify.com/sites/vibrant-neumann-bebf47/deploys)
[![gzip size](http://img.badgesize.io/https://unpkg.com/react-switcher-rc/lib/index.js?compression=gzip)](https://unpkg.com/react-switcher-rc/lib/index.js)

# Demo
<a href="https://codesandbox.io/s/react-switcher-bpgpz">Switcher Component</a>

# Features
- **Draggable** with the mouse or with a touch screen.
- **Customizable** - Easy to customize size, color and more.
* Very **Light** weight
* You can **overide** css properties
* Either you can show **Text** or **Icon**

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

| Props         | Type          | Description  |
| ------------- |:-------------:| :-----:       |
| checked       | boolean       | Required. If true, the switch is set to checked. If false, it is not checked.|
| onChange     | func      |   Required. Invoked when the user clicks or drags the switch. It passed event|
| disabled | boolean      |    Disabled the component |
| onColor | String      |    Can be hash or color `#000` or `red` |
| className | String      |    To override css properties |
| name | String      |    Attribute Name |
| ariaLabel | String      |    For accessibility (a11y) users |
| checkedIcon | String|Node      |    Either you can pass text or icon(svg) |
| unCheckedIcon | String|Node      |    Either you can pass text or icon(svg) |


## Development

You're welcome to contribute to react-switch. Keep in mind that big changes have to be thoroughly tested on lots of different browsers and devices before they can be merged.

To set up the project:

1.  Fork and clone the repository
2.  `$ npm install`
3.  `$ npm run start`

# To Do

* Convert it to styled components
* Test Cases
* Prelint configurations

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://avatars3.githubusercontent.com/u/8197706?s=460&u=127cd5b1b7ac60b23c448c23338194a64ead761d&v=4" width="120">
        <br />
        <a href="https://github.com/Qubaish">Qubaish<a/>
      </td>
    </tr>
  </tbody>
</table>

## License

MIT
