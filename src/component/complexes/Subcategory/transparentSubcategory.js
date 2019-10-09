import React from 'react';

class TransparentSubcategory extends React.Component {

    render() {
        return (
            <div className="subcategory--transparent" onClick={this.props.newSubcategory}>
                <div className="subcategory--transparent-content">+</div>
            </div>
        );
    }
}

export default TransparentSubcategory;