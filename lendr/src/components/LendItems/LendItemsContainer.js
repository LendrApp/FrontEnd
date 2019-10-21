import React, { useEffect } from "react";
import { connect } from "react-redux";

import LendItemsCard from "./LendItemsCard";
import { addUser } from "../../store/actions";

const LendItemsContainer = props => {
  console.log(`THIS IS PROPS IN LENDITEMSCONTAINER`, props);
  useEffect(() => {
    props.addUser();
  }, []);

  if (props.users) {
    return <h2>Loading Items...</h2>;
  }

  return (
    <div>
      {props.users.map((user, index) => {
        return <LendItemsCard key={index} user={user} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`MSTP STATE`, state);
  return {
    users: state.users,
    fetchingData: state.fetchingData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    addUser
  }
)(LendItemsContainer);
