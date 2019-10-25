import React, { useState } from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import { borrowItem } from "../../store/actions";
import "./AvailableItems.scss";

const { Meta } = Card;

const AvailableItemsCard = props => {
  // console.log(`THIS IS AvailableItemsCard PROPS`, props);
  // const [disableButton, setDisableButton] = useState({
  //   value: ""
  // });

  // const handleDelete = e => {
  //   e.preventDefault();
  //   const id = props.item.id;
  //   props.deleteItem(id);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const id = props.item;
    props.borrowItem(id);
    // props.history.push(`/dashboard`);
    console.log(id);
  };
  const handleDisable = e => {
    const id = props.item;
    props.borrowItem(id);
  };

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
        actions={[
          <Button
            type="primary"
            onClick={e => handleSubmit(e)}
            // disabled={e => handleDisable(e)}
          >
            Borrow this item
          </Button>
        ]}
      >
        <Meta title={props.item.name} description={props.item.description} />
        <h5> ${props.item.price}/DAY</h5>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { borrowItem }
)(AvailableItemsCard);
