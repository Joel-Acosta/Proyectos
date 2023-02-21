import React from 'react'
import './DailyWeatherCard.scss'

const DailyWeatherCard = ({dt, icon, min, max}) => {
    return (
        <div>
            <ul>
                <li>{dt.slice(11, 16)}</li>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='img' />
                <li>{Math.round(min)}°c - {Math.round(max)}°c</li>
            </ul>
        </div>
    )
}

export default DailyWeatherCard