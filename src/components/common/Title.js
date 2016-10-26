import React, { PropTypes } from 'react';
import BaseComponent from './Base';

class Title extends BaseComponent {

    render() {
        return <h3 className="b-title">{ this.props.children }</h3>;
    }
}

export default Title;