import React, { useState } from "react";
import { connect } from "react-redux";
import { addLendItems } from "../../store/actions";

// styles
import { Button } from "antd";
import "./LendItems.scss";

const LendItemsForm = props => {
  // let id = props.match.params.itemID;

  console.log(`LendItemsForm`, props);

  const [lendItem, setLendItem] = useState({
    name: "",
    price: "",
    description: ""
  });

  console.log(lendItem);

  const handleChanges = e => {
    setLendItem({ ...lendItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log(lendItem);
    e.preventDefault();
    props.addLendItems(lendItem);
    // props.history.push(`/items`);
    document.getElementById("clear-input").reset();
  };

  return (
    <div className="form-container">
      <form id="clear-input">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={props.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="price"
          placeholder="How much?"
          value={props.price}
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
          onChange={e => handleChanges(e)}
        />

        <Button type="primary" onClick={e => handleSubmit(e)}>
          <span>Lend Item</span>
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(`THIS IS MSTP FORM`, state);
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { addLendItems }
)(LendItemsForm);
