import React from 'react';

import './todo.css';

class Todo extends React.Component {

    // this.props.handleChangeChk
    // this.props.checked
    // this.props.item

    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked,
            item: props.item
        };
    }

    render() {
        return (
            <div className="todo">
                <label>
                    <input type="checkbox" defaultChecked={this.state.checked} data-todo-id={this.props.todoId} onChange={this.props.handleChangeChk}></input>
                    <span className="checkbox"></span>
                    <span className="input">{this.state.item}</span>
                </label>
            </div>
        );
    }
}

export default Todo;
