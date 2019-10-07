import React from 'react';
import './main.css';
import Subcategory from '../Subcategory';

class Main extends React.Component {
    render() {

        // this.props.category =
            // {
            //     id: 1,
            //     title: 'Shopping',
            //     lastSelected: true,
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

        const subcategories = this.props.category.subcategories.map(subcategory => {
            const items = subcategory.items;
            return <Subcategory subcategoryTitle={subcategory.title} items={items} handleChangeChk={this.props.handleChangeChk} />;
        });

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
