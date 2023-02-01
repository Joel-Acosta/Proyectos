import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ query, setQuery, weather, setWeather, api }) => {
  function search(event) {
    if (event.key === "Enter") {
      const url = `${api.base}weather?q=${query}&units=metric&&APPID=${api.key}`
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
          setWeather(result);
          setQuery('');
        });
    } 
  };

  return (
    <div className="search-box">
      <div className="favorite">
        <div>fav1</div>
        <div>fav2</div>
        <div>fav3</div>
        <div>fav4</div>
      </div>
      
      <input 
        type="text" 
        className="search-bar" 
        placeholder="Search..." 
        value={query}
        onChange={event => setQuery(event.target.value)}
        onKeyPress={search}/>
      <div className="actual-date">Tuesday, 31 May 2022 | Local Time 12:17</div>
    </div>
  );
};

export default SearchBar;
