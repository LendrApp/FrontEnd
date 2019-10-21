// Once a User logs in, they are redirected to this page (Private Route)
// From here they can view their items lent out and items they've borrowed
// There will be a button on this page that takes them to LendItem.js

import React from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";
import LendItem from "./LendItem";
import Login from "./Login";

function Dashboard(props) {
  return (
    <>
      <div className="nav">
        <h1>Lendr</h1>
        <nav>
          <div className="nav-links">
            <a href="">Home</a>
            <Link to="/dashboard">Dashboard</Link>
            <Route path="/login" component={Login} />
          </div>
        </nav>
      </div>
      <div className="dashboard-header">
        <h1>Your Dashboard</h1>
      </div>
      <div className="dashboard-button">
        <Link to="/lendItem">
          <button className="md-button lend-item-button">Lend an Item</button>
        </Link>
      </div>
      <Route path="/lendItem" component={LendItem} />
    </>
  );
}
export default Dashboard;
