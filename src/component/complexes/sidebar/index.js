import React from 'react';
import './side-bar.css';

import SideBarCategory from './SideBarCategory';
import TransparentSideBarCategory from './SideBarCategory/TransparentSideBarCategory';

class SideBar extends React.Component {
    // todo when click category, movo page to it
    // onclick
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
                            hangleOnClickCategory={this.props.hangleOnClickCategory}
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
