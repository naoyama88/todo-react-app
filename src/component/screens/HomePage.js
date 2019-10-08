import React from "react";

import Header from "../basis/header";
import SideBar from "../complexes/sidebar";
import Main from "../complexes/main";
import Footer from "../basis/footer";

const APP_KEY = "marcus_react_todo_app";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        let data = this.getTodoData();
        console.log(data);
        this.state = {
            categories: data.categories,
            lastTodoId: data.lastTodoId
        };
        this.handleChangeChk = this.handleChangeChk.bind(this);
    }

    getTodoData() {
        return this.getTodoDataFromLocalStrage();
    }

    handleChangeChk(e) {
        const todoId = Number(e.currentTarget.dataset.todoId);
        let categories = this.state.categories;
        for (let i = 0; i < categories.length; i++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                let items = subcategories[j].items;
                for (let k = 0; k < items.length; k++) {
                    if (items[k].todoId === todoId) {
                        categories[i].subcategories[j].items[
                            k
                        ].checked = !items[k].checked;
                    }
                }
            }
        }
        this.setState({
            categories: categories
        });
        this.saveData();
    }

    saveData() {
        this.storeData(APP_KEY, this.state);
    }

    storeData(key, data) {
        var setjson = JSON.stringify(data);
        localStorage.setItem(key, setjson);
    }

    getTodoDataFromLocalStrage() {
        let jsonObj = localStorage.getItem(APP_KEY);
        return JSON.parse(jsonObj);
        // return {
        //     lastTodoId: 13,
        //     categories: [
        //         {
        //             id: 1,
        //             title: "Shopping",
        //             lastSelected: true,
        //             subcategories: [
        //                 {
        //                     title: "IGA",
        //                     items: [
        //                         {
        //                             todoId: 1,
        //                             item: "shampoo",
        //                             checked: false
        //                         },
        //                         {
        //                             todoId: 2,
        //                             item: "milk",
        //                             checked: true
        //                         },
        //                         {
        //                             todoId: 3,
        //                             item: "bread",
        //                             checked: false
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     title: "Shoppers",
        //                     items: [
        //                         {
        //                             todoId: 4,
        //                             item: "shampoo",
        //                             checked: false
        //                         },
        //                         {
        //                             todoId: 5,
        //                             item: "body soap",
        //                             checked: true
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     title: "Dollerama",
        //                     items: [
        //                         {
        //                             todoId: 6,
        //                             item: "plastic box",
        //                             checked: true
        //                         },
        //                         {
        //                             todoId: 7,
        //                             item: "pen case",
        //                             checked: false
        //                         },
        //                         {
        //                             todoId: 8,
        //                             item: "cushion",
        //                             checked: false
        //                         },
        //                         {
        //                             todoId: 9,
        //                             item: "pillow",
        //                             checked: true
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             id: 2,
        //             title: "Gym",
        //             lastSelected: false,
        //             subcategories: [
        //                 {
        //                     title: "Gym",
        //                     items: [
        //                         {
        //                             todoId: 10,
        //                             item: "chest",
        //                             checked: true
        //                         },
        //                         {
        //                             todoId: 11,
        //                             item: "leg",
        //                             checked: false
        //                         }
        //                     ]
        //                 },
        //                 {
        //                     title: "Food",
        //                     items: [
        //                         {
        //                             todoId: 12,
        //                             item: "vegitable",
        //                             checked: false
        //                         },
        //                         {
        //                             todoId: 13,
        //                             item: "100g protain",
        //                             checked: true
        //                         }
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // };
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SideBar categories={this.state.categories} />
                <Main
                    category={this.state.categories[0]}
                    handleChangeChk={this.handleChangeChk}
                />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
