import React from 'react';
import { Overlay } from '../Overlay/Overlay';

import './todo.css';

class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
            item: props.item,
            menuOn: false,
            editTodoTitle: false,
        };

        this.clickMenu = this.clickMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.onBlur = this.onBlur.bind(this);
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

    changeTitle() {
        this.setState({
            menuOn: false,
            editTodoTitle: true
        });
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.todoId);
        this.toggleMenu(false);
    }

    onBlur(e) {
        this.props.setTodoTitle(this.props.todoId, e.target.value);
        this.toggleMenu(false);
        this.setState({
            editTodoTitle: false
        });
    }

    render() {
        return (
            <div className="todo" data-todo-id={this.props.todoId}>
                <label>
                    <input
                        type="checkbox"
                        defaultChecked={this.state.checked}
                        data-todo-id={this.props.todoId}
                        onChange={this.props.handleChangeChk}>
                    </input>
                    <span className="checkbox"></span>
                    {this.state.editTodoTitle ? (
                        <span>
                            <input
                                className="todo__title--edit"
                                defaultValue={this.state.item}
                                ref={(ref) => this.titleInputRef = ref }
                                onBlur={this.onBlur}
                                />
                        </span>
                    ) : (
                        <span className="input">{this.state.item}</span>
                    )}

                </label>
                <div className="todo__menu" onClick={this.clickMenu}>•••</div>
                {this.props.menuOn === true && this.state.menuOn === true &&
                    <div className="menu__modal">
                        <Overlay onClick={() => this.toggleMenu(false)} />
                        <div className="menu">
                            <ul>
                                <li onClick={this.changeTitle}>change title</li>
                                <li onClick={this.deleteTodo}>delete</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Todo;
