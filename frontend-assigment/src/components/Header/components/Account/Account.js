import React from "react";

const Account = () => {
  return (
    <div>
      <div>
        <p>1</p>
        <img alt="Notificacion" />
      </div>
      <div>
        <img alt="Foto perfil" />
        <img alt="Desplegar menu" />
        <div style={{ display: "none" }}>lo que esta en el drop</div>
      </div>
      <div>
        <a href="/settings">
          <img alt="Ajustes" />
        </a>
      </div>
    </div>
  );
};

export default Account;
