import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-box">

      <div className="favorite">
        <div>fav1</div>
        <div>fav2</div>
        <div>fav3</div>
        <div>fav4</div>
      </div>

      <input type="text" className="search-bar" placeholder="Search..."></input>

      <div className="actual-date">Tuesday, 31 May 2022 | Local Time 12:17</div>
    </div>
  );
};

export default SearchBar;
