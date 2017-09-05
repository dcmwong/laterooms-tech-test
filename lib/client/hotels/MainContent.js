import React from "react";
import Hotel from "./Hotel.js";

class MainContent extends React.Component{

  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="hotel-grid-container">
        {
          this.props.results.cata({
            Right: (hotels) => {
              if (hotels.length === 0) {
                return (<div className="hotel-grid">
                        <div key={1} className="hotel-grid-item">
                           <h2>No hotels found</h2>
                        </div>
                      </div>);
              } else {
                return (
                  <div className="hotel-grid" >
                    {
                      hotels.map(h => (
                          <Hotel hotel={h}/>
                      ))
                    }
                  </div>
                );
              }
            },
            Left: (msg) => <div>{msg}</div>
          })
        }
      </div>
    )
  };
};

export default MainContent;
