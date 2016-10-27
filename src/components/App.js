import React  from 'react';
import '../styles/foundation.css';
import Parameters from './Parameters';
import BaseComponent from './common/Base';
import TopBar from './common/TopBar';
import Title from './common/Title';
import {valueRange} from "../utils";
import Testing from './Testing';
import Results from './Results';

const STATES = {
    SELECTION: [1, "Настройка параметров текста"],
    TEST: [2, 'Проведение эксперимента'],
    RESULT: [3, 'Результаты']
};

class App extends BaseComponent {

  constructor(props) {
      super(props);
      this.state = {
          params: {
            columnWidth: 300,
            columnCount: 3,
            fontSize: 20,
            interline: 10,
            font: '',
          },
          state: STATES.SELECTION,
          results: []
      };
      this.bind('onChangeParameter', 'onStart', 'onFinish', 'onSelectParameters');
  }

  onChangeParameter(key, value) {
      const state = {};
      const validationInfo = {
          columnWidth: valueRange(10, 500, value),
          columnCount: valueRange(1, 6, value),
          fontSize: valueRange(1, 300, value),
          interline: valueRange(0, 100, value)
      };
      state[key] = validationInfo[key];
      this.setState({params: state});
  }

  onStart() {
      this.setState({
          state: STATES.TEST
      });
  }

  onSelectParameters() {
      this.setState({
          state: STATES.SELECTION
      });
  }

  onFinish(length, time, params) {
      const newState = {
        state: STATES.RESULT,
        results: this.state.results
      };
      params.length = length;
      params.time = time;
      newState.results.push(params);
      this.setState(newState);
  }

  render() {
    return (
        <div>
            <TopBar title="Оценка влияния характеристик текста на скорость чтения" />
            <Title>{ this.state.state[1] }</Title>
            { this.state.state === STATES.SELECTION
            && <Parameters params={this.state.params} onChange={ this.onChangeParameter } onStart={ this.onStart }/> }
            { this.state.state === STATES.TEST
            && <Testing params={this.state.params} onFinish={ this.onFinish }/> }
            { this.state.state === STATES.RESULT
            && <Results results={this.state.results} onSelectParameters={ this.onSelectParameters }/> }

        </div>
    );
  }
}

export default App;
