import React from 'react';

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
        return (
            <div className="side-bar-category--transparent">
                {(this.state.addNewCategory === true) ? (
                    <div className="add-category-div">
                        <input id="addCategory" className="add-category-input" />
                        <button className="add-category-button" onClick={this.addNewCategoryButtonClick}>add</button>
                        <button className="cancel-add-category-button" onClick={this.cancelAddCategory}>cancel</button>
                    </div>
                ) : (
                    <div className="add-new-category" onClick={this.showInputForNewCategory}></div>
                )}
            </div>
        );
    }
}

export default TransparentSideBarCategory;
