import React from "react";
import Map from "./Map"; 

class List extends React.Component {
  render() {
    // list of venues
    const venues = this.props.venues;

    return (
      <div id="list">
        <h2>Local Grocers</h2>
        <p>{this.props.textString}</p>
        <label htmlFor="namedInput">Filter By Name:</label>
        <input id="namedInput" type="text" name="name" value={this.props.textString} onChange={e => this.props.changeMarker(e.target.value)} />
        <ol>
          {venues.map(ven => (       
            <li key={ven.venue.id}>
              <div>
      
                <p>Name: 
                  <a 
                    href="#" 
                    type="text"
                    aria-label={ven.venue.name}
                    aria-required="true" 
                    onClick={() => this.props.showInfo(ven)}>
                      {ven.venue.name}
                  </a>
                </p>
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