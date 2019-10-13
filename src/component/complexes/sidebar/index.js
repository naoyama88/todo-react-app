import React from 'react';
import './side-bar.css';

import SideBarCategory from './SideBarCategory';
import TransparentSideBarCategory from './SideBarCategory/TransparentSideBarCategory';

class SideBar extends React.Component {
    render() {

        // this.props.categories

        return (
            <nav className="side-bar">
                {this.props.categories.map(category => {
                    return (
                        <SideBarCategory category={category} />
                    )
                })}
                <TransparentSideBarCategory addNewCategory={this.props.addNewCategory} newCategoryTitle={this.props.newCategoryTitle} />
            </nav>
        );
    }
}

export default SideBar;
