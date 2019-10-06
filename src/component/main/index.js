import React from 'react';
import './main.css';

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
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">source</span>
                                </label>
                            </div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">milk</span>
                                </label>
                            </div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">bread</span>
                                </label>
                            </div>
                        </div>
                        <div className="todo">
                            <div className="todo__header">Shoppers</div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">shampoo</span>
                                </label>
                            </div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">body soap</span>
                                </label>
                            </div>
                        </div>
                        <div className="todo">
                            <div className="todo__header">Dollerama</div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">plastic box</span>
                                </label>
                            </div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">pen case</span>
                                </label>
                            </div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">cushion</span>
                                </label>
                            </div>
                            <div className="todo__item">
                                <label>
                                    <input type="checkbox"></input>
                                    <span className="checkbox"></span>
                                    <span className="input">pillow</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;