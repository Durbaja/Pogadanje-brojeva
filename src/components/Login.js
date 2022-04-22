import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/solid.js";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, inputName }) => {
  const handleInput = (e) => {
    handleLogin("", e.target.value);
  };

  const handleSetUsername = () => {
    handleLogin(inputName);
  };

  return (
    <div>
      <form id="loginForma">
        <div className="form-outline mb-4">
          <input
            placeholder="Username..."
            type="text"
            id="form2Example1"
            value={inputName}
            onChange={(e) => handleInput(e)}
            className="form-control"
          />
        </div>

        <Link
          to="/igra1"
          onClick={() => handleSetUsername()}
          type="button"
          className="btn btn-primary btn-block mb-4 form-control"
        >
          {" "}
          Login
        </Link>

        {/* Social media buttons */}
        <div className="text-center">
          <button type="button" className="btn btn-link btn-floating mx-1">
            {" "}
            <a target="_blank" rel="noreferrer" href="http://www.google.com">
              {" "}
              <i className="fab fa-facebook-f"> </i>
            </a>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
