import React from 'react';
import './side-bar.css';

import SideBarCategory from './SideBarCategory';
import TransparentSideBarCategory from './SideBarCategory/TransparentSideBarCategory';

class SideBar extends React.Component {
    render() {
        return (
            <nav className="side-bar">
                {this.props.categories.map(category => {
                    return (
                        <SideBarCategory
                            category={category}
                            showMenu={this.props.showMenu}
                            menuOn={this.props.menuOn}
                            deleteCategory={this.props.deleteCategory}
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
