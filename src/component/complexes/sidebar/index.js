import React from 'react';
import './side-bar.css';

import SideBarCategory from './SideBarCategory';
import TransparentSideBarCategory from './SideBarCategory/TransparentSideBarCategory';

class SideBar extends React.Component {
    render() {
        return (
            <nav className="side-bar">
                {this.props.categories.map((category, i) => {
                    return (
                        <SideBarCategory
                            key={i}
                            category={category}
                            showMenu={this.props.showMenu}
                            menuOn={this.props.menuOn}
                            deleteCategory={this.props.deleteCategory}
                            deleteSubcategory={this.props.deleteSubcategory}
                            />
                    )
                })}
                <TransparentSideBarCategory
                    addNewCategory={this.props.addNewCategory}
                    />
            </nav>
        );
    }
}

export default SideBar;
