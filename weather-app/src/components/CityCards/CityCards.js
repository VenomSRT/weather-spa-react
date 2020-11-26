import React from 'react';
import { CityCard } from './CityCard/CityCard';
import './CityCards.scss';

export const CityCards = ({ cities, setCurrentCity, deleteCity }) => (
  <div className="cards">
    {cities.length > 0 && cities.map(city => {
      console.log(cities);
      return (<div key={city.id}>
        <CityCard
          cityData={city}
          deleteCity={deleteCity}
          setCurrentCity={setCurrentCity}
        />
      </div>)
    })}
  </div>
);