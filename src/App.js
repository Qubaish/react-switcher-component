import React from 'react';
import ReactDom from 'react-dom';
import Switcher from './Switcher';

const App = () => (
    <div>
        <Switcher />
    </div>
)

ReactDom.render(<App />, document.getElementById('root'));