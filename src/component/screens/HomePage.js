import React from "react";

import Header from "../basis/header";
import SideBar from "../complexes/sidebar";
import Main from "../complexes/main";
import Footer from "../basis/footer";
import SampleJsonData from "./sample_data_in_localstorage.js";

const APP_KEY = "marcus_react_todo_app";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        let data = this.getTodoData();
        this.state = {
            categories: data.categories,
            lastTodoId: data.lastTodoId
        };
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.newSubcategory = this.newSubcategory.bind(this);
    }

    getTodoData() {
        // return this.getTodoDataFromSampleJson();
        return this.getTodoDataFromLocalStroage();
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
                        categories[i].subcategories[j].items[k].checked = !items[k].checked;
                    }
                }
            }
        }
        this.setState({
            categories: categories
        });
        this.saveData();
    }

    newSubcategory() {
        console.log('asdf');
        // when: run when "add subcategory" box is clicked
        // state: add new empty subcategory to category
        this.addNewSubcategoryBox();
        // interface: show empty box next to existed box
        // this.addNewTransparentBox();
        // interface: then add new "add subcategory" box next to the empty box
        this.saveData();
    }

    addNewSubcategoryBox() {
        // get current category and subcategories
        let categories = this.state.categories;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].isCurrentCategory) {
                categories[i].subcategories.push({
                    title: "",
                    items: [],
                });
            }
        }
        this.setState({
            "categories": categories
        });
    }

    addNewTransparentBox() {
        // get current category and subcategories
        // let currentCategory = this.state("categories").filter(category => {
        //     return category.isCurrentCategory === true;
        // })[0];
        // add "add subcategory" box next to the existed boxes

    }

    saveData() {
        this.storeData(APP_KEY, this.state);
    }

    storeData(key, data) {
        var setjson = JSON.stringify(data);
        localStorage.setItem(key, setjson);
    }

    getTodoDataFromLocalStroage() {
        let jsonObj = localStorage.getItem(APP_KEY);
        return JSON.parse(jsonObj);
    }

    getTodoDataFromSampleJson() {
        // this is for test
        return SampleJsonData();
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SideBar categories={this.state.categories} />
                <Main
                    category={this.state.categories[0]}
                    handleChangeChk={this.handleChangeChk}
                    newSubcategory={this.newSubcategory}
                />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
