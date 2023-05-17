import React, { useState } from "react";
import axios from "axios";

import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: ``,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "13065ab195dea106282943aa8c990bea";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control search-input"
                id="city-input"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="search"
              />
            </div>
          </div>
        </form>
        <div className="weather-info">
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  <span>{weatherData.date}</span>,{" "}
                  <span>{weatherData.description}</span>
                </li>
                <li>
                  Humidity:
                  <span className="humidity-wind">
                    <strong> {weatherData.humidity}</strong>%{" "}
                  </span>
                  , Wind:
                  <span className="humidity-wind">
                    <strong> {Math.round(weatherData.wind)}</strong>
                    <span> km/h</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 d-flex justify-content-end">
              <div className="temperature-container">
                <img src={weatherData.icon} alt={weatherData.description} />
              </div>
              <div className="temperature-unit">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">ºC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
