import React, { Component } from "react";

class Map extends React.Component {
  markers = [];
  addMarkers = venues => {
    if (window.google) {

      // https://developers.google.com/maps/documentation/javascript/infowindows
      let infowindow = new window.google.maps.InfoWindow();

      for (let i = 0; i <  venues.length; i++) {
        let marker = new window.google.maps.Marker({
          position:{
          lat: venues[i].venue.location.lat,
          lng: venues[i].venue.location.lng 
          },
          map: window.googleMapObject
        });

        // infowindow opens on map object and add marker
        marker.addListener('click', function() {
          infowindow.setContent(`<div>
          <p>Name: <a href="#">${venues[i].venue.name}</a></p>
          <p>Address: ${venues[i].venue.location.address}</p>
        </div>`);

          infowindow.open(window.googleMapObject, marker);
        });
    
        this.markers.push(marker);
      }
    }
  };

  constructInfo(venue) {
     
    // for future use instead of infowindow.setContent()
  
  }
  
  render() {
    this.addMarkers(this.props.venues);
    return <div id="map" />;
  }
}
export default Map;