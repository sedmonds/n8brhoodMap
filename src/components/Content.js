import React from "react";
import Map from "./Map";
import List from "./List";
// import { getVenues } from "../api/Venues";
import * as VenuesAPI from "../api/Venues";

class Content extends React.Component {
  // React handles state of data. Use JSON object
  state = {
    venues: [],
    allVenues: [],
    text: ""
  };

  componentDidMount() {
    VenuesAPI.getVenues().then(response => this.setState({ venues: response, allVenues: response }));
  }


  clickMarker = venueID => {
    for (let i = 0; i < window.markers.length; i++) {
      
      if (venueID.venue.id === window.markers[i].title) {
        let content = this.constructInfo(venueID);

        console.log('id/title', window.markers[i].title, venueID.venue.id);
        console.log(window.googleMapObject.mapDataProviders); 
        window.infowindow.setContent(content);
        window.infowindow.open(window.googleMapObject, window.markers[i]);
      }

    }
  };
  
  updateContent = (text) => {
    this.setState({ text });
    if (text) {
      this.setState({venues: this.filterItems(text, this.state.venues)});
    } else {
      this.setState({venues: this.state.allVenues});
    }
  }

  filterItems = (text, venues) => {
    return venues.filter(venueID => venueID.venue.name.toLowerCase().includes(text.toLowerCase()));
  }

  constructInfo = item => {
    return `<div>
      <p>Name: <a href="#">${item.venue.name}</a></p>
      <p>Address: ${item.venue.location.address}</p>
    </div>`;
  };

  render() {
    console.log(this.state.venues);
    return (
      <div className="content">
        <List 
          venues={this.state.venues} 
          showInfo={this.clickMarker} 
          textString={this.state.text} 
          changeMarker={this.updateContent}/>
        <Map venues={this.state.venues} />
      </div>
    );
  }
}

export default Content;