import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
        </div>{" "}
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
        </div>{" "}
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
        </div>{" "}
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
        </div>{" "}
        <div class="col-2">
          <div class="WeatherForecast-day">Thu</div>
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
