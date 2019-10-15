import React from 'react';

import './overlay.css';

class Overlay extends React.Component {
    render() {
        return (
            <div className="overlay--transparent" onClick={this.props.onClick} ></div>
        );
    }
}

export { Overlay };
