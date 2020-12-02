import React from "react";
import logo from "./controller.svg";
import "./App.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Stock Prices</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to the Stock Market Page. You may click on stocks to view all
        the stocks or search to view the latest 100 days of activity
      </p>
    </div>
  );
}
