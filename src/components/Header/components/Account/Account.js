import React from "react";
import { Menu, Dropdown } from "antd";

import DownSvg from "../../../../assets/icons/down.svg";
import ProfileJpg from "../../../../assets/images/profile.jpg";
import NotificationSvg from "../../../../assets/icons/notification.svg";
import SettingsSvg from "../../../../assets/icons/settings.svg";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/account">Mi perfil</a>
    </Menu.Item>
    <Menu.Item className="menu__notification" key="1">
      <a href="/notification">Notificaciones</a>
    </Menu.Item>
    <Menu.Item className="menu__configuration" key="2">
      <a href="/configuration">Configuración</a>
    </Menu.Item>
  </Menu>
);
const notificaciones = (
  <Menu>
    <Menu.Item key="0">
      <a href="/notifications">Una notificaión</a>
    </Menu.Item>
  </Menu>
);

const Account = () => (
  <div className="account">
    <Dropdown
      placement="bottomRight"
      className="account__notification"
      overlay={notificaciones}
      trigger={["click"]}
    >
      <button
        type="button"
        className="account__notification__button"
        onClick={(e) => e.preventDefault()}
      >
        <div className="number">
          <p>1</p>
        </div>
        <img src={NotificationSvg} alt="Notificacion" />
      </button>
    </Dropdown>
    <Dropdown
      placement="bottomRight"
      className="account__profile"
      overlay={menu}
      trigger={["click"]}
    >
      <button
        type="button"
        className="account__profile__button"
        onClick={(e) => e.preventDefault()}
      >
        <img className="photo" src={ProfileJpg} alt="Foto perfil" />

        <img src={DownSvg} alt="Desplegar menu" className="down" />
      </button>
    </Dropdown>
    <div className="account__settings">
      <a href="/settings">
        <img src={SettingsSvg} alt="Ajustes" />
      </a>
    </div>
  </div>
);

export default Account;
