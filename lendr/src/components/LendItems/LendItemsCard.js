import React from "react";

const LendItemsCard = props => {
  console.log(`LENDITEMSCARD PROPS`, props);
  return (
    <div>
      <p>Item: {props.user.name}</p>
      <p>Cost: {props.user.cost} </p>
      <p>Description: {props.user.description}</p>
    </div>
  );
};

export default LendItemsCard;
