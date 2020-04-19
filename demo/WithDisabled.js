import React, { useState, Fragment } from 'react';
import Switcher from '../src';

function WithDisabled() {
    const [switcherState, setSwitcherState] = useState(false);
    const onHandleChange = e => {
        setSwitcherState(e.target.checked);
    }
    return (
        <Fragment>
            <h1> Switcher component with disabled option</h1>
            <Switcher 
                name="my-switcher"
                onChange={onHandleChange}
                checked={switcherState}
                disabled
            />
            <pre className="pre">
                {`
import React, {useState} from 'react';
import Switch from 'react-switcher-rc';

function Switcher() {
  const [switcherState, setSwitcherState] = useState(false);
  const onHandleChange = e => setSwitcherState(e.target.checked);
  <Switcher
   name="my-switcher"
   onChange={onHandleChange}
   checked={switcherState}
   disabled
  />
}`} 
        </pre>
    </Fragment>
    )
}

export default WithDisabled;