import React from "react";
import {buttonSize, buttonColorOn, buttonColorOff} from "./config.js";
import Sort from "react-icons/lib/md/sort";

export default class SortButton extends React.Component {
  setInitialState() {
    this.state = {toggle:true}
  }
  constructor(props) {
    super(props);
    this.state = {toggle : true }
  }
  handleClick(e) {
    this.props.setSortAndSubmit(this.state.toggle);
    this.setState({toggle :!this.state.toggle});
    this.state.toggle ? this.state.color = buttonColorOn: this.state.color =buttonColorOff;
  }
  render () {
    return(<a onClick={()=> this.handleClick(this.props.value)}><Sort size={buttonSize} color={this.state.color}/></a>)
  }
}

