import React, { Component } from "react";
import Highscore from "./components/Highscore";
import Igrica from "./components/Igrica";
import Clock from "./components/Clock";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscore: 100,
      brojPokusaja: 0,
      feedback: "",
      zamisljeniBroj: Math.floor(Math.random() * 101),
    };
  }

  promijeniStanje = () => {
    this.setState({ ...this.state, brojPokusaja: this.state.brojPokusaja + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Igrica
          brojPokusaja={this.state.brojPokusaja}
          zamisljeniBroj={this.state.zamisljeniBroj}
          promijeniStanje={() => this.promijeniStanje()}
        />
        <Highscore />
        {/* <Clock /> */}
      </div>
    );
  }
}
