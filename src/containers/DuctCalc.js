import React from 'react';
import {DuctForm} from '../presenters/DuctForm';
import {DisplayResult} from '../presenters/DisplayResult';

export class DuctCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.assignVariable = this.assignVariable.bind(this);
    this.calculateDosage = this.calculateDosage.bind(this);
    this.calculateIntensity = this.calculateIntensity.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  assignVariable(name, value) {
    this.setState({[name]: value});
  }

  calculateDosage() {
    const ductWidthAlt = this.state.ductWidth / (this.state.numCols * 2);
    const ductHeightAlt = this.state.ductHeight / (this.state.numRows * 2);
    const avgIntensityDistance = Math.max(ductHeightAlt, ductWidthAlt) / 1.5; 
    const totalAverageIntensity = ((this.state.totalWattage * 0.3) * (Math.log(avgIntensityDistance) + 0.577) * (10 ** 6)) / (2 * Math.PI * this.state.lampLength * (avgIntensityDistance));
    const contactTime = ((((this.state.lampLength / 30.48) + 1) * (this.state.ductHeight / 30.48) * (this.state.ductWidth / 30.48)) / (this.state.flowRate)) * 60;
    const correctedDosage = totalAverageIntensity * contactTime * 0.7;
    this.setState({correctedDosage});
  }

  calculateIntensity() {
    const ductWidthAlt = this.state.ductWidth / (this.state.numCols * 2);
    const ductHeightAlt = this.state.ductHeight / (this.state.numRows * 2);
    const diagonalDistance = Math.sqrt(ductHeightAlt ** 2 + ductWidthAlt ** 2);
    const minIntensity = (((this.state.totalWattage / (this.state.numCols * this.state.numRows)) * 0.3 * 10 ** 6) / (2 * Math.PI * this.state.lampLength * diagonalDistance)) * 0.63; 
    const aIntensity = (((this.state.totalWattage / (this.state.numCols * this.state.numRows)) * 0.3 * 10 ** 6) / (2 * Math.PI * this.state.lampLength * ductWidthAlt)) * 0.63;
    const bIntensity = (((this.state.totalWattage / (this.state.numCols * this.state.numRows)) * 0.3 * 10 ** 6) / (2 * Math.PI * this.state.lampLength * ductHeightAlt)) * 0.63;
    this.setState({minIntensity});
    this.setState({aIntensity});
    this.setState({bIntensity});
  }

  handleClick() {
    this.calculateDosage();
    this.calculateIntensity();
  }

  render() {
    return (
      <div>
      <DuctForm onChange={this.assignVariable} onClick={this.handleClick} reset={this.props.reset}/>
      <DisplayResult resultName={'Corrected UV Dosage'} resultValue={this.state.correctedDosage} />
      <DisplayResult resultName={'Minimum Intensity at \'d\''} resultValue={this.state.minIntensity} />
      <DisplayResult resultName={'Intensity at \'a\''} resultValue={this.state.aIntensity} />
      <DisplayResult resultName={'Intensity at \'b\''} resultValue={this.state.bIntensity} />
      </div>
    )
  }
};  