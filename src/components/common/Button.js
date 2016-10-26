import React, { PropTypes } from 'react';
import BaseComponent from './Base';
import classnames from 'classnames';

class Button extends BaseComponent {

    render() {
        const classes = classnames('button', this.props.type, this.props.size, this.props.classes,
            { 'hollow': this.props.hollow, 'expanded': this.props.expanded });
        return <button className={ classes } onClick={ this.props.onClick }>{ this.props.children }</button>;
    }
}

Button.propTypes = {
  hollow: PropTypes.bool,
  type: PropTypes.oneOf(['secondary', 'success', 'alert', 'warning', 'disabled']),
  onClick: PropTypes.func,
  expanded: PropTypes.bool,
  size: PropTypes.oneOf(['large', 'small', 'tiny', 'medium']),
  classes: PropTypes.string
};

export default Button;