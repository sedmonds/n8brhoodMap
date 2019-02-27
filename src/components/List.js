import React from "react";
import Map from "./Map"; 

// class List extends React.Component {
//   render() {
//     const venues = this.props.venues;
//     return (
//       <div id="list">
//         <h2>Venues</h2>
//         <input type="text" />
//         <ol>
//           {venues.map(ven => (
//             <li key={ven.venue.id}>
//               <div>
//                 <h2 className="title">
//                   Name:
//                   <a href="#" onClick={() => this.props.showContent(ven)}>
//                     {ven.venue.name}
//                   </a>
//                 </h2>

//               </div>
//             </li>
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }

class List extends React.Component {
  render() {
    return (
      <div id="list">
        <h2>Venues</h2>
      </div>
    );
  }
}


export default List;