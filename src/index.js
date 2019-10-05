import React from 'react';
import ReactDOM from 'react-dom';

import Header from './component/header';
import SideBar from './component/sidebar';
import Main from './component/main';
import Footer from './component/footer';

import './reset.css';
import './index.css';

class Container extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SideBar />
                <Main />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById("root"));
