import React from 'react';

import './SideBarSubcategory.css';

class SideBarSubcategoty extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOn: false
        };

        this.clickOverlay = this.clickOverlay.bind(this);
        this.clickMenu = this.clickMenu.bind(this);
        this.offMenu = this.offMenu.bind(this);
        this.onMenu = this.onMenu.bind(this);
        this.deleteSubcategory = this.deleteSubcategory.bind(this);
    }

    deleteSubcategory() {
        this.props.deleteSubcategory(this.props.subcategory.id);
        this.offMenu();
    }

    clickMenu() {
        if (this.props.menuOn && !this.state.menuOn) {
            // avoid duplicate
            return;
        }

        if (this.state.menuOn === false) {
            this.onMenu();

        } else {
            this.offMenu();
        }
    }

    onMenu() {
        this.setState({
            menuOn: true
        });
        this.props.showMenu(true);
    }

    clickOverlay() {
        this.offMenu();
    }

    offMenu() {
        this.setState({
            menuOn: false
        });
        this.props.showMenu(false);
    }

    render() {

        let modal = null;
        if (this.props.menuOn === true && this.state.menuOn === true) {
            modal = (() => {
                return (
                    <div>
                        <div className="overlay" onClick={this.clickOverlay} ></div>
                        <div className="menu">
                            <ul>
                                <li>change title</li>
                                <li onClick={this.deleteSubcategory}>delete</li>
                            </ul>
                        </div>
                    </div>
                );
            })();
        }

        // this.props.subcategory

        return (
            <div className="side-bar-subcategory" data-subcategory-id={this.props.subcategory.id} >
                <div className="side-bar-subcategory__title">{this.props.subcategory.title}</div>
                <div className="side-bar-subcategory__menu" onClick={this.clickMenu}>•••</div>
                {modal}
            </div>
        );
    }
}

export default SideBarSubcategoty;
