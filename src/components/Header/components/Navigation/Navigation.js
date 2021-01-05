import React from "react";
import { Menu, Dropdown } from "antd";

import DownSvg from "../../../../assets/icons/down.svg";
import HomeSvg from "../../../../assets/icons/home.svg";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const Navigation = () => {
  return (
    <Dropdown className="nav" overlay={menu} trigger={["click"]}>
      <button className="nav__button" onClick={(e) => e.preventDefault()}>
        <img src={HomeSvg} alt="Inicio" className="home"/>
        <p>Inicio</p>
        <img src={DownSvg} alt="Flecha abajo" className="down"/>
      </button>
    </Dropdown>
  );
};

export default Navigation;
