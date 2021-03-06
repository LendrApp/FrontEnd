// Once a User logs in, they are redirected to this page (Private Route)
// From here they can view their items lent out and items they've borrowed
// There will be a button on this page that takes them to LendItem.js

import React, { useEffect } from "react";
import LendItemsCard from "../LendItems/LendItemsCard";
import { connect } from "react-redux";
import { fetchUser, fetchItem, borrowItem } from "../../store/actions";
import BorrowedItem from "../AvailableItems/BorrowedItem";

import { Button } from "antd";
import "./Dashboard.scss";

const Dashboard = props => {
  console.log(`USERNAME IN DASHBOARD`, props);

  useEffect(() => {
    props.fetchUser(props.username);
    props.fetchItem();
    console.log(`props username`, props.username);
  }, []);

  const redirect = link => {
    props.history.push(link);
  };

  return (
    <>
      <div className="nav">
        <nav>
          <div className="nav-links">
            {/* <a href="">Home</a>
            <Link to="/dashboard">Dashboard</Link>
            <Route path="/login" component={Login} /> */}
          </div>
        </nav>
      </div>
      <h2>Hello {props.username}</h2>
      <div className="dashboard-header">
        <h1>Your Dashboard</h1>
      </div>
      <div className="dashboard-button">
        <Button
          type="primary"
          className="md-button lend-item-button"
          onClick={() => redirect(`/items`)}
        >
          Lend an Item
        </Button>
        <div className="border-line"></div>
        <div className="items-main-container">
          <div className="lend-items">
            <h2 className="h2">My Items</h2>
            <div className="items-container">
              {props.itemData.map((item, index) => {
                return <LendItemsCard key={index} item={item} />;
              })}
            </div>
          </div>
          <div className="borrowed-items">
            <h2 className="h2">Borrowed Items</h2>
            <div className="items-container">
              {props.borrowData.map((item, index) => {
                return <BorrowedItem key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    itemData: state.itemData,
    borrowData: state.borrowData
  };
};

export default connect(
  mapStateToProps,
  { fetchUser: fetchUser, fetchItem: fetchItem, borrowItem: borrowItem }
)(Dashboard);
