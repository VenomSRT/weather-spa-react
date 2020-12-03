import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { CityCards } from "./components/CityCards/CityCards";
import { CityPage } from "./components/CityPage/CityPage";
import { getWeatherData, getGroupWeatherData, getHourlyData } from "./api/api";
import './App.scss';

function App() {
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityForecast, setCurrentCityForescast] = useState(null)
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const storageCities = JSON.parse(localStorage.getItem('cities'));

    if (storageCities && storageCities.length) {
      getGroupWeatherData(storageCities.map(city => city.id).join(','))
        .then(data => {
          setCities(data.list);
          writeToStorage(data.list);
        }) 
    }
  }, [])

  useEffect(() => {
    console.log(currentCity);
    if(currentCity) {
      getHourlyData(currentCity.coord.lon, currentCity.coord.lat)
        .then(data => {
          data.name = currentCity.name;
          setCurrentCityForescast(data);
        })
        .catch(err => {console.log(err)});
    }
  }, [currentCity])

  function writeToStorage(cities) {
    localStorage.setItem(
      'cities',
      JSON.stringify(cities)
    )
  }

  function inputHandler() {
    let inputField = document.querySelector('#search');
    const inputValue = inputField.value.trim();

    if (cities.every(city => city.name !== inputValue)) {
      getWeatherData(inputValue)
        .then(data => {
          if (data.cod === 200 && (!cities.length || cities.every(city => city.id !== data.id))) {
            setCities([...cities, data]);
            writeToStorage([...cities, data]);
          } else {
            console.log(cities);
            alert('Wrong input');
          }
        })

      inputField.value = '';
    }
  }

  function deleteCity(cityId) {
    setCities(cities.filter(city => city.id !== cityId));
    writeToStorage(cities.filter(city => city.id !== cityId));
  }

  function renewData(cityId) {
    console.log('renew');
    getGroupWeatherData(cityId)
      .then(data => {
        console.log(data.list);
        cities.forEach((city, index) => {
          console.log(city.id, data.list[0].id);
          if (city.id === data.list[0].id) {
            const newCities = [...cities];
            newCities.splice(index, 1, data.list[0])
            console.log(newCities);
            setCities(newCities)
            writeToStorage(newCities);
          }
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="main-container">
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
            className="header__button"
            onClick={inputHandler}
          >
            Add
          </button>

          <button
            className="header__button"
            onClick={() => {
              localStorage.clear();
              setCities([]);
            }}
          >
            Clear All
          </button>
        </div>
      </header>

      <main className="main">
        <Switch>
          <Route exact path="/">
            <CityCards
              cities={cities}
              setCurrentCity={setCurrentCity}
              deleteCity={deleteCity}
              renewData={renewData}
            />
          </Route>
          
          <Route path="/:cityName">
            <CityPage currentCityForecast={currentCityForecast} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
