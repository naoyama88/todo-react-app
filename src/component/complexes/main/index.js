import React from 'react';
import './main.css';
import Subcategory from '../Subcategory';
import TransparentSubcategory from '../Subcategory/transparentSubcategory';
import { Overlay } from '../../basis/Overlay/Overlay.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOn: false,
            editCategoryTitle: false,
            now: 0
        };
        this.titleInputRef = React.createRef();

        this.clickOverlay = this.clickOverlay.bind(this);
        this.clickMenu = this.clickMenu.bind(this);
        this.offMenu = this.offMenu.bind(this);
        this.onMenu = this.onMenu.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    deleteCategory() {
        this.props.deleteCategory(this.props.category.id);
        this.offMenu();
    }

    changeTitle() {
        this.setState({
            menuOn: false,
            editCategoryTitle: true
        });
    }

    componentDidUpdate() {
        if (this.state.editCategoryTitle) {
            this.titleInputRef.focus();
        }
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

    onBlur(e) {
        this.props.setCategoryTitle(this.props.category.id, e.target.value);
        this.offMenu();
        this.setState({
            editCategoryTitle: false
        });
    }

    render() {
        let index = 0;
        let subcategories = this.props.category.subcategories.map((subcategory, i) => {
            index = i;
            return (
                <Subcategory
                    key={i}
                    subcategory={subcategory}
                    handleChangeChk={this.props.handleChangeChk}
                    showMenu={this.props.showMenu}
                    menuOn={this.props.menuOn}
                    deleteSubcategory={this.props.deleteSubcategory}
                    />
            );
        });
        index++;
        subcategories.push(
            <TransparentSubcategory
                key={index}
                newSubcategory={this.props.newSubcategory}
                />
        );

        return (
            <main className="main">
                <div className="main__container">
                    {this.state.editCategoryTitle ? (
                        <div className="main__header">
                            <input
                                className="main__header--edit"
                                defaultValue={this.props.category.title}
                                ref={(ref) => this.titleInputRef = ref }
                                onBlur={this.onBlur}
                                />
                        </div>
                    ) : (
                        <div className="main__header">
                            {this.props.category.title}
                        </div>
                    )}
                    <div className="main__content">
                        {subcategories}
                    </div>
                    <div className="main__menu" onClick={this.clickMenu}>•••</div>
                    {this.props.menuOn === true && this.state.menuOn === true ? (
                        <div className="menu__modal">
                            <Overlay onClick={this.clickOverlay} />
                            <div className="menu">
                                <ul>
                                    <li onClick={this.changeTitle}>change title</li>
                                    <li onClick={this.deleteCategory}>delete</li>
                                </ul>
                            </div>
                        </div>
                    ) : (null)}
                </div>
            </main>
        );
    }
}

export default Main;
