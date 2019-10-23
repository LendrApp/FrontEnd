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

  const handleChanges = e => {
    setLendItem({ ...lendItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
<<<<<<< HEAD
    props.addLendItems(lendItem);
    // props.history.push(`/items`);
    document.getElementById("clear-input").reset();
=======
    // props.addLendItem(lendItem);
    // document.getElementById("clear-input").reset();
    if (id) {
      props.addLendItems(lendItem);
    }
    props.history.push("./dashboard");
>>>>>>> 36aa7187d9f847dcbc53288a2d99cdae9e729ac2
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

<<<<<<< HEAD
        <Button type="primary" onClick={e => handleSubmit(e)}>
          <span>Lend Item</span>
=======
        <Button type="primary" onClick={handleSubmit}>
          Lend Item
>>>>>>> 36aa7187d9f847dcbc53288a2d99cdae9e729ac2
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
<<<<<<< HEAD
  console.log(`THIS IS MSTP FORM`, state);
  return {
    state: state
=======
  return {
    userItems: state.userItems,
    username: state.username
>>>>>>> 36aa7187d9f847dcbc53288a2d99cdae9e729ac2
  };
};

export default connect(
  mapStateToProps,
  { addLendItems: addLendItems }
)(LendItemsForm);
