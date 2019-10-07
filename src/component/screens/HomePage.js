import React from 'react';

import Header from '../basis/header';
import SideBar from '../complexes/sidebar';
import Main from '../complexes/main';
import Footer from '../basis/footer';

class HomePage extends React.Component {
    APP_KEY = 'marcus_react_todo_app';
    constructor(props) {
        super(props);
        let data = this.getTodoData();
        let lastData = data.filter(category => {
            return category.lastSelected === true;
        })[0];
        this.state = {
            categories: data,
            lastSelecteCcategory: lastData
        };

        this.handleChangeChk = this.handleChangeChk.bind(this);
    }

    getTodoData() {
        let data;
        if ('api is not needed') { // TODO get from where? (depending on app structure design)
            data = this.getTodoDataFromLocalStrage();
        }
        return data;
    }

    handleChangeChk(e) {
        console.log(e);
        // this.setState({value: e.target.value});
    }

    getTodoDataFromLocalStrage() {
        // let jsonObj = localStorage.getItem(this.APP_KEY);
        // return JSON.parse(jsonObj);
        return [
            {
                id: 1,
                title: 'Shopping',
                lastSelected: true,
                subcategories: [
                    {
                        title: 'IGA',
                        items: [
                            {
                                item: 'shampoo',
                                checked: false
                            },
                            {
                                item: 'milk',
                                checked: true
                            },
                            {
                                item: 'bread',
                                checked: false
                            }
                        ]
                    },
                    {
                        title: 'Shoppers',
                        items: [
                            {
                                item: 'shampoo',
                                checked: false
                            },
                            {
                                item: 'body soap',
                                checked: true
                            },
                        ]
                    },
                    {
                        title: 'Dollerama',
                        items: [
                            {
                                item: 'plastic box',
                                checked: true
                            },
                            {
                                item: 'pen case',
                                checked: false
                            },
                            {
                                item: 'cushion',
                                checked: false
                            },
                            {
                                item: 'pillow',
                                checked: true
                            }
                        ]
                    },
                ]
            },
            {
                id: 2,
                title: 'Gym',
                lastSelected: false,
                subcategories: [
                    {
                        title: 'Gym',
                        items: [
                            {
                                item: 'chest',
                                checked: true
                            },
                            {
                                item: 'leg',
                                checked: false
                            },
                        ]
                    },
                    {
                        title: 'Food',
                        items: [
                            {
                                item: 'vegitable',
                                checked: false
                            },
                            {
                                item: '100g protain',
                                checked: true
                            },
                        ]
                    },
                ]
            }
        ];
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SideBar categories={this.state.categories} />
                <Main
                    category={this.state.lastSelecteCcategory}
                    handleChangeChk={this.handleChangeChk}
                />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
