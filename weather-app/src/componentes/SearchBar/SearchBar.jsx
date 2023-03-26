import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const SearchBar = ({
  getWeeklydata,
  getLocation,
  setWeather,
  weather,
  api,
  getData,
}) => {
  const [favourites, setFavourites] = useState([]);
  const [query, setQuery] = useState("");

  /*   window.addEventListener('load', ()=>{
    const fav = window.localStorage.getItem('fav')
    setFavourites(fav)
    console.log(fav);
  }) */

  const handleFavouriteAdd = () => {
    if (
      !Array.from(favourites).includes(query.toLowerCase()) &&
      favourites.length < 4
    ) {
      setFavourites((favourites) => [...favourites, query]);
    } else {
      handleFavouriteRemove();
    }
    /*  window.localStorage.setItem('fav', favourites) */
  };
  const handleFavouriteRemove = () => {
    setFavourites(favourites.filter((item) => item !== query));
  };

  const apiCredentials = {
    key: "e8df9e34440aa34948453856c26a29db",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  async function handleAPISearch(event, props) {
    let geo = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${apiCredentials.key}`
    );
    getLocation(geo.data);
    const lat = geo.data[0].lat;
    const long = geo.data[0].lon;
    //obtiene un listado
    const dailyWeather = await axios.get(
      `${apiCredentials.base}forecast?lat=${lat}&lon=${long}&appid=${apiCredentials.key}&units=metric`
    );
    getData(dailyWeather.data.list);
  }

  // función del botón de favorito, geo.data.name es lo que se agregaría en el array de favourite.
  // agregar botón de search.
  return (
    <div className="search-box">
      <div className="favorite">
        {favourites.length > 0 ? (
          favourites.map((item) => (
            <button
              onClick={(item) => setQuery(item.target.innerText)}
              key={favourites.indexOf(item)}
            >
              {item}
            </button>
          ))
        ) : (
          <p>Ingrese una ciudad para seleccionarla como favorito.</p>
        )}
      </div>

      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        // onKeyPress={handleAPISearch}
      />
      <button onClick={handleAPISearch}>
        Search.. <SearchIcon />
      </button>
      <button onClick={handleFavouriteAdd}>
        Add to Favorites
        {Array.from(favourites).includes(query.toLowerCase()) ? (
          <FavoriteIcon />
        ) : (
          <FavoriteBorderIcon />
        )}
      </button>

      <div className="actual-date">Tuesday, 31 May 2022 | Local Time 12:17</div>
    </div>
  );
};

export default SearchBar;
