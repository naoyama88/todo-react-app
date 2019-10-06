import React from 'react';
import './main.css';
import TodoItem from '../../basis/TodoItem';

class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <div className="main__container">
                    <div className="main__header">
                        Shopping
                    </div>
                    <div className="main__content">
                        <div className="todo">
                            <div className="todo__header">IGA</div>
                            <TodoItem item='shampoo' />
                            <TodoItem item='milk' />
                            <TodoItem item='bread' />
                        </div>
                        <div className="todo">
                            <div className="todo__header">Shoppers</div>
                            <TodoItem item='shampoo' />
                            <TodoItem item='body soap' />
                        </div>
                        <div className="todo">
                            <div className="todo__header">Dollerama</div>
                            <TodoItem item='plastic box' />
                            <TodoItem item='pen case' />
                            <TodoItem item='cushion' />
                            <TodoItem item='pillow' />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;