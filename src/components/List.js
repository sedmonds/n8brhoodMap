import React from "react";

class List extends React.Component {

  // loops through venue data

  render() {
    // locations go here
    const venues = this.props.venues;
    return (
      <div id="list">
        <h2>Venues</h2>
        <input type="text" />
        <ol>
          { venues.map(ven => (
            <li key={ven.venue.id}>
              <div>
                <h2 className="venue-name"><a href="#">{ven.venue.name}</a></h2>
                <p>Address: { ven.venue.location.address }</p>
                <p>Cross Street: { ven.venue.location.crossStreet }</p>
                <p>City: { ven.venue.location.city }</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default List