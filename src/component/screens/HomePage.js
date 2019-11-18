import React from "react";

import Header from "../basis/Header/Header";
import SideBar from "../complexes/Sidebar/Sidebar";
import Main from "../complexes/main/Main";
import Footer from "../basis/Footer/Footer";
import SampleJsonData from "./sample_data_in_localstorage.js";

const APP_KEY = "marcus_react_todo_app";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        let data = this.getTodoData();
        this.state = {
            categories: data.categories,
            lastTodoId: data.lastTodoId,
            lastCategoryId: data.lastCategoryId,
            lastSubcategoryId: data.lastSubcategoryId,
            activeCategoryId: data.activeCategoryId || data.categories[0].id,
            newCategoryTitle: null,
            menuOn: false
        };
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.newSubcategory = this.newSubcategory.bind(this);
        this.addNewCategory = this.addNewCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.deleteSubcategory = this.deleteSubcategory.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.setCategoryTitle = this.setCategoryTitle.bind(this);
        this.setSubcategoryTitle = this.setSubcategoryTitle.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.hangleOnClickCategory = this.hangleOnClickCategory.bind(this);
        this.getActiveCategory = this.getActiveCategory.bind(this);
    }

    showMenu(bool) {
        this.setState({
            menuOn: bool
        });
    }

    getTodoData() {
        // return this.getTodoDataFromSampleJson();
        return this.getTodoDataFromLocalStroage();
    }

    handleChangeChk(e) {
        const todoId = Number(e.currentTarget.dataset.todoId);
        let categories = this.state.categories;
        outSideLoop:
        for (let i = 0; i < categories.length; i++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                let items = subcategories[j].items;
                for (let k = 0; k < items.length; k++) {
                    if (items[k].todoId === todoId) {
                        categories[i].subcategories[j].items[k].checked = !items[k].checked;
                        break outSideLoop;
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
        const lastSubcategoryId = this.state.lastSubcategoryId;
        let categories = this.state.categories;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].isCurrentCategory) {
                categories[i].subcategories.push({
                    id: lastSubcategoryId + 1,
                    title: "",
                    items: [],
                });
            }
        }
        this.setState({
            categories: categories,
            lastSubcategoryId: lastSubcategoryId + 1
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

    deleteCategory(categoryId) {
        const yes = window.confirm("Are you sure you delete this category?");
        if (!yes) {
            return;
        }

        let categories = this.state.categories;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === categoryId) {
                categories.splice(i, 1);
            }
        }
        this.setState({
            categories: categories
        });
        this.saveData();
    }

    deleteSubcategory(subcategoryId) {
        let categories = this.state.categories;

        // label
        breakWholeLoop:
        for (let i = 0; i < categories.length; i++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                if (subcategories[j].id === subcategoryId) {
                    categories[i].subcategories.splice(j, 1);
                    break breakWholeLoop;
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
        // TODO validation
        const lastCategoryId = this.state.categories[this.state.categories.length - 1].id;
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

    setCategoryTitle(categoryId, value) {

        let categories = this.state.categories;

        for (let i = 0; i < categories.length; i ++) {
            if (categories[i].id === categoryId) {
                categories[i].title = value;
            }
        }
        this.setState({
            categories: categories
        });
        this.saveData();
    }

    setSubcategoryTitle(subcategoryId, value) {
        let categories = this.state.categories;

        for (let i = 0; i < categories.length; i ++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                if (subcategories[j].id === subcategoryId) {
                    categories[i].subcategories[j].title = value;
                }
            }
        }
        this.setState({
            categories: categories
        });
        this.saveData();
    }

    addTodo(value, subcategoryId) {
        if (!value.trim()) {
            return;
        }
        let categories = this.state.categories;
        const latestId = this.state.lastTodoId + 1;
        const newTodo = {
            todoId: latestId,
            item: value,
            checked: false
        }
        breakWholeLoop:
        for (let i = 0; i < categories.length; i++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                if (subcategories[j].id === subcategoryId) {
                    subcategories[j].items.push(newTodo);
                    break breakWholeLoop;
                }
            }
        }
        this.setState({
            categories: categories,
            lastTodoId: latestId
        });
        console.log(this.state.categories);
        this.saveData();
    }

    hangleOnClickCategory(categoryId) {
        console.log(categoryId);
        let latestCategoryId;
        let categories = this.state.categories;
        for (let i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].id === categoryId) {
                latestCategoryId = this.state.categories[i].id;
                categories[i].isCurrentCategory = true;
            } else {
                categories[i].isCurrentCategory = false;
            }
        }
        this.setState({
            categories: categories,
            activeCategoryId: latestCategoryId,
        });
        this.saveData();
    }

    getActiveCategory() {
        for (let i = 0; i < this.state.categories.length; i++) {
            if (this.state.categories[i].id === this.state.activeCategoryId) {
                return this.state.categories[i];
            }
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SideBar
                    categories={this.state.categories}
                    addNewCategory={this.addNewCategory}
                    newCategoryTitle={this.state.newCategoryTitle}
                    deleteCategory={this.deleteCategory}
                    deleteSubcategory={this.deleteSubcategory}
                    showMenu={this.showMenu}
                    menuOn={this.state.menuOn}
                    hangleOnClickCategory={this.hangleOnClickCategory}
                    />
                <Main
                    category={this.getActiveCategory()}
                    handleChangeChk={this.handleChangeChk}
                    newSubcategory={this.newSubcategory}
                    deleteCategory={this.deleteCategory}
                    deleteSubcategory={this.deleteSubcategory}
                    showMenu={this.showMenu}
                    menuOn={this.state.menuOn}
                    setCategoryTitle={this.setCategoryTitle}
                    setSubcategoryTitle={this.setSubcategoryTitle}
                    addTodo={this.addTodo}
                />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
