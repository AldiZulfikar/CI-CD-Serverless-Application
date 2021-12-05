import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Btn, Logout } from "../btn";
const Nav = ({ status }) => {
  console.log(status);
  return (
    <div className="container box-nav">
      <Navbar className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#">
          <img src="navLogo.png" width="175" height="37" />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active" href="#">
              Home
            </Link>
            <Link to="/product" className="nav-link active" href="#">
              Product
            </Link>
            <Link to="/admin" className="nav-link active" href="#">
              Admin
            </Link>
          </div>
          {status ? <Logout /> : <Btn />}
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
