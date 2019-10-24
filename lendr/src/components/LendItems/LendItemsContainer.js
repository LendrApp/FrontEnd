import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LendItemsForm from "./LendItemsForm";
import LendItemsCard from "./LendItemsCard";
import { fetchItem } from "../../store/actions";
import "./LendItems.scss";

const LendItemsContainer = props => {
  console.log(`THIS IS PROPS IN LENDITEMSCONTAINER`, props);
  useEffect(() => {
    props.fetchItem();
  }, []);

  // if (props.itemData) {
  //   return <h2>Loading Items...</h2>;
  // }

  // if (props.itemData < 1) {
  //   return <h1>Your items are loading...</h1>;
  // } else {
  return (
    <>
      <LendItemsForm />
      <div className="main-cards-container">
        {/* {props.itemData.map((item, index) => {
          return <LendItemsCard key={index} item={item} />;
        })} */}
        {/* <LendItemsCard key={props.index} item={props.item} /> */}
      </div>
    </>
  );
  // }
};

const mapStateToProps = state => {
  console.log(`MSTP STATE`, state);
  return {
    itemData: state.itemData,
    fetchingData: state.fetchingData,
    error: state.error,
    username: state.username
  };
};

export default connect(
  mapStateToProps,
  {
    fetchItem: fetchItem
  }
)(LendItemsContainer);
