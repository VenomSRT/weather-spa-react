import React from 'react';
import { CityCard } from './CityCard/CityCard';
import './CityCards.scss';

export const CityCards = ({ cities, setCurrentCity, setToDelete }) => (
  <div className="cards">
    {cities.length && cities.map(city => {
      console.log(city);
      return (<div key={city.id}>
        <CityCard
          cityData={city}
          setToDelete={setToDelete}
          setCurrentCity={setCurrentCity}
        />
      </div>)
    })}
  </div>
);