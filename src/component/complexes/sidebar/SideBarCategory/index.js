import React from 'react';
import { Overlay } from './../../../basis/Overlay/Overlay.js';
import SideBarSubCategory from '../SideBarSubcategory';

import './SideBarCategory.css';


class SideBarCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOn: false
        };

        this.clickOverlay = this.clickOverlay.bind(this);
        this.clickMenu = this.clickMenu.bind(this);
        this.offMenu = this.offMenu.bind(this);
        this.onMenu = this.onMenu.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    deleteCategory() {
        this.props.deleteCategory(this.props.category.id);
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
                        <Overlay onClick={this.clickOverlay} />
                        <div className="menu">
                            <ul>
                                <li onClick={this.deleteCategory}>delete</li>
                            </ul>
                        </div>
                    </div>
                );
            })();
        }

        // this.props.category

        return (
            <div className="side-bar-category">
                <div className="side-bar-category__wrapper">
                    <div className="side-bar-category__title">{this.props.category.title}</div>
                    <div className="side-bar-category__menu" onClick={this.clickMenu}>•••</div>
                    {modal}
                </div>
                <div>
                    {this.props.category.subcategories.map((subcategory ,i) => {
                        return (
                            <SideBarSubCategory
                                key={i}
                                subcategory={subcategory}
                                showMenu={this.props.showMenu}
                                menuOn={this.props.menuOn}
                                deleteSubcategory={this.props.deleteSubcategory}
                                />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SideBarCategory;