import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../../store/actions";

import "./NavBar.scss";

const NavBar = props => {
  let [token, setToken] = useState(props.token);

  useEffect(() => {
    setToken(props.token);
  }, [props.token]);

  return (
    <div className="nav-bar">
      <h1>Lendr</h1>
      <nav>
        <Link className="link" to={props.token ? "/dashboard" : "/login"}>
          Dashboard
        </Link>
        {!token && (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
        {!token && (
          <Link className="link" to="/register">
            Register
          </Link>
        )}
        {token && (
          <Link className="link" to="/" onClick={props.logOut}>
            Logout
          </Link>
        )}

        {token && (
          <Link className="link" to="/items">
            Add items
          </Link>
        )}
        {token && (
          <Link className="link" to="/items">
            Borrow Item
          </Link>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token
  };
};

export default connect(
  mapStateToProps,
  { logOut: logOut }
)(NavBar);
