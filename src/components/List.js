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
            <li>
              <div>
                <h2>{ven.venue.name}</h2>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List;