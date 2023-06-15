import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      This project was coded by <strong> Marta Torres</strong> and is{" "}
      <a
        href="https://github.com/zaguimiola/weather-react"
        rel="noopener noreferrer"
        target="_blank"
      >
        open-sourced on Github
      </a>{" "}
      and{" "}
      <a
        href="https://profound-babka-a6bada.netlify.app/"
        rel="noopener noreferrer"
        target="_blank"
      >
        hosted on Netlify
      </a>
    </footer>
  );
}
