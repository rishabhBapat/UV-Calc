import React from 'react';
import '../style/Form.css'

export const formStyle = {
  fontFamily: 'calibri',
  fontSize: 24,
  color: '#e6e6e6', 
};

export const centerDiv = {
  width: '40%',
  margin: '50px auto',
  textAlign: 'center'
};

//renders a form to collect variables and trigger the calculation, requires props for both.
export class DuctForm extends React.Component {
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
          <label htmlFor='ductWidth'>
          Duct Width 
          <input type='number' id='ductWidth' placeholder='in cm'/>
          </label>
    
          <label htmlFor='ductHeight'>
          Duct Height
          <input type='number' id='ductHeight' placeholder='in cm'/>
          </label>
    
          <label htmlFor='lampLength'>
          Lamp Length
          <input type='number' id='lampLength' placeholder='in cm'/>
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
    
          <label htmlFor='totalWattage'>
          Total Lamp Wattage
          <input type='number' id='totalWattage' placeholder='in W'/>
          </label>
        </form>
        <button onClick={this.props.onClick}>Calculate</button>
        <button onClick={this.props.reset}>Return to Selection</button>
      </div>
    )
  }
};

