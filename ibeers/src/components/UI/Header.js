import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary text-center w-100 " style={headerStyle}>
        <Link className="navbar-brand" to="/">
          <TiHome />
        </Link>
      </nav>
    );
  }
}

const headerStyle = {
  justifyContent: "center"
};

export default Header;
