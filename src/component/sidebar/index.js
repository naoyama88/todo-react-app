import React from 'react';

class SideBar extends React.Component {

    render() {
        const status = "Next player: X";

        return (
            <nav className="sidebar">
                <div className="status">{status}</div>
            </nav>
        );
    }
}

export default SideBar;
