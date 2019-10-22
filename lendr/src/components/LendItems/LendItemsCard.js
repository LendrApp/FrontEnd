import React from "react";
import "./LendItems.scss";
import { Card, Icon, Avatar } from "antd";

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
          <Icon type="delete" key="delete" />,
          <Icon type="edit" key="edit" />
          // <Icon type="ellipsis" key="ellipsis" />
        ]}
      >
        <Meta
          // avatar={
          //   <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          // }
          title="Item"
          description="This is the description"
        />
        <h5> $400/DAY</h5>
      </Card>
    </div>
  );
};

export default LendItemsCard;
