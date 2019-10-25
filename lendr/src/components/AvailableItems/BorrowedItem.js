import React from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import { addLendItems, deleteItem } from "../../store/actions";
import "./AvailableItems.scss";

const { Meta } = Card;

const BorrowedItem = props => {
  console.log(`THIS IS BorrowedItem PROPS`, props);

  // const handleDelete = e => {
  //   e.preventDefault();
  //   const id = props.item.id;
  //   props.deleteItem(id);
  // };

  return (
    <div className="available-items-container">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
        }
        actions={[<Button type="danger">Cancel</Button>]}
      >
        <Meta title={props.item.name} description={props.item.description} />
        <h5> ${props.item.price}/DAY</h5>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    borrowData: state.borrowData
  };
};

export default connect(
  mapStateToProps,
  { deleteItem }
)(BorrowedItem);
