import React from "react";

const Account = () => {
  return (
    <div className="header__account">
      <div className="header__account__notification">
        <p>1</p>
        <img alt="Notificacion" />
      </div>
      <div className="header__account__profile">
        <img alt="Foto perfil" />
        <img alt="Desplegar menu" />
        <div style={{ display: "none" }}>lo que esta en el drop</div>
      </div>
      <div className="header__account__settings">
        <a href="/settings">
          <img alt="Ajustes" />
        </a>
      </div>
    </div>
  );
};

export default Account;
