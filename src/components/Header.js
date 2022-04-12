import React from "react";
import trokutLogo from "../images/trokut_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="navbar-brand" to="/">
        <img id="naslovnaSlika" src={trokutLogo} alt="trokut logo" />{" "}
      </Link>

      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: "fit-content" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Igra1" className="nav-link active">
                  Pogađanje Brojeva
                </Link>
              </li>
              <li classNameName="nav-item">
                <Link to="/highscores" className="nav-link ">
                  Highscores
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
