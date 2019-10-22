// Once a User logs in, they are redirected to this page (Private Route)
// From here they can view their items lent out and items they've borrowed
// There will be a button on this page that takes them to LendItem.js

import React from "react";
import { Route, Link } from "react-router-dom";
import "../App.css";
// import LendItem from "./LendItem";
import Login from "./Login";
import LendItemsCard from "./LendItems/LendItemsCard";
import { connect } from "react-redux";
import { addLendItems } from "../store/actions/index";
import { itemReducer } from "../store/reducers/index";
// Styles
import { Button, Icon } from "antd";
import "./Dashboard.scss";

function Dashboard(props) {
  const redirect = link => {
    props.history.push(link);
  };

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
        <Button
          type="primary"
          className="md-button lend-item-button"
          onClick={() => redirect(`/items`)}
        >
          <span>Lend an Item</span>
        </Button>
        <h1>My Items</h1>
        <div className="items-container">
          {/* {this.props.data &&
            this.props.data.map(data => (
              <LendItemsCard key={data.id} data={data} />
            ))} */}
          <LendItemsCard />
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = state => ({
//   data: state.itemReducer.data,
//   fetching: state.itemReducer.fetching,
//   error: state.itemReducer.error
// });
// export default connect(
//   mapStateToProps,
//   { addLendItems }
// )(Dashboard);
export default Dashboard;
