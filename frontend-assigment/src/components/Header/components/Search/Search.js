import React from "react";
import SearchSvg from "../../../../assets/icons/search.svg";

const Search = () => {
  return (
    <div className="header__search">
      <img src={SearchSvg} alt="Buscar" style={{ width: 30, height: 30 }}/>
      <input />
    </div>
  );
};

export default Search;
