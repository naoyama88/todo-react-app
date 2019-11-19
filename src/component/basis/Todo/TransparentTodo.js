import React from 'react';

import './todo.css';

class TransparentTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewTodo: false
        };

        this.toggleAddTodo = this.toggleAddTodo.bind(this);
        this.newTodoRef = React.createRef();
    }

    toggleAddTodo(bool) {
        this.setState({ addNewTodo: bool });
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
                        <button
                            className="add-todo-button"
                            onClick={() => this.addNewTodoButtonClick()}>
                                add
                        </button>
                        <button
                            className="cancel-add-todo-button"
                            onClick={() => this.toggleAddTodo(false)}>
                                cancel
                        </button>
                    </div>
                ) : (
                    <div className="add-new-todo" onClick={() => this.toggleAddTodo(true)}></div>
                )}
            </div>
        );
    }
}

export { TransparentTodo };
