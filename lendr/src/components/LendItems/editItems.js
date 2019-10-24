import React, { useEffect, useState } from "react";
import axiosWitAuth from "../../utils/axiosWithAuth";
import { connect } from "react-redux";
import { updateItem } from "../../store/actions";
import { Button } from "antd";

const EditItem = props => {
  console.log(props);

  let initialState = {
    name: "",
    price: "",
    description: ""
  };

  const [editing, setEditing] = useState(initialState);
  console.log(editing);

  const handleChanges = e => {
    setEditing({ ...editing, [e.target.name]: e.target.value });
  };

  const saveEdit = e => {
    e.preventDefault();
    // let index = itemData.id;
    // if(index !== )
    let editItem = props.itemData.filter(item => item.id !== props.itemData.id);
    updateItem([...editItem]);
    console.log(editItem);
  };

  // console.log(itemData);

  // const editingState = {
  //   name: "",
  //   description: "",
  //   price: ""
  // };

  // const [stuff, setStuff] = useState(editingState);

  // const handleChange = e => {
  //   setStuff({ ...stuff, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axiosWitAuth()
  //     .put(`https://lenders-app.herokuapp.com/api/items/:id`, stuff)
  //     .then(res => {
  //       setStuff(editingState);
  //       props.history.push(`/AvailableItems`);
  //     })
  //     .catch(err => console.log(err));
  // };
  // console.log(stuff);

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   props.updateItem();
  // };

  return (
    <div className="form-container">
      <form id="clear-input">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={editing.name}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="price"
          placeholder="How much?"
          value={editing.price}
          onChange={handleChanges}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          value={editing.description}
          onChange={e => handleChanges(e)}
        />

        <Button type="primary" onClick={e => saveEdit(e)}>
          <span>Save</span>
        </Button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemData: state.itemData,
    username: state.username
  };
};
export default connect(
  mapStateToProps,
  { updateItem }
)(EditItem);
