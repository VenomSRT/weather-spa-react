const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';
const HOURLY_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const appId = 'd34e25f9138fc266e1b0343493f27b54';
const units = 'metric';
const lang = 'ru';

export const getWeatherData = (cityId) => {
  return fetch(`${BASE_URL}?q=${cityId}&units=${units}&lang=${lang}&appid=${appId}`)
    .then(response => response.json());
}

export const getHourlyData = (lon, lat) => {
  return fetch(`${HOURLY_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${appId}`)
   .then(response => response.json());
}