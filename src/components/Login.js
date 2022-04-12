import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/solid.js";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <form id="loginForma">
        <div className="form-outline mb-4">
          <input
            placeholder="Username..."
            type="text"
            id="form2Example1"
            className="form-control"
          />
          {/* <label className="form-label" htmlForm="form2Example1">
            Username
          </label> */}
        </div>

        <button
          type="button"
          className="btn btn-primary btn-block mb-4 form-control"
        >
          Login
        </button>

        {/* Register button */}
        <div className="text-center">
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
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
