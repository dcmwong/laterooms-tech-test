import React from "react";
import {buttonSize, buttonColorOn, buttonColorOff} from "./config.js";
import Gym from "react-icons/lib/md/directions-run";

export default class GymButton extends React.Component {
  setInitialState() {
    this.state = {toggle:true}
  }
  constructor(props) {
    super(props);
    this.state = {toggle : true }
  }
  handleClick(e) {
    this.state.toggle ? this.props.addAndSubmit(e) : this.props.negateAndSubmit(e);
    this.setState({toggle :!this.state.toggle});
    this.state.toggle ? this.state.color = buttonColorOn: this.state.color =buttonColorOff;
  }
  render () {
    return(<a onClick={()=> this.handleClick(this.props.value)}><Gym size={buttonSize} color={this.state.color}/></a>)
  }
}

