import React from 'react';

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

        let subcategories = [];

        for (let i in this.props.items) {
            subcategories.push(<Todo item={this.props.items[i].item} handleChangeChk={this.props.handleChangeChk} checked={this.props.items[i].checked} />);
        }

        return (
            <div className="subcategory">
                <div>{this.state.subcategoryTitle}</div>
                {subcategories}
            </div>
        );
    }
}

export default Subcategory;
