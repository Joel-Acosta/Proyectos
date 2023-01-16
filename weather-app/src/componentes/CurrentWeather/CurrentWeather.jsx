import React from "react";
import "./CurrentWeather.scss";
import Background from "./Background";

const CurrentWeather = () => { 

    //lógica de api
    return (
        <div className="main-current " id="rainy">
            <Background state={'rainy'}></Background>
            {/* renderizar condicionalmente <video src={url} autoplay loop muted/> */}
            <div className="upper">
                <div className="upper-left">
                    <h3>Ciudad, AB</h3>
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
    );
};

export default CurrentWeather;
