import React from "react";

import { Menu } from "antd";
import { HomeOutlined, CrownOutlined } from "@ant-design/icons";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <a href="/">Home</a>
          </Menu.Item>

          <Menu.Item key="2" icon={<CrownOutlined />}>
            <a href="/ranking">Rank Board</a>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default Navbar;