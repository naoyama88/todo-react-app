import React from 'react';

import './SideBarSubcategory.css';

class SideBarSubcategoty extends React.Component {
    render() {

        // this.props.subcategory

        return (
            <div className="side-bar-subcategory">
                <div className="side-bar-subcategory__title">{this.props.subcategory.title}</div>
            </div>
        );
    }
}

export default SideBarSubcategoty;
