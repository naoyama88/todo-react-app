import React from 'react';

import Header from '../basis/header';
import SideBar from '../complexes/sidebar';
import Main from '../complexes/main';
import Footer from '../basis/footer';

class HomePage extends React.Component {
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

export default HomePage;
