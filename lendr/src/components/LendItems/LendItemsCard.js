import React from "react";
import "./LendItems.scss";
import { Card, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { updateItem, deleteItem } from "../../store/actions";

const { Meta } = Card;

const LendItemsCard = props => {
  console.log(`THIS IS LENDITEMSCARD PROPS`, props);

  return (
    <div className="item-card-container">
      {/* <p>Item: </p>
      <p>Cost: </p>
      <p>Description: </p> */}
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
            <button
              onClick={() => {
                props.deleteItem(props.item.id);
              }}
            >
              Delete
            </button>
            <Icon type="delete" key="delete" />,
            <NavLink to={`/items/${props.item.id}/editItems`}>
              <button>Edit</button>
            </NavLink>
            <Icon type="edit" key="edit" /> */}{" "}
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

export default LendItemsCard;
