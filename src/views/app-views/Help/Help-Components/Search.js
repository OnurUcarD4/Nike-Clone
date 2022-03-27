import React from "react";
import "../Help.scss";

const Search = () => {
  return (
    <div className="relative">
      <input
        className="search-input"
        placeholder="Hangi konuda yardımcı olabiliriz?"
        type="text"
      />
      <i className="fas fa-search search-input-logo"></i>
    </div>
  );
};

export default Search;
