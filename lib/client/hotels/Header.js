import R from "ramda";
import React from "react";
import PoolButton from "./buttons/Pool.js";
import CarParkButton from "./buttons/CarPark.js";
import GymButton from "./buttons/Gym.js";
import SortButton from "./buttons/Sort.js";

import { makeQuery } from "./model.js";

const buttonSize = 48;

class Header extends React.Component {
  setInitialState() {
    this.state = {facilities : [], sort: 1}
  }
  constructor(props) {
    super(props);
    this.state = {facilities : [], sort: 1}
  }

  negateAndSubmit(val) {
    const chosenFilter = R.reject(R.equals(val), this.state.facilities);
    this.setState({facilities: chosenFilter});
    this.props.onSearch(makeQuery(chosenFilter, this.state.sort));
  }

  addAndSubmit(val) {
    const chosenFilter = R.concat(R.of(val), this.state.facilities);
    this.setState({facilities: chosenFilter});
    this.props.onSearch(makeQuery(chosenFilter, this.state.sort));
  }

  setSortAndSubmit(val) {
    const ascendDescend = val ? 2:1;
    this.setState({sort: ascendDescend});
    this.props.onSearch(makeQuery(this.state.facilities, ascendDescend));
  }

  render () {
    return( 
      <div className="header">
        <div className="menu">
          <h1>Badger hotels</h1>
           <div className="links">
             <div className="facilities">
               <PoolButton 
                 addAndSubmit={this.addAndSubmit.bind(this)} 
                 negateAndSubmit={this.negateAndSubmit.bind(this)} 
                 value="pool" 
                 />
               <CarParkButton 
                 addAndSubmit={this.addAndSubmit.bind(this)} 
                 negateAndSubmit={this.negateAndSubmit.bind(this)} 
                 value="car+park"
               />
               <GymButton 
                 addAndSubmit={this.addAndSubmit.bind(this)} 
                 negateAndSubmit={this.negateAndSubmit.bind(this)} 
                 value="gym"
               />
             </div>
             <div className="sort">
               <SortButton 
                 setSortAndSubmit={this.setSortAndSubmit.bind(this)}
               />
             </div> 
          </div>
        </div>
      </div>
     )
  }
};

export default Header;
