import React from 'react';
import './main.css';
import Subcategory from '../Subcategory';
import TransparentSubcategory from '../Subcategory/transparentSubcategory';

class Main extends React.Component {
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
        let subcategories = this.props.category.subcategories.map(subcategory => {
            const items = subcategory.items;
            return <Subcategory subcategoryTitle={subcategory.title} items={items} handleChangeChk={this.props.handleChangeChk} />;
        });
        subcategories.push(<TransparentSubcategory newSubcategory={this.props.newSubcategory} />);

        let modal = null;
        if (this.props.menuOn === true && this.state.menuOn === true) {
            modal = (() => {
                return (
                    <div className="menu__modal">
                        <div className="overlay" onClick={this.clickOverlay} ></div>
                        <div className="menu">
                            <ul>
                                <li>change title</li>
                                <li onClick={this.deleteCategory}>delete</li>
                            </ul>
                        </div>
                    </div>
                );
            })();
        }

        return (
            <main className="main">
                <div className="main__container">
                    <div className="main__header">
                        {this.props.category.title}
                    </div>
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
