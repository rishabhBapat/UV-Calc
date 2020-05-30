import React from 'react';
import {centerDiv} from './DuctForm'

const resultStyle = {
  fontFamily: 'calibri',
  fontWeight: 'normal', 
  fontSize:   24,
  color:      '#e6e6e6'
}

export const DisplayResult = (props) => {
  if(isNaN(props.resultValue)) {
    return (
      <div style={centerDiv}>
      <span style={resultStyle}>Your {props.resultName} has not been calculated yet.</span>
      </div>
    )
  } else {
    return (
      <div style={centerDiv}>
      <span style={resultStyle}>Your {props.resultName} is <span style={{color: '#b3ffb3'}}>{props.resultValue}</span>.</span>
      </div>
    )
  }
};
