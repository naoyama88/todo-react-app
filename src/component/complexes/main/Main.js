import React from 'react';
import './main.css';
import Subcategory from '../Subcategory/Subcategory';
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

        this.clickMenu = this.clickMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    deleteCategory() {
        this.props.deleteCategory(this.props.category.id);
        this.toggleMenu(false);
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
        this.toggleMenu(!this.state.menuOn);
    }

    toggleMenu(bool) {
        this.setState({ menuOn: bool });
        this.props.showMenu(bool);
    }

    onBlur(e) {
        this.props.setCategoryTitle(this.props.category.id, e.target.value);
        this.toggleMenu(false);
        this.setState({
            editCategoryTitle: false
        });
    }

    render() {
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
                        {this.props.category.subcategories.map((subcategory, i) => {
                            return (
                                <Subcategory
                                    key={i}
                                    subcategory={subcategory}
                                    handleChangeChk={this.props.handleChangeChk}
                                    showMenu={this.props.showMenu}
                                    menuOn={this.props.menuOn}
                                    deleteSubcategory={this.props.deleteSubcategory}
                                    setSubcategoryTitle={this.props.setSubcategoryTitle}
                                    setTodoTitle={this.props.setTodoTitle}
                                    addTodo={this.props.addTodo}
                                    deleteTodo={this.props.deleteTodo}
                                    />
                            )
                        })}
                        <TransparentSubcategory
                            newSubcategory={this.props.newSubcategory}
                            />
                    </div>
                    <div className="main__menu" onClick={this.clickMenu}>•••</div>
                    {this.props.menuOn === true && this.state.menuOn === true &&
                        <div className="menu__modal">
                            <Overlay onClick={() => this.toggleMenu(false)} />
                            <div className="menu">
                                <ul>
                                    <li onClick={this.changeTitle}>change title</li>
                                    <li onClick={this.deleteCategory}>delete</li>
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </main>
        );
    }
}

export default Main;
