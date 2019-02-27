import React from "react";
import PropTypes from 'prop-types';


const Header = props => {
  const {
    title = 'Neighborhood Map: Puna District Grocers',
    url = 'http://localhost:3000'
  } = props;

  return (
    <header id="header">
      <h1 id="title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;