import React, { useEffect } from "react";
import "./LendItems.scss";
import { Card, Icon } from "antd";
import { NavLink } from "react-router-dom";
import { updateItem, deleteItem } from "../../store/actions";

const { Meta } = Card;

const LendItemsCard = props => {
  console.log(`LENDITEMSCARD PROPS`, props);
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
                props.deleteItem(props.data.id);
              }}
            >
              Delete
            </button>
            <Icon type="delete" key="delete" />,
            <NavLink to={`/items/${props.data.id}/edit`}>
              <button>Edit</button>
            </NavLink>
            <Icon type="edit" key="edit" />
          </div>
          // <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          // avatar={
          //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          // }
          title="`${props.items.name}`"
          description="`${props.items.description}`"
        />
        <h5> {props.items}/DAY</h5>
      </Card>
    </div>
  );
};

export default LendItemsCard;
