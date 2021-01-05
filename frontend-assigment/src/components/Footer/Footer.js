import React from "react";

import LogoPng from "../../assets/images/logo.png";

const Footer = (props) => {
  return (
    <footer>
      <img className="logo" src={LogoPng} alt="Logo" />
      <div className="information"> 
        <a href="/questions">Preguntas frecuentes</a>
        <a href="/contactus">Contáctanos</a>
        <a href="/information">Información</a>
      </div>
      <span>Docred © 2019. Todos los derechos reservados</span>
    </footer>
  );
};

export default Footer;
