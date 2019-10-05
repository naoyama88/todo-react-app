import React from 'react';

class Footer extends React.Component {
    render() {
        const status = "@Marcus All right reserved";

        return (
            <footer className="footer">
                <div className="allRight">{status}</div>
            </footer>
        );
    }
}

export default Footer;