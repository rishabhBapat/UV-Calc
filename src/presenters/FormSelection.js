import React from 'react';
import '../style/Form.css';
import {formStyle, centerDiv} from './DuctForm';

export class FormSelection extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);  
  }

  handleClick(event){
    const element = event.target.id;
    this.props.makeSelection(element);
  }

  render() {
      return(
        <div style={centerDiv}>
        <span style={formStyle}>Select Calculator Type</span>
        <form>
          <button id='AHUCalculator' onClick={this.handleClick}>AHU Calculator</button>
          <button id='DuctCalculator' onClick={this.handleClick}>Duct Calculator</button>
        </form>
        </div>
      )
  }
};
