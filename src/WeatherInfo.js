import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              , <span>{props.data.description}</span>
            </li>
            <li>
              Humidity:
              <span className="humidity-wind">
                <strong> {props.data.humidity}</strong>%{" "}
              </span>
              , Wind:
              <span className="humidity-wind">
                <strong> {Math.round(props.data.wind)}</strong>
                <span> km/h</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8 d-flex justify-content-end">
          <div className="temperature-container">
            <img src={props.data.icon} alt={props.data.description} />
          </div>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
    </div>
  );
}
