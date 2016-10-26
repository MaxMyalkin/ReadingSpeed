import React, { PropTypes } from 'react';
import BaseComponent from './Base';

class Input extends BaseComponent {

    constructor(props) {
        super(props);
        this.bind('onChange');
    }

    onChange() {
        this.props.onChange(this.refs.input.value);
    }

    render() {
        return (
        <label>{this.props.title}
            <input ref="input" value={ this.props.value } type={ this.props.type }
                   placeholder={ this.props.placeholder } onChange={ this.onChange } />
        </label>
        );
    }
}

Input.defaultProps = {
    type: 'text',
    placeholder: ''
};

Input.propTypes = {
    title: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any
};

export default Input;