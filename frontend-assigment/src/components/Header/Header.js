import React from "react";
import Search from "./components/Search/Search";
import Navigation from "./components/Navigation/Navigation";
import Account from "./components/Account/Account";

import LogoPng from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <img className="logo" src={LogoPng} alt="Logo" />
      <Search />
      <Navigation />
      <Account />
    </header>
  );
};

export default Header;
