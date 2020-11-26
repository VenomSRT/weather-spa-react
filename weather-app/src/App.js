import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { CityCards } from "./components/CityCards/CityCards";
import { CityPage } from "./components/CityPage/CityPage";
import { getWeatherData, getGroupWeatherData, getHourlyData } from "./api/api";
import './App.scss';

function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityForecast, setCurrentCityForescast] = useState({})
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const storageCities = JSON.parse(localStorage.getItem('cities'));
    
    if (storageCities && storageCities.length) {
      getGroupWeatherData(storageCities.map(city => city.id).join(','))
        .then(data => {
          setCities(data.list);
        })
    }
  }, [])

  useEffect(() => {
    if(currentCity) {
      if (localStorage.key(currentCity.name)) {
        setCurrentCityForescast(localStorage.key(currentCity.name));
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
    }
  }, [currentCity])

  function inputHandler() {
    const inputValue = document.querySelector('#search').value.trim();
    
    getWeatherData(inputValue)
      .then(data => {
        if (!cities.some(city => city.id === data.id)) {
          setCities([...cities, data]);
          localStorage.setItem(
            'cities',
            JSON.stringify([...cities, data])
          )
        }
      }).catch(err => {
        alert('Something went wrong (look details in console)');
          console.log(err);
      });
  }

  function deleteCity(cityId) {
    setCities(cities.filter(city => city.id !== cityId));
    localStorage.setItem(
      'cities',
      JSON.stringify(cities.filter(city => city.id !== cityId))
    )
  }

  function renewData(cityId) {

  }

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
              setCurrentCity={setCurrentCity} deleteCity={deleteCity}
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
