import React from "react";
import { Menu, Dropdown } from "antd";

import DownSvg from "../../../../assets/icons/down.svg";
import ProfileJpg from "../../../../assets/images/profile.jpg";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/account">Mi perfil</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="/notification">Notificaciones</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <a href="/configuration">Configuración</a>
    </Menu.Item>
  </Menu>
);

const Account = () => {
  return (
    <div className="account">
      <div className="account__notification">
        <p>1</p>
        <img alt="Notificacion" />
      </div>
      <Dropdown placement="bottomRight" className="account__profile" overlay={menu} trigger={["click"]}>
        <button
          className="account__profile__button"
          onClick={(e) => e.preventDefault()}
        >
          <img className="photo" src={ProfileJpg} alt="Foto perfil" />

          <img src={DownSvg} alt="Desplegar menu" className="down" />
        </button>
      </Dropdown>
      <div className="account__settings">
        <a href="/settings">
          <img alt="Ajustes" />
        </a>
      </div>
    </div>
  );
};

export default Account;
