import React from "react";
import WeatherSearch from "./WeatherSearch";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherSearch defaultCity="New York" />
    </div>
  );
}

export default App;
