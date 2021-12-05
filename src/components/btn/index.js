import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "../Account";

export const Btn = () => {
  return (
    <div className="navbar-nav ms-auto">
      <Link className="btn btn-primary me-4" to="/login">
        Login
      </Link>
      <Link className="btn btn-secondary" to="/regis">
        Sign Up
      </Link>
    </div>
  );
};

export const Logout = () => {
  const { getSession, logout } = useContext(AccountContext);
  return (
    <div className="navbar-nav ms-auto">
      <a href="login" className="btn btn-primary me-4" onClick={logout}>
        Logout
      </a>
    </div>
  );
};
