import React from 'react';
import { Link } from 'react-router-dom';
import './CityCard.scss';

export const CityCard = ({ cityData, deleteCity, setCurrentCity, renewData }) => (
  <div className="card">
    <div
      className="card__delete"
      onClick={() => deleteCity(cityData.id)}
    />
    <Link
      to={`/${cityData.name}`}
      onClick={() => {
        console.log(cityData.name, cityData.coord);
        setCurrentCity({
          name: cityData.name,
          coord: cityData.coord
        });
      }}
    >
      <h3 className="card__title">
        {cityData.name}
      </h3>
    </Link>
    <p className="card__image-container">
      {cityData.weather.map(conditions => (
        <figure>
          <img
            src={`http://openweathermap.org/img/wn/${conditions.icon}@2x.png`}
            alt={conditions.description}
          />
          <figcaption>{conditions.main}</figcaption>
        </figure>
      ))}
    </p>
    <p className="card__data-row">
      <span>Temperature:</span> {cityData.main.temp.toFixed(1)} &#8451;
    </p>
    <p className="card__data-row">
      <span>Temperature (feels like):</span> {cityData.main.feels_like.toFixed(1)} &#8451;
    </p>
    <p className="card__data-row">
      <span>Humidity:</span> {cityData.main.humidity}%
    </p>
    <p className="card__data-row">
      <span>Pressure:</span> {cityData.main.pressure} hPa
    </p>
    <p className="card__data-row">
      <span>Wind:</span>

      <div className="card__wind-data">
        <div>{cityData.wind.speed} m/s</div>
        
        <div
          className="card__arrow"
          style={{
            transform: `rotate(${cityData.wind.deg}deg)`
          }}
        ></div>
      </div>
    </p>
    <p className="card__data-row">
      Date of last data update: {new Date(cityData.dt * 1000).toString().split('GMT')[0]}
    </p>
    <button
      className="card__button"
      onClick={() => renewData(cityData.id)}
    >
      Refresh
    </button>
  </div>
);