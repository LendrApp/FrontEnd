import React, { useEffect, useState } from "react";
import axiosWitAuth from "../../utils/axiosWithAuth";
import { NavLink } from "react-router-dom";

export default function EditItem(props) {
  const editingState = {
    name: "",
    description: "",
    price: ""
  };

  const [stuff, setStuff] = useState(editingState);

  const handleChange = e => {
    setStuff({ ...stuff, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWitAuth()
      .put(`https://lenders-app.herokuapp.com/api/items/:id`, stuff)
      .then(res => {
        setStuff(editingState);
        props.history.push(`/AvailableItems`);
      })
      .catch(err => console.log(err));
  };
  console.log(stuff);
  return (
    <div className="updateContainer">
      <div className="update-top">
        <h4>Lendr</h4>
        <NavLink to="/AvailableItems">
          <button>Back</button>
        </NavLink>
      </div>
      <h1>Update Item</h1>
      <form className="update-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={stuff.name}
          onChange={handleChange}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="description"
          value={stuff.description}
          onChange={handleChange}
          placeholder="Description"
        ></input>
        <input
          type="text"
          name="price"
          value={stuff.price}
          onChange={handleChange}
          placeholder="Price"
        ></input>
        <button className="updateButton">Update</button>
      </form>
    </div>
  );
}
