import React, { Component } from "react"

class Map extends Component {
  markers = [];
  addMarkers = venues => {
    if (window.google) {
      for (let i=0; i < venues.length; i++) {
        let marker = new window.google.maps.Marker({
          position: {
            lat: venues[i].venue.location.lat,
            lng: venues[i].venue.location.lng
          },
          map: window.mapObject
        });
        this.markers.push(marker);
      }
    }
  };

  render() {
    console.log(this.props.venues);
    this.addMarkers(this.props.venues);
    return <div id="map" />;
  }
}

export default Map