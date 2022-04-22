import React, { Component } from "react";
import Highscore from "./components/Highscore/Index";
import IgraPogadanjeBrojeva from "./components/IgraPogadanjeBrojeva";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Igra1Highscore from "./components/Highscore/Igra1";
import izracunaj from "./services/IzracunajIgru1";
// import VjezbamoHookice from "./components/VjezbamoHookice";
// import ProbaKonteksta from "./containers/ProbaKonteksta";

import { MojaTemaContext } from "./services/Konteksti";

export default class App extends Component {
  constructor(props) {
    super(props);
    const stanje = JSON.parse(localStorage.getItem("stanje"));
    const inicijalnoStanje = {
      highscore: stanje
        ? stanje.highscore
        : { pogadanjeBrojeva: [], igraBoja: [] },
      brojPokusaja: 0,
      feedback: "",
      username: "",
      inputName: "",
      zamisljeniBroj: Math.floor(Math.random() * 101),
    };
    this.state = inicijalnoStanje;
  }

  // setting defaultProps of Proizvod props to Čekić in case it's not defined  within the code
  // static defaultProps = {
  //   proizvod: "Čekić",
  // };

  handleLogin = (username = "", inputName = "") => {
    this.setState((state) => {
      return { username: username, inputName: inputName };
    });
  };

  promijeniStanje = (feedback) => {
    let novoStanje = izracunaj(feedback, this.state);
    localStorage.setItem("stanje", JSON.stringify(novoStanje));
    this.setState(novoStanje);
  };

  render() {
    return (
      <MojaTemaContext.Provider
        value={{ Pozdrav: "Dobar dan", odzdrav: "Laku noć" }}
      >
        <div className="Main-div">
          {/* <VjezbamoHookice />
          <ProbaKonteksta /> */}
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    inputName={this.state.inputName}
                    handleLogin={(username, inputName) =>
                      this.handleLogin(username, inputName)
                    }
                  />
                }
              />
              <Route
                path="/igra1"
                element={
                  <IgraPogadanjeBrojeva
                    brojPokusaja={this.state.brojPokusaja}
                    zamisljeniBroj={this.state.zamisljeniBroj}
                    username={this.state.username}
                    feedback={this.state.feedback}
                    promijeniStanje={(feedback) =>
                      this.promijeniStanje(feedback)
                    }
                  />
                }
              />
              <Route
                path="/highscores"
                element={<Highscore highscore={this.state.highscore} />}
              >
                <Route
                  path="igra1"
                  element={
                    <Igra1Highscore
                      highscore={this.state.highscore}
                      username={this.state.username}
                    />
                  }
                />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </MojaTemaContext.Provider>
    );
  }
}

export { MojaTemaContext };
