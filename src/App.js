import React, { Component } from "react";
import Highscore from "./components/Highscore";
import Igrica from "./components/Igrica";
import Clock from "./components/Clock";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

export default class App extends Component {
  constructor(props) {
    super(props);
    const stanje = JSON.parse(localStorage.getItem("stanje"));
    this.state = stanje
      ? {
          ...stanje,
          brojPokusaja: 0,
          feedback: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        }
      : {
          highscore: [],
          brojPokusaja: 0,
          feedback: "",
          zamisljeniBroj: Math.floor(Math.random() * 101),
        };
  }

  promijeniStanje = (feedback) => {
    let novoStanje;
    if (feedback === "Pogodak") {
      let noviBroj = Math.floor(Math.random() * 101);
      novoStanje = {
        ...this.state,
        highscore: [...this.state.highscore, this.state.brojPokusaja + 1].sort(
          (a, b) => a - b
        ),
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
            <Route path="/" element={<Login />} />
            <Route
              path="/igra1"
              element={
                <Igrica
                  brojPokusaja={this.state.brojPokusaja}
                  zamisljeniBroj={this.state.zamisljeniBroj}
                  feedback={this.state.feedback}
                  promijeniStanje={(feedback) => this.promijeniStanje(feedback)}
                />
              }
            />
            <Route
              path="/highscores"
              element={<Highscore highscore={this.state.highscore} />}
            />
          </Routes>
          <Clock />
        </main>
        <Footer />
      </div>
    );
  }
}
