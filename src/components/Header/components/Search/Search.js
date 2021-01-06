import React from "react";
import SearchSvg from "../../../../assets/icons/search.svg";

const Search = () => (
  <div className="search">
    <button type="button">
      <img src={SearchSvg} alt="Buscar" style={{ width: 20, height: 20 }} />
    </button>
    <input placeholder="¿Qué estás buscando?" />
  </div>
);

export default Search;
