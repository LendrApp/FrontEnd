import React from "react";
import "./LendItems.scss";
import { Card, Icon } from "antd";
import { Link } from "react-router-dom";
import { deleteItem } from "../../store/actions";
import { connect } from "react-redux";

const { Meta } = Card;

const LendItemsCard = props => {
  // console.log(`THIS IS LENDITEMSCARD PROPS`, props);

  const handleDelete = e => {
    e.preventDefault();
    const id = props.item.id;
    props.deleteItem(id);
  };

  return (
    <div className="item-card-container">
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          />
        }
        actions={[
          <Icon
            className="icon-delete"
            type="delete"
            key="delete"
            onClick={handleDelete}
          />,
          <Link
            className="icon-edit"
            to={`/dashboard/edit-items/${props.item.id}`}
          >
            <Icon type="edit" key="edit" />
          </Link>
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
    itemData: state.itemData,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { deleteItem }
)(LendItemsCard);

// export default LendItemsCard;
