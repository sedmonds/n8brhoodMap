import React from "react";
import Map from "./Map"; 

class List extends React.Component {
  render() {
    // list of venues
    let venues = this.props.venues;

    return (
      <div id="list">
        <h2>Venues</h2>
        <input type="text" />
        <ol>
          {venues.map(ven => (       
            <li key={ven.venue.id}>
              <div>

                <p>Name: <a href="#">{ven.venue.name}</a></p>
                <p>Address: {ven.venue.location.address}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;