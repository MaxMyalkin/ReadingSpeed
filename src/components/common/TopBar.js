import React, { PropTypes } from 'react';
import BaseComponent from './Base';

class TopBar extends BaseComponent {

    render() {
        return (<div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu">
                    <li className="menu-text">{ this.props.title }</li>
                </ul>
            </div>
        </div>);
    }
}

TopBar.propTypes = {
    title: PropTypes.string
};

export default TopBar;