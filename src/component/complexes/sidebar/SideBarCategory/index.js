import React from 'react';

import SideBarSubCategory from '../SideBarSubcategory';

class SideBarCategory extends React.Component {
    render() {
        // this.props.category

        return (
            <div className="side-bar-category">
                <div>
                    <div className="side-bar-category__title">{this.props.category.title}</div>
                    <div className="side-bar-subcategory__menu">•••</div>
                </div>
                <div>
                    {this.props.category.subcategories.map(subcategory => {
                        return (
                            <SideBarSubCategory
                                subcategory={subcategory}
                                showMenu={this.props.showMenu}
                                menuOn={this.props.menuOn}
                                deleteSubcategory={this.props.deleteSubcategory}
                                />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SideBarCategory;