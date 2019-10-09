import React from 'react';
import './main.css';
import Subcategory from '../Subcategory';
import TransparentSubcategory from '../Subcategory/transparentSubcategory';

class Main extends React.Component {
    render() {

        // this.props.category =
            // {
            //     id: 1,
            //     title: 'Shopping',
            //     isCurrentCategory: true,
            //     subcategories: [
            //         {
            //             title: 'IGA',
            //             items: [
            //                 {
            //                     item: 'shampoo',
            //                     checked: false
            //                 },
            //             ]
            //         },
            //     ]
            // }
        // this.props.newSubcategory

        let subcategories = this.props.category.subcategories.map(subcategory => {
            const items = subcategory.items;
            return <Subcategory subcategoryTitle={subcategory.title} items={items} handleChangeChk={this.props.handleChangeChk} />;
        });
        subcategories.push(<TransparentSubcategory newSubcategory={this.props.newSubcategory} />);

        return (
            <main className="main">
                <div className="main__container">
                    <div className="main__header">
                        {this.props.category.title}
                    </div>
                    <div className="main__content">
                        {subcategories}
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;
