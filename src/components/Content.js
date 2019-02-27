import React from "react";
import Map from "./Map";
import List from "./List";
// import { getVenues } from "../api/Venues";
import * as VenuesAPI from "../api/Venues";

class Content extends React.Component {
  state = {
    locations: []
  };

  componentDidMount() {
    VenuesAPI.getVenues().then(response => console.log(response));
  }
  render() {
    return (
      <div className="content">
        <List />
        <Map />
      </div>
    );
  }
}

export default Content;