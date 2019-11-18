import React from 'react';
import { Overlay } from '../../basis/Overlay/Overlay';
import Todo from '../../basis/Todo/Todo';
import { TransparentTodo } from '../../basis/Todo/TransparentTodo';
import './subcategory.css';

class Subcategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOn: false,
            editSubcategoryTitle: false
        };
        this.titleInputRef = React.createRef();

        this.clickOverlay = this.clickOverlay.bind(this);
        this.clickMenu = this.clickMenu.bind(this);
        this.offMenu = this.offMenu.bind(this);
        this.onMenu = this.onMenu.bind(this);
        this.deleteSubcategory = this.deleteSubcategory.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.addTodo = this.addTodo.bind(this);
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

    componentDidUpdate() {
        if (this.state.editSubcategoryTitle) {
            this.titleInputRef.focus();
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

    changeTitle() {
        this.setState({
            menuOn: false,
            editSubcategoryTitle: true
        });
    }

    onBlur(e) {
        this.props.setSubcategoryTitle(this.props.subcategory.id, e.target.value);
        this.offMenu();
        this.setState({
            editSubcategoryTitle: false
        });
    }

    addTodo(value) {
        this.props.addTodo(value, this.props.subcategory.id);
    }

    render() {
        let subcategory = [];
        let i;
        for (i in this.props.subcategory.items) {
            subcategory.push(
                <Todo
                    key={i}
                    item={this.props.subcategory.items[i].item}
                    todoId={this.props.subcategory.items[i].todoId}
                    handleChangeChk={this.props.handleChangeChk}
                    checked={this.props.subcategory.items[i].checked}
                />
            );
        }
        subcategory.push(
            <TransparentTodo
                key={i + 1}
                handleChangeChk={this.props.handleChangeChk}
                addTodo={this.addTodo}
            />
        );

        return (
            <div className="subcategory">
                {this.state.editSubcategoryTitle ? (
                    <div>
                        <input
                            className="subcategory__title--edit"
                            defaultValue={this.props.subcategory.title}
                            ref={(ref) => this.titleInputRef = ref }
                            onBlur={this.onBlur}
                            />
                    </div>
                ) : (
                    <div>{this.props.subcategory.title}</div>
                )}
                {subcategory}
                <div className="dots" onClick={this.clickMenu}>⋮</div>
                {this.props.menuOn === true && this.state.menuOn === true &&
                    <div className="menu__modal">
                        <Overlay onClick={this.clickOverlay} />
                        <div className="menu">
                            <ul>
                                <li onClick={this.changeTitle}>change title</li>
                                <li onClick={this.deleteSubcategory}>delete</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Subcategory;
