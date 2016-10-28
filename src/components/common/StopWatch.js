import React, { PropTypes } from 'react';
import BaseComponent from './Base';
import Button from './Button';

class StopWatch extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = {
          start: new Date(),
          currentTime: 0
        };
        this.intervalId = null;
        this.bind('onStopTimer', 'makeTick');
    }

    componentDidMount() {
        this.intervalId = setInterval(this.makeTick, 100);
    }

    onStopTimer() {
        this.props.onStop(this.state.currentTime);
    }

    makeTick() {
        this.setState({
            currentTime: new Date() - this.state.start
        });
    }

    componentWillUnmount() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    render() {
        return (
            <div>
                <Button hollow={true} size="large" expanded={true} onClick={ this.onStopTimer }>{ this.props.stopTitle } ( { Math.floor(this.state.currentTime / 1000)} )</Button>
            </div>
        );
    }
}

StopWatch.propTypes = {
  onStop: PropTypes.func.isRequired,
  stopTitle: PropTypes.string
};

export default StopWatch;