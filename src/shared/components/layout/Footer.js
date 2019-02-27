import React from "react";

const Footer = () => (
  <div id="footer">
    <p>&copy; Neighborhood Maps {(new Date()).getFullYear()}&nbsp;-&nbsp;<a href="https://developer.foursquare.com" alt="Foursquare">Powered by Foursquare Places API</a></p>
  </div>
);

export default Footer;