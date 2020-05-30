import React from 'react';
import '../style/Form.css';
import {formStyle, centerDiv} from './DuctForm';

//renders a form to collect variables and trigger the calculation, requires props for both.
export class AHUForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const name = event.target.id;
    const value = event.target.value;
    this.props.onChange(name, value);
  }
  
  render() {
    return(
      <div style={centerDiv}>
        <form style={formStyle} onChange={this.handleChange}>
          <label htmlFor='coilLength'>
          Coil Length 
          <input type='number' id='coilLength' placeholder='in cm'/>
          </label>
    
          <label htmlFor='coilHeight'>
          Coil Height
          <input type='number' id='coilHeight' placeholder='in cm'/>
          </label>
    
          <label htmlFor='lampLength'>
          Lamp Length
          <input type='number' id='lampLength' placeholder='in cm'/>
          </label>
    
          <label htmlFor='distance'>
          Distance
          <input type='number' id='distance' placeholder='in cm'/>
          </label>
    
          <label htmlFor='flowRate'>
          Flow Rate
          <input type='number' id='flowRate' placeholder='in CFM'/>
          </label>
    
          <label htmlFor='numRows'>
          Number of Rows
          <input type='number' id='numRows' placeholder='of lamps'/>
          </label>
    
          <label htmlFor='numCols'>
          Number of Columns
          <input type='number' id='numCols' placeholder='of lamps'/>
          </label>
    
          <label htmlFor='lampCount'>
          Total Count
          <input type='number' id='lampCount' placeholder='of lamps'/>
          </label>
    
          <label htmlFor='totalWattage'>
          Total Lamp Wattage
          <input type='number' id='totalWattage' placeholder='in W'/>
          </label>
    
          <label htmlFor='rowWattage'>
          Row Lamp Wattage
          <input type='number' id='rowWattage' placeholder='in W'/>
          </label>
        </form>
        <button onClick={this.props.onClick}>Calculate</button>
        <button onClick={this.props.reset}>Return to Selection</button>
      </div>
    )
  }
};

