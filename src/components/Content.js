import React from "react";
import Map from "./Map";
import List from "./List";
// import { getVenues } from "../api/Venues";
import * as VenuesAPI from "../api/Venues";

// class Content extends React.Component {
//   state = {
//     venues: []
//   };

//   componentDidMount() {
//     getVenues().then(res => this.setState({ venues: res }));
//   }

//   handleClick = (ven) => {
//     for (let i=0; i < window.markers.length; i++) {
//       if (ven.venue.id === window.markers[i].title) {
//         // console.log(ven.venue.id, window.markers[i].title, window.markers[i],window.mapObject);
//         //let content = this.makeContent(ven);

//         window.infowindow.open(window.googleMapObject, window.markers[i]);


//       }
//     }
//   }

//   makeContent = (venue) => {
//     return `<div>
//       <p className="title"><a href="#">Name: ${venue.venue.name}</a></p>
//       <p>Address: ${venue.venue.location.address}</p>
//     </div>`;
//   };
//   render() {
//     return (
//       <div className="content">
//         <List
//           venues={this.state.venues}
//           showContent={this.handleClick}
//         />
//         <Map venues={this.state.venues} makeContent={this.makeContent}/>
//       </div>
//     );
//   }
// }

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