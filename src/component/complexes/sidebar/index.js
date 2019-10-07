import React from 'react';
import './side-bar.css';

import SideBarCategory from './SideBarCategory';

class SideBar extends React.Component {
    render() {

        // this.props.categories

        return (
            <nav className="side-bar">
                {this.props.categories.map(category => {
                    return (
                        <SideBarCategory category={category} />
                    )
                })}
            </nav>
        );
    }
}

export default SideBar;
