import React from 'react';
import {AHUCalc} from './AHUCalc';
import {DuctCalc} from './DuctCalc';
import {FormSelection} from '../presenters/FormSelection';

//App that uses imported components to gather inputs and displays UV dosage
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'selection': true,
      'AHUCalculator': false,
      'DuctCalculator': false
    };
    this.makeSelection = this.makeSelection.bind(this);
    this.resetSelection = this.resetSelection.bind(this);
  }
  
  makeSelection(element) {
    this.setState({
      'selection': false,
      [element]: true
    })
  }

  resetSelection() {
    this.setState({
      'selection': true,
      'AHUCalculator': false,
      'DuctCalculator': false
    })
  }

  render() {
    return(
      <div>
      {this.state.selection && <FormSelection makeSelection={this.makeSelection}/>}
      {this.state.AHUCalculator && <AHUCalc reset={this.resetSelection}/>}
      {this.state.DuctCalculator && <DuctCalc reset={this.resetSelection}/>}
      </div>
    )
  }
}

export default App;