import React from 'react';

class Header extends React.Component {
    render() {
        const status = "Next player: X";

        return (
            <header className="header">
                <div className="status">{status}</div>
            </header>
        );
    }
}

export default Header;