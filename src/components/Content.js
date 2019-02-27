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

  clickMarker(venueID) {
    for (let i = 0; i < window.markers.length; i++) {
      
      if (venueID.venue.id === window.markers[i].title) {
        // window.infowindow.open(window.googleMapObject, window.markers[i]);
        console.log('id/title', window.markers[i].title, venueID.venue.id);
        console.log(window.googleMapObject.mapDataProviders);
      }

    }
  }

  render() {
    console.log(this.state.venues);
    return (
      <div className="content">
        <List venues={this.state.venues} showInfo={this.clickMarker} />
        <Map venues={this.state.venues} />
      </div>
    );
  }
}

export default Content;