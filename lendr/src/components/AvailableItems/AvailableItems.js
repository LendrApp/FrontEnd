import React, { useState } from "react";
import { Card, Button, Input } from "antd";
import { connect } from "react-redux";
import { fetchUser, fetchItem } from "../../store/actions";
import LendItemsCard from "../LendItems/LendItemsCard";
import AvailableItemsCard from "./AvailableItemsCard";
import "./AvailableItems.scss";

const { Search } = Input;

const AvailableItems = props => {
  const [search, setSearch] = useState({
    search: "",
    selectItem: ""
  });

  const handleChange = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
    console.log(e);
  };

  const handleSubmit = e => {
    // e.preventDefault();
    props.itemData.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  };

  return (
    <div>
      <h2>Borrow an Item!</h2>
      <div className="search">
        <Search
          placeholder="Search an item"
          enterButton="Search"
          size="large"
          onChange={handleChange}
          onSearch={value => console.log(value)}
        />
      </div>
      <div className="all-cards-container">
        {props.itemData.map((item, index) => {
          return <AvailableItemsCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: state.username,
    itemData: state.itemData,
    fetchingData: state.fetchingData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchUser: fetchUser, fetchItem: fetchItem }
)(AvailableItems);
