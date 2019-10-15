import React from 'react';
import './main.css';
import Subcategory from '../Subcategory';
import TransparentSubcategory from '../Subcategory/transparentSubcategory';
import { Input } from '../../basis/Parts/Input';
import { Overlay } from '../../basis/Overlay/Overlay.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOn: false,
            editCategoryTitle: false
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
            editCategoryTitle: true
        });
    }

    componentDidMount() {
        if (this.state.editCategoryTitle) {
            console.log('componentDidMount()');
            this.titleInputRef.current.focus();
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
        let subcategories = this.props.category.subcategories.map(subcategory => {
            return (
                <Subcategory
                    subcategory={subcategory}
                    handleChangeChk={this.props.handleChangeChk}
                    showMenu={this.props.showMenu}
                    menuOn={this.props.menuOn}
                    deleteSubcategory={this.props.deleteSubcategory}
                    />
            );
        });
        subcategories.push(<TransparentSubcategory newSubcategory={this.props.newSubcategory} />);

        let modal = null;
        if (this.props.menuOn === true && this.state.menuOn === true) {
            modal = (() => {
                return (
                    <div className="menu__modal">
                        <Overlay onClick={this.clickOverlay} />
                        <div className="menu">
                            <ul>
                                <li onClick={this.changeTitle}>change title</li>
                                <li onClick={this.deleteCategory}>delete</li>
                            </ul>
                        </div>
                    </div>
                );
            })();
        }

        let mainHeader = null;
        if (this.state.editCategoryTitle) {
            mainHeader = (() => {
                return (
                    <div className="main__header">
                        <Input className="main__header--edit" defaultValue={this.props.category.title} ref={this.titleInputRef} onBlur={this.onBlur} />
                    </div>
                );
            })();
        } else {
            mainHeader = (() => {
                return (
                    <div className="main__header">
                        {this.props.category.title}
                    </div>
                );
            })();
        }

        return (
            <main className="main">
                <div className="main__container">
                    {mainHeader}
                    <div className="main__content">
                        {subcategories}
                    </div>
                    <div className="main__menu" onClick={this.clickMenu}>•••</div>
                    {modal}
                </div>
            </main>
        );
    }
}

export default Main;
