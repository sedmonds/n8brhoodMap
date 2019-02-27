import React, { Component } from "react";

// class Map extends Component {
//   markers = [];
//   addMarkers = venues => {
//     let infowindow = new window.google.maps.InfoWindow({});
//     if (window.google) {
      

//       for (let i=0; i < venues.length; i++) {

//         // https://developers.google.com/maps/documentation/javascript/markers
//         let marker = new window.google.maps.Marker({
//           position: {
//             lat: venues[i].venue.location.lat,
//             lng: venues[i].venue.location.lng
//           },
//           map: window.googleMapObject,
//           title: venues[i].venue.id
//         });
//         marker.addListener('click', () => {
//           let contentString = this.makeContent(venues[i]);
//           infowindow.setContent(contentString);
//           infowindow.open(window.googleMapObject, marker);
//         });

//         this.markers.push(marker);
//       }
//       window.infowindow = infowindow;
//       window.markers = this.markers;
//     }
//   };
//   render() {
//     console.log('loc', this.props.locations)
//     this.addMarkers(this.props.locations);
//     return <div id="map" />;
//   }
// }


class Map extends React.Component {
  // markers = [];
  // addMarkers = venues => {
  //   console.log(window.google);

  //   if (window.google) {
  //     for (let i = 0; i < venues.length; i++) {
  //       let marker = new window.google.maps.Marker({ position: { lat: venues[i].venue.location.lat, lng: venues[i].venue.location.lng
  //         },
  //         map: window.googleMapObject
  //       });
  //       this.markers.push(marker);
  //     }
  //   }
  // };
  render() {
    // this.addMarkers(this.props.locations);
    return <div id="map" />;
  }
}
export default Map;