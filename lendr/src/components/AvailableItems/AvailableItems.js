import React from "react";
import { Card, Icon } from "antd";

const { Meta } = Card;

const AvailableItems = () => {
  return (
    <div>
      <h2>Lend an Item!</h2>
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

export default AvailableItems;
