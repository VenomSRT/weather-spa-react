import React from 'react';
import { Link } from 'react-router-dom';
import './CityCard.scss';

export const CityCard = ({ cityData, setToDelete, setCurrentCity }) => (
  <div className="card">
    <div
      className="card__delete"
      onClick={() => {
        setToDelete(cityData.id);
      }}
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
      <h3 className="card__title">{cityData.name}</h3>
    </Link>
    <p>Температура: {cityData.main.temp.toFixed(1)}</p>
    <p>Температура (ощущается): {cityData.main.feels_like.toFixed(1)}</p>
    <p>Влажность: {cityData.main.humidity}</p>
  </div>
);