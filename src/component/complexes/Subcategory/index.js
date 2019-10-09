import React from 'react';
import './subcategory.css';
import Todo from '../../basis/Todo';

class Subcategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            subcategoryTitle: props.subcategoryTitle
        };
    }

    render() {

        // this.props.subcategoryTitle
        // this.props.items
        // this.props.handleChangeChk

        let subcategory = [];

        for (let i in this.props.items) {
            subcategory.push(
                <Todo
                    item={this.props.items[i].item}
                    todoId={this.props.items[i].todoId}
                    handleChangeChk={this.props.handleChangeChk}
                    checked={this.props.items[i].checked}
                />
            );
        }

        return (
            <div className="subcategory">
                <div>{this.state.subcategoryTitle}</div>
                {subcategory}
                <div className="dots">⋮</div>
            </div>
        );
    }
}

export default Subcategory;
