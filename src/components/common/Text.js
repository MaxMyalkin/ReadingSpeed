import React, { PropTypes } from 'react';
import BaseComponent from './Base';
import {chunkString} from "../../utils";
import {splitString} from "../../utils";
import Column from './Column';
import Row from './Row';

class Text extends BaseComponent {

    getColumns() {
        const style = {
            width: `${this.props.columnWidth}px`,
            float: 'left',
            fontSize: `${this.props.fontSize}px`,
            lineHeight: `${this.props.fontSize + this.props.interline}px`,
            fontFamily: this.props.font
        };
        const columnCount = this.props.columnCount;
        const textChunks = splitString(this.props.children, columnCount);
        const columns = [];
        for(let i = 0; i < columnCount; i++) {
            columns.push(<Column key={`column-${i}`} style={style}>{ textChunks[i] }</Column>)
        }
        return columns;
    }

    render() {
        return <Row>{ this.getColumns() }</Row>;
    }
}

Text.defaultProps = {
  columnCount: 1
};

Text.propTypes = {
    columnCount: PropTypes.number,
    columnWidth: PropTypes.number,
    fontSize: PropTypes.number,
    interline: PropTypes.number,
    font: PropTypes.string
};

export default Text;