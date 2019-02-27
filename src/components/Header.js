import React from "react";
import PropTypes from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const {
      title = 'Neighborhood Map: Puna District Grocers'
    } = this.props;

    return (
      <header id="header">
        <h1 id="title">{title}</h1>
      </header>
    );
  }
}

export default Header;