import React from "react";
import logo from "./logo192.png";

function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} width="35px" height="35px" alt="logo" />
          <span id="nav-text">WhatsApp Direct Message</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
