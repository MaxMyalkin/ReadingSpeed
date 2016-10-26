import React, { PropTypes } from 'react';
import BaseComponent from './Base';

class Row extends BaseComponent {

    render() {
        return (<div className="row">{ this.props.children }</div>);
    }
}

export default Row;