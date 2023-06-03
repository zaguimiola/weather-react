import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "13065ab195dea106282943aa8c990bea";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      {" "}
      <div className="row">
        <div class="col-2">
          <div class="forecast-time">Thu</div>
          <img
            class="icon-forecast"
            src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png"
            width="60"
          />
          <div class="forecast-temperature">
            <span class="forecast-temperature-max">11º</span>
            <span class="forecast-temperature-min">5º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
