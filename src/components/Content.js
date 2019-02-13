import React from "react";
import Map from "./Map";
import List from "./List";
import * as VenuesAPI from "../api/Venues";

class Content extends React.Component {
  componentDidMount() {
    // VenuesAPI.getVenues().then(res => console.log(res));
  }

  render() {
    console.log("RESPONSE");
    return (
      <div className="content">
        <List />
        <Map />
      </div>
    );
  }
}

export default Content;