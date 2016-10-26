import React, { PropTypes } from 'react';
import BaseComponent from './Base';
import classnames from 'classnames';

class Column extends BaseComponent {

    render() {
        const classes = classnames([
            'column',
            `large-${this.props.size}`,
            `medium-${this.props.size}`,
            `small-${this.props.size}`,
            `large-offset-${this.props.offset}`,
            `medium-offset-${this.props.offset}`,
            `small-offset-${this.props.offset}`
        ]);
        return (<div style={this.props.style} className={classes}>{ this.props.children }</div>);
    }
}

Column.defaultProps = {
    size: 12,
    offset: 0
};

Column.propTypes = {
    size: PropTypes.number,
    offset: PropTypes.number,
    style: PropTypes.object
};

export default Column;