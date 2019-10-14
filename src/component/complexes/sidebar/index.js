import React from 'react';
import './side-bar.css';

import SideBarCategory from './SideBarCategory';
import TransparentSideBarCategory from './SideBarCategory/TransparentSideBarCategory';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOn: false
        };

        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(bool) {
        this.setState({
            menuOn: bool
        });
    }

    render() {

        // this.props.categories

        return (
            <nav className="side-bar">
                {this.props.categories.map(category => {
                    return (
                        <SideBarCategory
                            category={category}
                            showMenu={this.showMenu}
                            menuOn={this.state.menuOn}
                            deleteSubcategory={this.props.deleteSubcategory}
                            />
                    )
                })}
                <TransparentSideBarCategory addNewCategory={this.props.addNewCategory} newCategoryTitle={this.props.newCategoryTitle} />
            </nav>
        );
    }
}

export default SideBar;
