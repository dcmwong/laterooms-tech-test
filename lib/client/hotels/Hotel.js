import React from "react";

export default class Hotel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div key={this.props.hotel.id} className="hotel-grid-item">
        <h2>{this.props.hotel.Name} </h2>
        <h3>Rating: {this.props.hotel.StarRating}</h3>
        <h3>{
          this.props.hotel.Facilities.join(", ")
        }
        </h3>
      </div>
    )}
}
