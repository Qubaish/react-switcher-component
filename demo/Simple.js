import React, { useState, Fragment } from 'react';
import CodeFormatter from 'rc-code-formatter';
import Switcher from '../src';
const code = `
import React, {useState} from 'react';
import Switch from 'react-switcher-rc';

function Switcher() {
  const [switcherState, setSwitcherState] = useState(false);
  const onHandleChange = e => setSwitcherState(e.target.checked);
  <Switcher
   name="my-switcher"
   onChange={onHandleChange}
   checked={switcherState}
  />
}
`;

function Simple() {
    const [switcherState, setSwitcherState] = useState(true);
    const onHandleChange = e => {
        setSwitcherState(e.target.checked);
    }
    return (
        <Fragment>
            <h1> Switcher component</h1>
            <Switcher 
                name="my-switcher"
                onChange={onHandleChange}
                checked={switcherState}
            />
           <CodeFormatter theme="light">
               {code}
           </CodeFormatter>
    </Fragment>
    )
}

export default Simple;