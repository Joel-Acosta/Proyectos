import React from "react";
import "./SearchBar.scss";
import axios from "axios";

const SearchBar = ({ query, setQuery,getWeeklydata,getLocation, setWeather, weather, api, getData }) => {
  async function search(event, props) {
    const api = {
      key: "e8df9e34440aa34948453856c26a29db",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    if (event.key === "Enter") {
      let geo = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${api.key}`
      );
      getLocation(geo.data)
      const lat = geo.data[0].lat;
      const long = geo.data[0].lon;
      console.log(geo.data);
      //obtiene un listado 
      const dailyWeather = await axios.get(
        `${api.base}forecast?lat=${lat}&lon=${long}&appid=${api.key}&units=metric`
      );
      getData(dailyWeather.data.list);

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
