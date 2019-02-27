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
          map: window.googleMapObject,
          title: venues[i].venue.id
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
      window.markers = this.markers;
      window.infowindow = infowindow; // GO GLOBAL!!!
    }
  };

  filterMarkersOnMap = () => {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
  }

  constructInfo(venue) {
    // for future use instead of infowindow.setContent(), here or parent?
  }
  
  render() {
    {/*  clear and add markers */}
    this.filterMarkersOnMap();
    this.addMarkers(this.props.venues);
    return <div id="map" />;
  }
}
export default Map;