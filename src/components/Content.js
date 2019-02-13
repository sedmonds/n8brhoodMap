import React from "react";
import Map from "./Map";
import List from "./List";
import { getVenues } from "../api/Venues";

class Content extends React.Component {
  state = {
    venues: []
  };

  componentDidMount() {
    // getVenues().then(response =>
    //   this.setState({ venues: response })
    // );

    // this.setState()
    getVenues().then(res => console.log(res));
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