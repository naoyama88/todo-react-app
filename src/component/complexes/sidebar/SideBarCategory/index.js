import React from 'react';

import SideBarSubcategory from '../SideBarSubcategory';

class SideBarCategory extends React.Component {
    render() {

        // this.props.category

        return (
            <div className="side-bar-category">
                <div className="side-bar-category__title">{this.props.category.title}</div>
                <div>
                    {this.props.category.subcategories.map(subcategory => {
                        return (
                            <SideBarSubcategory subcategory={subcategory} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default SideBarCategory;