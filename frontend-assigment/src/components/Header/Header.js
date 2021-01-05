import React from "react";
import Search from "./components/Search/Search";
import Navigation from "./components/Navigation/Navigation";
import Account from "./components/Account/Account";

import LogoPng from "../../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={LogoPng} alt="Logo" />
      <Search />
      <Navigation />
      <Account />
    </div>
  );
};

export default Header;
