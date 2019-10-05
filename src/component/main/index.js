import React from 'react';

class Main extends React.Component {
    render() {
        const status = "Next player: X";

        return (
            <main className="main">
                <div className="status">{status}</div>
            </main>
        );
    }
}

export default Main;