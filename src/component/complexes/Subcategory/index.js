import React from 'react';
import { Overlay } from './../../basis/Overlay/Overlay.js';
import Todo from '../../basis/Todo';
import './subcategory.css';

class Subcategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOn: false,
            subcategoryTitle: props.subcategory.title
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
        console.log('asdf');
        if (this.props.menuOn && !this.state.menuOn) {
            // avoid duplicate
            return;
        }
        console.log('fghj');

        if (this.state.menuOn === false) {
            console.log('off to on');
            this.onMenu();

        } else {
            console.log('on to off');
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
        let subcategory = [];
        for (const item of this.props.subcategory.items) {
            subcategory.push(
                <Todo
                    item={item.item}
                    todoId={item.todoId}
                    handleChangeChk={this.props.handleChangeChk}
                    checked={item.checked}
                />
            );
        }

        let modal = null;
        if (this.props.menuOn === true && this.state.menuOn === true) {
            modal = (() => {
                return (
                    <div className="menu__modal">
                        <Overlay onClick={this.clickOverlay} />
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

        return (
            <div className="subcategory">
                <div>{this.state.subcategoryTitle}</div>
                {subcategory}
                <div className="dots" onClick={this.clickMenu}>⋮</div>
                {modal}
            </div>
        );
    }
}

export default Subcategory;
