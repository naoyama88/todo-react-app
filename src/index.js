import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import HomePage from './component/screens/HomePage';

class Container extends React.Component {
    render() {
        return (
            <HomePage />
        );
    }
}

ReactDOM.render(<Container />, document.getElementById("root"));
