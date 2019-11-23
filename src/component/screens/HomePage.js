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
            activeCategoryIndex: data.activeCategoryIndex,
            activeCategory: data.categories[data.activeCategoryIndex],
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
        this.setTodoTitle = this.setTodoTitle.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.hangleOnClickCategory = this.hangleOnClickCategory.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
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

    deleteTodo(todoId) {
        let categories = this.state.categories;

        // label
        breakWholeLoop:
        for (let i = 0; i < categories.length; i++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                let items = subcategories[j].items;
                for (let k = 0; k < items.length; k++) {
                    if (items[k].todoId === todoId) {
                        categories[i].subcategories[j].items.splice(k, 1);
                        break breakWholeLoop;
                    }
                }
            }
        }
        this.setState({
            categories: categories
        });
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
    }

    newSubcategory() {
        this.addNewSubcategoryBox();
    }

    addNewSubcategoryBox() {
        const { lastSubcategoryId, categories, activeCategoryIndex } = this.state;
        categories[activeCategoryIndex].subcategories.push({
            id: lastSubcategoryId + 1,
            title: "",
            items: [],
        });
        this.setState({
            categories: categories,
            lastSubcategoryId: lastSubcategoryId + 1
        });
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
    }

    addNewCategory(value) {
        const inputValue = value;
        // TODO validation
        const lastCategoryId = this.state.categories[this.state.categories.length - 1].id;
        const newCategory = {
            id: lastCategoryId + 1,
            title: inputValue + "",
            subcategories: []
        };
        let categories = this.state.categories;
        categories.push(newCategory);
        this.setState({
            categories: categories,
            newCategoryTitle: null
        });
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
    }

    setSubcategoryTitle(subcategoryId, value) {
        let categories = this.state.categories;
        breakWholeLoop:
        for (let i = 0; i < categories.length; i ++) {
            let subcategories = categories[i].subcategories;
            for (let j = 0; j < subcategories.length; j++) {
                if (subcategories[j].id === subcategoryId) {
                    categories[i].subcategories[j].title = value;
                    break breakWholeLoop;
                }
            }
        }
        this.setState({
            categories: categories
        });
    }

    setTodoTitle(todoId, value) {
        let { categories } = this.state;
        breakWholeLoop:
        for (let i = 0; i < categories.length; i ++) {
            const { subcategories } = categories[i];
            for (let j = 0; j < subcategories.length; j++) {
                const { items } = subcategories[j];
                for (let k = 0; k < items.length; k++) {
                    if (items[k].todoId === todoId) {
                        categories[i].subcategories[j].items[k].item = value;
                        break breakWholeLoop;
                    }
                }
            }
        }

        this.setState({
            categories: categories
        });
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
    }

    hangleOnClickCategory(categoryId) {
        let { categories } = this.state;
        let activeIndex = -1;
        for (let i = 0; i < categories.length; i++) {
            if (categories[i].id === categoryId) {
                activeIndex = i;
                break;
            }
        }
        this.setState({
            categories: categories,
            activeCategoryIndex: activeIndex,
            activeCategory: categories[activeIndex]
        });
    }

    componentDidUpdate() {
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
                    deleteCategory={this.deleteCategory}
                    deleteSubcategory={this.deleteSubcategory}
                    showMenu={this.showMenu}
                    menuOn={this.state.menuOn}
                    hangleOnClickCategory={this.hangleOnClickCategory}
                    />
                <Main
                    category={this.state.activeCategory}
                    handleChangeChk={this.handleChangeChk}
                    newSubcategory={this.newSubcategory}
                    deleteCategory={this.deleteCategory}
                    deleteSubcategory={this.deleteSubcategory}
                    showMenu={this.showMenu}
                    menuOn={this.state.menuOn}
                    setCategoryTitle={this.setCategoryTitle}
                    setSubcategoryTitle={this.setSubcategoryTitle}
                    setTodoTitle={this.setTodoTitle}
                    addTodo={this.addTodo}
                    deleteTodo={this.deleteTodo}
                />
                <Footer />
            </div>
        );
    }
}

export default HomePage;
