import React from 'react';
import './sidebar.css';

class SideBar extends React.Component {

    render() {
        return (
            <nav className="sidebar">
                <div className="todo__category">
                    <div className="category__title">All</div>
                    <div className="todo todo__first"><div className="todo__title">Shopping</div></div>
                    <div className="todo todo__first"><div className="todo__title">SchoolAssignment</div></div>
                    <div className="todo todo__first"><div className="todo__title">Work</div></div>
                    <div className="todo todo__first"><div className="todo__title">Body</div></div>
                    <div className="todo__first">
                        <div className="todo todo__second"><div className="todo__title">Food</div></div>
                        <div className="todo todo__second"><div className="todo__title">Gym</div></div>
                        <div className="todo todo__second"><div className="todo__title">Scale</div></div>
                    </div>
                </div>
                <div className="todo__category">
                    <div className="category__title">Favorite</div>
                    <div className="todo todo__first"><div className="todo__title">Shopping</div></div>
                    <div className="todo todo__first"><div className="todo__title">SchoolAssignment</div></div>
                    <div className="todo todo__first"><div className="todo__title">Work</div></div>
                    <div className="todo todo__first"><div className="todo__title">Body</div></div>
                    <div className="todo__first">
                        <div className="todo todo__second"><div className="todo__title">Food</div></div>
                        <div className="todo todo__second"><div className="todo__title">Gym</div></div>
                        <div className="todo todo__second"><div className="todo__title">Scale</div></div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar;
