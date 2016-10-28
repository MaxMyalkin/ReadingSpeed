import React, { PropTypes } from 'react';
import BaseComponent from './Base';

class Select extends BaseComponent {

    constructor(props) {
        super(props);
        this.bind('onChange');
    }

    onChange() {
        const select = this.refs.select;
        const value = select.options[select.selectedIndex].value;
        console.log(value);
        this.props.onChange(value);
    }

    render() {
        return (<label>{ this.props.title }
            <select ref="select" onChange={ this.onChange }>
                { this.props.children }
            </select>
        </label>);
    }
}

Select.defaultProps = {
  title: ''
};

Select.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func
};

export default Select;
