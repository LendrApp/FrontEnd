import React, { useEffect } from "react";
import "./LendItems.scss";
import { Card, Icon } from "antd";
import { NavLink, Link } from "react-router-dom";
import { deleteItem } from "../../store/actions";
import { connect } from "react-redux";

const { Meta } = Card;

const LendItemsCard = props => {
  console.log(`THIS IS LENDITEMSCARD PROPS`, props);

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
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <div className="btnctnr">
            {/* <button
              onClick={() => {
                props.deleteItem(props.item.id);
              }}
            >
              Delete
            </button> */}
            <Icon type="delete" key="delete" onClick={handleDelete} />
            <Link to={`/dashboard/edit-items/${props.item.id}`}>
              <Icon type="edit" key="edit" />
            </Link>
          </div>
          // <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          // avatar={
          //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          // }
          title={props.item.name}
          description={props.item.description}
        />
        <h5> {props.item.price}/DAY</h5>
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
