import React, {useState} from 'react';
import ReactDom from 'react-dom';
import Switcher from '../src';

function App() {

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

ReactDom.render(<App />, document.getElementById('root'));