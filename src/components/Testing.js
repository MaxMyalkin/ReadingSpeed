import React, { PropTypes } from 'react';
import BaseComponent from './common/Base';
import Text from './common/Text';
import Row from './common/Row';
import StopWatch from './common/StopWatch';

class Testing extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pulvinar ante et urna malesuada semper. Curabitur dolor est, dapibus eget consequat sed, condimentum at nisi. Praesent ut nisl magna. Aenean euismod pharetra erat vel vestibulum. Etiam tempor libero in velit vehicula, at elementum lacus venenatis. Aenean elit est, dictum id imperdiet non, consectetur at sapien. Donec dapibus fringilla odio, id euismod justo rutrum nec.
            Sed sit amet elementum nisi, dapibus rutrum diam. Fusce suscipit, massa et auctor pretium, erat eros porttitor purus, vel pellentesque dolor dui eget dui. Fusce eu leo sed dolor congue finibus at at sapien. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer nec orci massa. Donec sed scelerisque augue. Vestibulum sagittis, mi non vehicula pellentesque, leo felis lobortis nisi, id commodo nulla nisl ut lorem. Ut sed tempor eros, at feugiat libero.
            In sit amet nibh eros. Sed vel posuere sapien. In dignissim tristique ligula, nec tincidunt justo luctus eget. Ut at purus vel lorem interdum tincidunt eget sed risus. Sed vulputate auctor sem, vel tincidunt nisi eleifend nec. Quisque turpis nunc, sollicitudin at consectetur suscipit, venenatis a velit. Donec fringilla diam vitae augue condimentum sodales. Aenean fermentum.`
        };
        this.bind('onFinish');
    }

    onFinish(time) {
        this.props.onFinish(this.state.text.length, time, this.props.params);
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
