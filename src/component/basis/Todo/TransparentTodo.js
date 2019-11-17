import React from 'react';

import './todo.css';

class TransparentTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewTodo: false
        };

        this.showInputForNewTodo = this.showInputForNewTodo.bind(this);
        this.cancelAddTodo = this.cancelAddTodo.bind(this);
        this.newTodoRef = React.createRef();
    }

    showInputForNewTodo() {
        this.setState({
            addNewTodo: true
        });
    }

    cancelAddTodo() {
        this.setState({
            addNewTodo: false
        });
    }

    addNewTodoButtonClick() {
        const newTodoValue = this.newTodoRef.current.value;
        this.props.addTodo(newTodoValue);
        this.setState({
            addNewTodo: false
        });
    }

    render() {
        return (
            <div className="todo--transparent">
                {(this.state.addNewTodo === true) ? (
                    <div className="add-todo-div">
                        <input ref={this.newTodoRef} id="addTodo" className="add-todo-input" />
                        <button className="add-todo-button" onClick={() => this.addNewTodoButtonClick()}>add</button>
                        <button className="cancel-add-todo-button" onClick={this.cancelAddTodo}>cancel</button>
                    </div>
                ) : (
                    <div className="add-new-todo" onClick={this.showInputForNewTodo}></div>
                )}
            </div>
        );
    }
}

export { TransparentTodo };
