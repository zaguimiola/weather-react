import React from "react";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function icon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return icon;
  }

  return (
    <div className="WeatherForecastDay">
      <div className="day">{day()}</div>
      <img className="icon" src={icon()} width="63" alt="" />
      <div className="temperature">
        <span className="temperature-max">{maxTemperature()}º</span>
        <span className="temperature-min">{minTemperature()}º</span>
      </div>
    </div>
  );
}
