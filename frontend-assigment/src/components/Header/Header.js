import React from "react";
import Search from "./components/Search/Search";
import Navigation from "./components/Navigation/Navigation";
import Account from "./components/Account/Account";

import LogoPng from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={LogoPng} alt="Logo" />
      <Search />
      <Navigation />
      <Account />
    </div>
  );
};

export default Header;
