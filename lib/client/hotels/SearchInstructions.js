import React from "react";

class SearchInstructions extends React.Component{

  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="hotel-grid-container">
        <div className="hotel-grid" >
          <h2>Use the filter buttons above to start searching for hotels</h2>
        </div>
      </div>
    )
  };
};

export default SearchInstructions;
