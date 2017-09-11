import React from "react";
import {buttonSize, buttonColorOn, buttonColorOff} from "./config.js";
import CarPark from "react-icons/lib/md/directions-car";

export default class CarParkButton extends React.Component {
  setInitialState() {
    this.state = {toggle:true}
  }
  constructor(props) {
    super(props);
    this.state = {toggle : true }
  }
  handleClick(e) {
    this.state.toggle ? this.props.addAndSubmit(e) : this.props.negateAndSubmit(e);
    this.state.toggle ? this.state.color = buttonColorOn: this.state.color = buttonColorOff;
    this.setState({toggle :!this.state.toggle});
  }
  render () {
    return(<a onClick={()=> this.handleClick(this.props.value)}><CarPark size={buttonSize} color={this.state.color}/></a>)
  }
}

