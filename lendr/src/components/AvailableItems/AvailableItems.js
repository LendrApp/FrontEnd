import React from "react";
import { Card, Button, Input } from "antd";
import "./AvailableItems.scss";

const { Meta } = Card;
const { Search } = Input;

const AvailableItems = () => {
  return (
    <div>
      <h2>Borrow an Item!</h2>
      <div className="search">
        <Search
          placeholder="Search an item"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Button type="primary">Borrow Item</Button>

          // <Icon type="ellipsis" key="elligitpsis" />
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
