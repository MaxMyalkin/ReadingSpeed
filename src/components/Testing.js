import React, { PropTypes } from 'react';
import BaseComponent from './common/Base';
import Text from './common/Text';
import Row from './common/Row';
import StopWatch from './common/StopWatch';
import { tests } from '../texts';

class Testing extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
          text: tests[Math.floor(Math.random() * tests.length)]
        };
        this.bind('onFinish');
    }

    onFinish(time) {
        const params = Object.assign({}, this.props.params);
        params.length = this.state.text.length;
        params.time = time;
        this.props.onFinish(params);
    }

    render() {
        return <div>
            <Text {...this.props.params}>
                { this.state.text }
            </Text>
            <Row>
                <StopWatch onStop={ this.onFinish } stopTitle="Закончить чтение"/>
            </Row>
        </div>
    }
}

Testing.propTypes = {
    params: PropTypes.object,
    onFinish: PropTypes.func
};

export default Testing;
