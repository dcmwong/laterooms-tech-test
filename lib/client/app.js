import React, { Component } from "react";
import Either from "data.either";

import { Empty, searchHotels } from "./hotels/model";
import Header from "./hotels/Header.js";
import MainContent from "./hotels/MainContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: Empty
    };
  }

  searchHotels(query) {
    searchHotels(query).fork((e) => this.showError(e), this.updateResults.bind(this));
  }

  showError(err) {
    console.error("Error occured", err);
  }

  updateResults(results) {
    this.setState({ results });
  }

  render() {
    return (
      <div>
        <Header onSearch={this.searchHotels.bind(this)} />
        <MainContent results={this.state.results} />
      </div>
    );
  }
}

export default App;

