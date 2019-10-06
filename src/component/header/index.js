import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        const logoUrl = "/logo192.png"

        return (
            <header className="header">
                <div className="header__container">
                    <div className="logo">
                        <img src={logoUrl} alt="logo" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;