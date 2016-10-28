import React, { PropTypes } from 'react';
import BaseComponent from './common/Base';
import Row from './common/Row';
import Button from './common/Button';

class Results extends BaseComponent {

    getResultsTable() {
        const rows = this.props.results.map((item, idx) => (<tr key={ idx }>
            <td>{ item.length }</td>
            <td>{ item.columnWidth }</td>
            <td>{ item.fontSize }</td>
            <td>{ item.font }</td>
            <td>{ item.interline }</td>
            <td>{ item.columnCount }</td>
            <td>{ (item.time/1000).toPrecision(3) }</td>
            <td>{ (item.length/ (item.time/1000)).toPrecision(3) }</td>
        </tr>));
        return (<table>
            <thead>
                <tr>
                    <td>Длина текста, символов</td>
                    <td>Ширина столбца, px</td>
                    <td>Размер шрифта, px</td>
                    <td>Шрифт</td>
                    <td>Расстояние между строками, px</td>
                    <td>Количество столбцов</td>
                    <td>Время чтения, с</td>
                    <td>Скорость чтения, символов/с</td></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>);
    }

    render() {
        return (<div>
            <Row>
                { this.getResultsTable() }
            </Row>
            <Row><Button onClick={ this.props.onSelectParameters } hollow={true} expanded={true}>Выбрать другие параметры</Button></Row>
        </div>);
    }
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.object),
  onSelectParameters: PropTypes.func
};

export default Results;