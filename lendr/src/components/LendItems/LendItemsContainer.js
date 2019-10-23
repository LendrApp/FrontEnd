import React, { useEffect } from "react";
import { connect } from "react-redux";
import LendItemsForm from "./LendItemsForm";
import { addLendItems } from "../../store/actions";
import "./LendItems.scss";

const LendItemsContainer = props => {
  console.log(`THIS IS PROPS IN LENDITEMSCONTAINER`, props);
  useEffect(() => {
    props.addLendItems();
  }, [props]);

  if (props.users) {
    return <h2>Loading Items...</h2>;
  }

  return (
    <>
      <LendItemsForm />
      <div className="main-cards-container">
        {/* {props.itemData.map((user, index) => {
        return <LendItemsCard key={index} user={user} />;
      })} */}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(`MSTP STATE`, state);
  return {
    itemData: state.itemData,
    fetchingData: state.fetchingData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    addLendItems
  }
)(LendItemsContainer);

// export default LendItemsContainer;
