import React, { Component } from "react"

class Map extends Component {
  markers = [];
  addMarkers = venues => {
    if (window.google) {
      let infowindow = new window.google.maps.InfoWindow({});

      for (let i=0; i < venues.length; i++) {

        // https://developers.google.com/maps/documentation/javascript/markers
        let marker = new window.google.maps.Marker({
          position: {
            lat: venues[i].venue.location.lat,
            lng: venues[i].venue.location.lng
          },
          map: window.googleMapObject,
          title: venues[i].venue.id
        });
        marker.addListener('click', () => {
          let contentString = this.makeContent(venues[i]);
          infowindow.setContent(contentString);
          infowindow.open(window.googleMapObject, marker);
        });

        this.markers.push(marker);
      }
      window.infowindow = infowindow;
      window.markers = this.markers;
    }
  };


  render() {
    console.log(this.props.venues);
    this.addMarkers(this.props.venues);
    return <div id="map" />;
  }
}

export default Map