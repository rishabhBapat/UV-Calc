import React from 'react';
import {AHUForm} from '../presenters/AHUForm';
import {DisplayResult} from '../presenters/DisplayResult';

export class AHUCalc extends React.Component {
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
    const totalAverageIntensity = ((this.state.totalWattage * 0.3) * (Math.log(this.state.distance / 2) + 0.577) * (10 ** 6)) / (2 * Math.PI * this.state.coilLength * (this.state.distance / 2));
    const contactTime = (((this.state.distance / 30.48) * 1.5 * (this.state.coilHeight / 30.48) * (this.state.coilLength / 30.48)) / (this.state.flowRate)) * 60;
    const correctedDosage = totalAverageIntensity * contactTime * 0.7;
    this.setState({correctedDosage});
  }

  calculateIntensity() {
    const diagonalDistance = Math.sqrt((this.state.coilHeight / (this.state.numRows * 2)) ** 2 + this.state.distance ** 2);
    const minIntensity = ((this.state.rowWattage * 0.3 * 10 ** 6) / (2 * Math.PI * this.state.lampLength * diagonalDistance));
    let maxIntensity = ((this.state.rowWattage * 0.3 * 10 ** 6) / (2 * Math.PI * this.state.lampLength * this.state.distance));
    if (this.state.numRows >= 3) {
      maxIntensity += minIntensity * 2;
    } else if (this.state.numRows == 2) {
      maxIntensity += minIntensity;
    } 
    const avgIntensity = ((minIntensity * 2) + (this.state.numRows * maxIntensity) + (this.state.numRows - 1) * (minIntensity * 2)) / (this.state.numRows * 2 + 1);
  
    this.setState({
      minIntensity,
      maxIntensity,
      avgIntensity
    })
  }

  handleClick() {
    this.calculateDosage();
    this.calculateIntensity();
  }

  render() {
    return (
      <div>
      <AHUForm onChange={this.assignVariable} onClick={this.handleClick} reset={this.props.reset}/>
      <DisplayResult resultName={'Corrected UV Dosage'} resultValue={this.state.correctedDosage} />
      <DisplayResult resultName={'Minimum Intensity'} resultValue={this.state.minIntensity} />
      <DisplayResult resultName={'Maximum Intensity'} resultValue={this.state.maxIntensity} />
      <DisplayResult resultName={'Average Intensity'} resultValue={this.state.avgIntensity} />
      </div>
    )
  }
};  