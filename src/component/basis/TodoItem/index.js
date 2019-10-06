import React from 'react';

import './todoItem.css';

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todoItem">
                <label>
                    <input type="checkbox"></input>
                    <span className="checkbox"></span>
                    <span className="input">{this.props.item}</span>
                </label>
            </div>
        );
    }
}

export default TodoItem;
