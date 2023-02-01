import React, {useState, useEffect} from "react";
import "./CurrentWeather.scss";
import rainy from "../../assets/rainy.gif";

const CurrentWeather = ({ weather }) => {
    const [gif, setGif] = useState('')
    const outside = 'rainy'// info que viene de la api
    useEffect(() => {
        if (outside === 'rainy') { //función que define el gif segun outside
            setGif(rainy)
        } else if (outside === 'sunny') {
            console.log('sunny')
        }
    }, [outside])
      

  //lógica de api
  return (
    <div className="main-current " id="rainy">
      
      <div className="data">
        <div className="upper">
          <div className="upper-left">
            <h3>{weather.name}</h3>
            <h3>Clima</h3>
          </div>
          <div className="upper-mid">
            <h1>18°</h1>
          </div>
          <div className="upper-right">
            <h3>Real Feel</h3>
            <h3>Humidity</h3>
            <h3>Wind</h3>
          </div>
        </div>
        <div className="lower">
          <ul>
            <li>Rise data</li>
            <span> | </span>
            <li>Set data</li>
            <span> | </span>
            <li>High data</li>
            <span> | </span>
            <li>Low data</li>
          </ul>
        </div>
      </div>
      <img src={gif} alt="rainy" className="gif" />
      {/* renderizar condicionalmente <video src={url} autoplay loop muted/> */}

    </div>
  );
};

export default CurrentWeather;
