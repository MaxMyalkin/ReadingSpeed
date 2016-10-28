import React, { PropTypes } from 'react';
import Row from './common/Row';
import Input from './common/Input';
import BaseComponent from './common/Base';
import Column from './common/Column';
import Text from './common/Text';
import Button from './common/Button';
import Title from './common/Title';
import Select from './common/Select';
import {example} from '../texts';

class Parameters extends BaseComponent {

    render() {
        return (<div>
            <Row>
                <Column size={3} >
                    <Input title="Ширина строки" placeholder="мм" type="number"
                           onChange={ (value) => { this.props.onChange('columnWidth', value) }} value={ this.props.params.columnWidth }/>
                </Column>
                <Column size={4} offset={1} >
                    <Input title="Количество столбцов" type="number"
                           onChange={ (value) => { this.props.onChange('columnCount', value) }} value={ this.props.params.columnCount }/>
                </Column>
                <Column size={3} offset={1} >
                    <Input title="Размер шрифта" placeholder="пт" type="number"
                           onChange={ (value) => { this.props.onChange('fontSize', value) }} value={ this.props.params.fontSize }/>
                </Column>
            </Row>
            <Row>
                <Column size={3} >
                    <Input title="Расстояние между строк" placeholder="мм" type="number"
                           onChange={ (value) => { this.props.onChange('interline', value) }} value={ this.props.params.interline }/>
                </Column>
                <Column size={4} offset={1} >
                    <Select title="Шрифт" onChange={ (value) => { this.props.onChange('font', value) } }>
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georgia</option>
                    </Select>
                </Column>
                <Column size={3} offset={1} >
                    <Button classes="align-self-stretch" size="medium" expanded={true} hollow={true} onClick={ this.props.onStart }>Начать тест</Button>
                </Column>
            </Row>
            <Title>Пример текста</Title>
            <Text {...this.props.params}>{ example }</Text>
        </div>);
    }
}

Parameters.propsType = {
    onChange: PropTypes.func,
    params: PropTypes.object,
    onStart: PropTypes.func
};

export default Parameters;