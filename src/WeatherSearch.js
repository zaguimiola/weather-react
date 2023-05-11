import React, { useState } from "react";
import axios from "axios";

import "./WeatherSearch.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "13065ab195dea106282943aa8c990bea";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
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
  );

  if (loaded) {
    return (
      <div className="WeatherSearch">
        {form}
        <div className="weather-info">
          <div className="row">
            <div className="col-6">
              <h1>{city}</h1>
              <ul>
                <li>
                  <span></span>, <span>{weather.description}</span>
                </li>
                <li>
                  Humidity:
                  <span className="humidity-wind">
                    <strong> {weather.humidity}</strong>%{" "}
                  </span>
                  , Wind:
                  <span className="humidity-wind">
                    <strong> {Math.round(weather.wind)}</strong>
                    <span> km/h</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-8 d-flex justify-content-end">
              <div className="temperature-container">
                <img src={weather.icon} alt={weather.description} />
              </div>
              <div className="temperature-unit">
                <span className="temperature">
                  {Math.round(weather.temperature)}
                </span>
                <span className="unit">ºC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="WeatherSearch">{form}</div>;
  }
}
