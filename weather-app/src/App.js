import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { CityCards } from "./components/CityCards/CityCards";
import { CityPage } from "./components/CityPage/CityPage";
import { getWeatherData } from "./api/api";
import { getHourlyData } from './api/api';
import './App.scss';

function App() {
  const [currentCity, setCurrentCity] = useState([]);
  const [currentCityForecast, setCurrentCityForescast] = useState({})
  const [cities, setCities] = useState([]);
  const [toDelete, setToDelete] = useState('');
  
  function inputHandler() {
    const inputValue = document.querySelector('#search').value.trim();
    
    getWeatherData(inputValue)
    .then(data => {
      if (data.cod === 200) {
        if (!cities.some(city => city.id === data.id)) {
          setCities([...cities, data]);
        }
      } else {
        alert('Something went wrong (look details in console)');
        console.log(data.message);
      }
    });
    
    //localStorage.setItem('cities', JSON.stringify({'citiesId': cities.map(city => city.id)}));
  }

  useEffect(() => {
    if (toDelete) {
      setCities(cities.filter(city => city.id !== toDelete));
      setToDelete('');
    }
  }, [cities, toDelete]);

  useEffect(() => {
    if (localStorage.key(currentCity.name)) {
      setCurrentCityForescast(localStorage.key(currentCity.name));
      console.log('localstorage', localStorage.key(currentCity.name));
    } else {
      getHourlyData(currentCity.coord.lon, currentCity.coord.lat)
        .then(data => {
          console.log('fetch');
          data.name = currentCity.name;
          localStorage.setItem(currentCity.name, data);
          setCurrentCityForescast(data);
        })
        .catch(err => {console.log(err)});
    }
    
  }, [currentCity])

  return (
    <>
    <header className="header">
      <Link to="/">
        <div className="header__link">
          Home
        </div>
      </Link>
      <div className="header__search-container">
        <input
          type="text"
          id="search"
          className="header__search-input"
        />
        <button
          className="header__search-button"
          onClick={inputHandler}
        >
          Add
        </button>
      </div>
    </header>

    <main className="main">
      <Switch>
        <Route exact path="/">
          <CityCards
            cities={cities}
            setCurrentCity={setCurrentCity} setToDelete={setToDelete}
          />
        </Route>
         
        <Route path="/:cityName">
          <CityPage currentCityForecast={currentCityForecast} />
        </Route>
      </Switch>
    </main>
    </>
  );
}

export default App;
