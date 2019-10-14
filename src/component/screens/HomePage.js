import React from "react";

import Header from "../basis/header";
import SideBar from "../complexes/sidebar";
import Main from "../complexes/main";
import Footer from "../basis/footer";
import SampleJsonData from "./sample_data_in_localstorage.js";

const APP_KEY = "marcus_react_todo_app";

// TODO 3点divクリックでメニューだす
// TODO そのメニュー内に削除機能つける

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        let data = this.getTodoData();
        this.state = {
            categories: data.categories,
            lastTodoId: data.lastTodoId,
            newCategoryTitle: null
        };
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.newSubcategory = this.newSubcategory.bind(this);
        this.addNewCategory = this.addNewCategory.bind(this);
        this.deleteSubcategory = this.deleteSubcategory.bind(this);
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
        this.addNewSubcategoryBox();
        this.saveData();
    }

    addNewSubcategoryBox() {
        // get current category and subcategories
        const latestCategory = this.state.categories[this.state.categories.length - 1];
        const lastSuccategoryId = latestCategory.subcategories[latestCategory.subcategories.length - 1].id;
        let categories = this.state.categories;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].isCurrentCategory) {
                categories[i].subcategories.push({
                    id: lastSuccategoryId + 1,
                    title: "",
                    items: [],
                });
            }
        }
        this.setState({
            "categories": categories
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

    getTodoDataFromLocalStroage() {
        let jsonObj = localStorage.getItem(APP_KEY);
        return JSON.parse(jsonObj);
    }

    getTodoDataFromSampleJson() {
        // this is for test
        return SampleJsonData();
    }

    deleteSubcategory(subcategoryId) {
        let categories = this.state.categories;
        for (let i = 0; i < categories.length; i++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                if (subcategories[j].id === subcategoryId) {
                    categories[i].subcategories.splice(j, 1);
                }
            }
        }
        this.setState({
            categories: categories
        });
        this.saveData();
    }

    addNewCategory(value) {
        const inputValue = value;
        console.log(inputValue);
        // TODO validation
        const lastCategoryId = this.state.categories[this.state.categories.length - 1].id;
        console.log(lastCategoryId);
        const newCategory = {
            id: lastCategoryId + 1,
            title: inputValue + "",
            isCurrentCategory: false,
            subcategories: []
        };
        let categories = this.state.categories;
        categories.push(newCategory);
        this.setState({
            categories: categories,
            newCategoryTitle: null
        });
        this.saveData();
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SideBar
                    categories={this.state.categories}
                    addNewCategory={this.addNewCategory}
                    newCategoryTitle={this.state.newCategoryTitle}
                    deleteSubcategory={this.deleteSubcategory}
                    />
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
