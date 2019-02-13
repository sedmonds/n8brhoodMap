import React from "react";
import Map from "./Map";
import List from "./List";
import { getVenues } from "../api/Venues";

class Content extends React.Component {
  state = {
    venues: []
  };

  componentDidMount() {
    getVenues().then(res => this.setState({ venues: res }));
  }

  render() {
    return (
      <div className="content">
        <List venues={this.state.venues} />
        <Map venues={this.state.venues}/>
      </div>
    );
  }
}

export default Content;