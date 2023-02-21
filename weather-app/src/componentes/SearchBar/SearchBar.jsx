import React from "react";
import "./SearchBar.scss";
import axios from "axios";

const SearchBar = ({ query, setQuery, setWeather, weather, api, getData, getDailyData }) => {
  async function search(event, props) {
    const api = {
      key: "e8df9e34440aa34948453856c26a29db",
      base: "https://api.openweathermap.org/data/2.5/",
    };
    if (event.key === "Enter") {
      let geo = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${api.key}`
      );
      const lat = geo.data[0].lat;
      const long = geo.data[0].lon;
      const dailyWeather = await axios.get(
        `${api.base}forecast?lat=${lat}&lon=${long}&cnt=8&appid=${api.key}&units=metric`
      );
      getDailyData(dailyWeather.data.list);

      let currentWeather = await axios.get(`${api.base}weather?lat=${lat}&lon=${long}&appid=${api.key}&units=metric`)
      getData(currentWeather.data)
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
