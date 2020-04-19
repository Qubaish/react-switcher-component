import React, {useState} from 'react';
import ReactDom from 'react-dom';
import WithText from './WithText';
import WithColor from './WithColor';
import WithDisabled from './WithDisabled';
import WithIcon from './WithIcon';
import Simple from './Simple';
import './index.css';

function App() {

    const [switcherState, setSwitcherState] = useState(false);
    const onHandleChange = e => {
        setSwitcherState(e.target.checked);
    }

    return (
        <div>
            <Simple />
            <WithText />
            <WithColor />
            <WithDisabled />
            <WithIcon />
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'));