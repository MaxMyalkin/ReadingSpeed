import React, { PropTypes } from 'react';
import Row from './common/Row';
import Input from './common/Input';
import BaseComponent from './common/Base';
import Column from './common/Column';
import Text from './common/Text';
import Button from './common/Button';
import Title from './common/Title';

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
                    <Input title="Шрифт" placeholder="Название" type="text"
                           onChange={ (value) => { this.props.onChange('font', value) }} value={ this.props.params.font }/>
                </Column>
                <Column size={3} offset={1} >
                    <Button classes="align-self-stretch" size="medium" expanded={true} hollow={true} onClick={ this.props.onStart }>Начать тест</Button>
                </Column>
            </Row>
            <Title>Пример текста</Title>
            <Text {...this.props.params}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ante et urna malesuada semper. Curabitur dolor est, dapibus eget consequat sed, condimentum at nisi. Praesent ut nisl magna. Aenean euismod pharetra erat vel vestibulum. Etiam tempor libero in velit vehicula, at elementum lacus venenatis. Aenean elit est, dictum id imperdiet non, consectetur at sapien. Donec dapibus fringilla odio, id euismod justo rutrum nec.

                Sed sit amet elementum nisi, dapibus rutrum diam. Fusce suscipit, massa et auctor pretium, erat eros porttitor purus, vel pellentesque dolor dui eget dui. Fusce eu leo sed dolor congue finibus at at sapien. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer nec orci massa. Donec sed scelerisque augue. Vestibulum sagittis, mi non vehicula pellentesque, leo felis lobortis nisi, id commodo nulla nisl ut lorem. Ut sed tempor eros, at feugiat libero.

                In sit amet nibh eros. Sed vel posuere sapien. In dignissim tristique ligula, nec tincidunt justo luctus eget. Ut at purus vel lorem interdum tincidunt eget sed risus. Sed vulputate auctor sem, vel tincidunt nisi eleifend nec. Quisque turpis nunc, sollicitudin at consectetur suscipit, venenatis a velit. Donec fringilla diam vitae augue condimentum sodales. Aenean fermentum.</Text>
        </div>);
    }
}

Parameters.propsType = {
    onChange: PropTypes.func,
    params: PropTypes.object,
    onStart: PropTypes.func
};

export default Parameters;