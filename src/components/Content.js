import React from "react";
import Map from "./Map";
import List from "./List";
import * as VenuesAPI from "../api/Venues";

class Content extends React.Component {
  state = {
    venues: []
  };

  componentDidMount() {
    VenuesAPI.getVenues().then(response =>
      this.setState({ venues: response })
    );
  }

  render() {
    return (
      <div className="content">
        <List venues={this.state.venues} />
        <Map />
      </div>
    );
  }
}

export default Content;