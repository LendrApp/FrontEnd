import React, { useEffect } from "react";
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

  if (props.users) {
    return <h2>Loading Items...</h2>;
  }

  return (
    <>
      <LendItemsForm />
      <div className="main-cards-container">
        {props.itemData.map((items, index) => {
          return <LendItemsCard key={index} items={items} />;
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(`MSTP STATE`, state.itemData);
  return {
    itemData: state.itemData,
    fetchingData: state.fetchingData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchItem
  }
)(LendItemsContainer);
