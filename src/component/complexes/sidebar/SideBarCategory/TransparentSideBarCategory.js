import React from 'react';

import { Input } from '../../../basis/Parts/Input.js';

class TransparentSideBarCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewCategory: false
        };

        this.showInputForNewCategory = this.showInputForNewCategory.bind(this);
        this.cancelAddCategory = this.cancelAddCategory.bind(this);
        this.addNewCategoryButtonClick = this.addNewCategoryButtonClick.bind(this);
    }

    showInputForNewCategory() {
        this.setState({
            addNewCategory: true
        });
    }

    cancelAddCategory() {
        this.setState({
            addNewCategory: false
        });
    }

    addNewCategoryButtonClick() {
        const value = document.getElementById("addCategory").value;
        this.props.addNewCategory(value);
        this.setState({
            addNewCategory: false
        });
    }

    render() {

        let inputCategory = null;
        if (this.state.addNewCategory === true) {
            inputCategory = (() => {
                return (
                    <div className="add-category-div">
                        <Input id="addCategory" className="add-category-input" value={this.props.newCategoryTitle} />
                        <button className="add-category-button" onClick={this.addNewCategoryButtonClick}>add</button>
                        <button className="cancel-add-category-button" onClick={this.cancelAddCategory}>cancel</button>
                    </div>
                );
            })();
        } else {
            inputCategory = (() => {
                return (
                    <div className="add-new-category" onClick={this.showInputForNewCategory}></div>
                );
            })();
        }

        return (
            <div className="side-bar-category--transparent">
                {inputCategory}
            </div>
        );
    }
}

export default TransparentSideBarCategory;
