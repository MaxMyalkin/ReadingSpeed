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
            <td>{ item.time }</td>
        </tr>));
        return (<table>
            <thead>
                <tr>
                    <td>Длина текста</td>
                    <td>Ширина столбца</td>
                    <td>Размер шрифта</td>
                    <td>Шрифт</td>
                    <td>Расстояние между строками</td>
                    <td>Количество столбцов</td>
                    <td>Время чтения</td></tr>
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