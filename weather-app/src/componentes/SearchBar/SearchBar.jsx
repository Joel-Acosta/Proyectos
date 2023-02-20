import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ query, setQuery, setWeather, weather,api , getData}) => {
  function search(event, props) {
    const api = {
      key: "e8df9e34440aa34948453856c26a29db",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    if (event.key === "Enter") {
      const url = `${api.base}weather?q=${query}&units=metric&&APPID=${api.key}`;
      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          console.log(result)
         getData(result);
          console.log(weather)
          setQuery('');
        });
    }
  }

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
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      <div className="actual-date">Tuesday, 31 May 2022 | Local Time 12:17</div>
    </div>
  );
};

export default SearchBar;
