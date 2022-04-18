import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Highscore.css";

const Highscore = ({ highscore }) => {
  const [cijeliHighscore, setCijeliHighscore] = useState(highscore);

  // START OF Nevezano za naš projekt - za proučit malo
  const [nesto, setNesto] = useState("Nesto pise ");

  const callbackFunction = () => {
    console.log(`Novo stanje je: ${nesto}`);
    return function () {
      console.log(`Odradjujem se prije novog rendera`);
    };
  };
  // END OF Nevezano za naš projekt - za proučit malo

  useEffect(callbackFunction, [nesto]);

  return (
    <div>
      {nesto}
      <button onClick={() => setNesto(nesto + "A")}> Promijeni stanje </button>
      <nav className="nav table-links">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="/highscores"
        >
          Home Highscore
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="./igra1"
        >
          Pogađanje Brojeva
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "nav-link active" : "nav-link";
          }}
          to="./igra2"
        >
          Igra Boja
        </NavLink>
        <NavLink to="./igra1">Statistika za igru 1</NavLink>{" "}
        <NavLink to="/highscores">Povratak na highscore</NavLink>
        <Outlet />{" "}
      </nav>
    </div>
  );
};

export default Highscore;
