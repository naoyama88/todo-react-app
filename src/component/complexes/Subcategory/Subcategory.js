import React from 'react';
import { Overlay } from '../../basis/Overlay/Overlay';
import Todo from '../../basis/Todo/Todo';
import { TransparentTodo } from '../../basis/Todo/TransparentTodo';
import './subcategory.css';

class Subcategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOn: false,
            editSubcategoryTitle: false
        };
        this.titleInputRef = React.createRef();

        this.clickMenu = this.clickMenu.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.deleteSubcategory = this.deleteSubcategory.bind(this);
        this.changeTitle = this.changeTitle.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    deleteSubcategory() {
        this.props.deleteSubcategory(this.props.subcategory.id);
        this.toggleMenu(false);
    }

    clickMenu() {
        if (this.props.menuOn && !this.state.menuOn) {
            // avoid duplicate
            return;
        }
        this.toggleMenu(!this.state.menuOn);
    }

    componentDidUpdate() {
        if (this.state.editSubcategoryTitle) {
            this.titleInputRef.focus();
        }
    }

    toggleMenu(bool) {
        this.setState({
            menuOn: bool
        });
        this.props.showMenu(bool);
    }

    changeTitle() {
        this.setState({
            menuOn: false,
            editSubcategoryTitle: true
        });
    }

    onBlur(e) {
        this.props.setSubcategoryTitle(this.props.subcategory.id, e.target.value);
        this.toggleMenu(false);
        this.setState({
            editSubcategoryTitle: false
        });
    }

    addTodo(value) {
        this.props.addTodo(value, this.props.subcategory.id);
    }

    render() {
        return (
            <div className="subcategory">
                {this.state.editSubcategoryTitle ? (
                    <div>
                        <input
                            className="subcategory__title--edit"
                            defaultValue={this.props.subcategory.title}
                            ref={(ref) => this.titleInputRef = ref }
                            onBlur={this.onBlur}
                            />
                    </div>
                ) : (
                    <div>{this.props.subcategory.title}</div>
                )}
                {this.props.subcategory.items.map((item) => {
                    return (
                        <Todo
                            key={item.todoId}
                            item={item.item}
                            todoId={item.todoId}
                            handleChangeChk={this.props.handleChangeChk}
                            checked={item.checked}
                            showMenu={this.props.showMenu}
                            menuOn={this.props.menuOn}
                            deleteTodo={this.props.deleteTodo}
                            />
                    )
                })}
                <TransparentTodo
                    key={9999}
                    handleChangeChk={this.props.handleChangeChk}
                    addTodo={this.addTodo}
                    />
                <div className="dots" onClick={this.clickMenu}>⋮</div>
                {this.props.menuOn === true && this.state.menuOn === true &&
                    <div className="menu__modal">
                        <Overlay onClick={() => this.toggleMenu(false)} />
                        <div className="menu">
                            <ul>
                                <li onClick={this.changeTitle}>change title</li>
                                <li onClick={this.deleteSubcategory}>delete</li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Subcategory;
