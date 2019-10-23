import React, { useState } from "react";
import { connect } from "react-redux";

// styles
import { Button } from "antd";
import "./LendItems.scss";

const LendItemsForm = props => {
  console.log(`LendItemsForm`, props);

  const [lendItem, setLendItem] = useState({
    itemName: "",
    cost: "",
    description: ""
  });

  const handleChanges = e => {
    setLendItem({ ...lendItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addLendItem(lendItem);
    document.getElementById("clear-input").reset();
  };

  return (
    <div className="form-container">
      <form id="clear-input">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={props.itemName}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="cost"
          placeholder="How much?"
          value={props.cost}
          onChange={handleChanges}
        />
        {/* <input
          type="text"
          name="description"
          placeholder="Description"
          value={props.description}
          onChange={handleChanges}
        /> */}
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={props.description}
          onChange={handleChanges}
        />

        <Button type="primary" onClick={handleSubmit}>
          <span>Lend Item</span>
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(LendItemsForm);
