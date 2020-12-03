import React from 'react';
import { useHistory } from 'react-router-dom';
import './CityPage.scss';

export const CityPage = ({ currentCityForecast }) => {
  let history = useHistory();

  if(!currentCityForecast) {
    history.push('/');
  }

  return(
    currentCityForecast && (
      <div className="city">
        <h2 className="city__title">{currentCityForecast.name}</h2>
        <div className="city__weather-container">
          {currentCityForecast.hourly
            .filter((__, index) => index < 25 && index > 0 && !(index % 2))
            .map(data => (
              <div
                key={`${data.dt}`}
                className="city__hour-block"
              > 
                <div className="city__temp-outer-container">
                  <div className="city__temp-inner-container">
                    <div
                      className="city__temp"
                      style={{
                        bottom: `${0 + +data.temp.toFixed(0)}%`,
                        backgroundColor: `hsl(${180 + +data.temp.toFixed(0) * -3}, 100%, 80%)`
                      }}
                    >
                      {Math.round(data.temp)}
                    </div>
                  </div>
                </div>
                
                <div className="city__hour-title">
                  {new Date(data.dt * 1000).getHours()}:00
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  )
}

