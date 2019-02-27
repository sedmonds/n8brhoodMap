import React from "react";
import Map from "./Map";
import List from "./List";
// import { getVenues } from "../api/Venues";
import * as VenuesAPI from "../api/Venues";

class Content extends React.Component {
  // React handles state of data. Use JSON object
  state = {
    venues: []
  };

  componentDidMount() {
    VenuesAPI.getVenues().then(response => this.setState({ venues: response }));
  }
  render() {
    console.log(this.state.venues);
    return (
      <div className="content">
        <List venues={this.state.venues} />
        <Map venues={this.state.venues} />
      </div>
    );
  }
}

export default Content;