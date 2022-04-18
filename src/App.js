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

export default class App extends Component {
  constructor(props) {
    super(props);
    const stanje = JSON.parse(localStorage.getItem("stanje"));
    this.state = stanje
      ? {
          highscore: stanje.highscore,
          brojPokusaja: 0,
          feedback: "",
          username: "",
          inputName: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        }
      : {
          highscore: { pogadanjeBrojeva: [], igraBoja: [] },
          brojPokusaja: 0,
          feedback: "",
          username: "",
          inputName: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        };
  }

  handleLogin = (username = "", inputName = "") => {
    this.setState((state) => {
      return { username: username, inputName: inputName };
    });
  };

  promijeniStanje = (feedback) => {
    let novoStanje;
    if (feedback === "Pogodak") {
      let noviBroj = Math.floor(Math.random() * 101);
      let stariHighscore = this.state.highscore.pogadanjeBrojeva;
      let rezultatKojegUnosimo = this.state.brojPokusaja + 1;
      let userObject = {
        ime: this.state.username,
        rezultat: rezultatKojegUnosimo,
      };

      let index = stariHighscore.findIndex((element) => {
        return element.rezultat >= rezultatKojegUnosimo;
      });
      if (index === -1) index = stariHighscore.length;
      stariHighscore.splice(index, 0, userObject);

      novoStanje = {
        ...this.state,
        highscore: {
          ...this.state.highscore,
          pogadanjeBrojeva: [...this.state.highscore.pogadanjeBrojeva],
        },
        brojPokusaja: 0,
        zamisljeniBroj: noviBroj,
        feedback:
          "Pobijedili ste. Pogodili ste iz " +
          (this.state.brojPokusaja + 1) +
          ". puta. Zaigrajte ponovno.",
      };
    } else if (feedback === "Manji") {
      novoStanje = {
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "Zamišljeni broj je manji od unesenog!",
      };
    } else if (feedback === "Veći") {
      novoStanje = {
        ...this.state,
        brojPokusaja: this.state.brojPokusaja + 1,
        feedback: "Zamišljeni broj je veći od unesenog!",
      };
    }
    localStorage.setItem("stanje", JSON.stringify(novoStanje));
    this.setState(novoStanje);
  };

  render() {
    return (
      <div className="Main-div">
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
                  promijeniStanje={(feedback) => this.promijeniStanje(feedback)}
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
    );
  }
}
