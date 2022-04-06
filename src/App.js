import React, { Component } from "react";
import Highscore from "./components/Highscore";
import Igrica from "./components/Igrica";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highscore: 100,
      zamisljeniBroj: 50,
    };
    setInterval(() => {
      this.setState({ ...this.state, highscore: this.state.highscore - 1 });
    }, 2500);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Igrica />
        <Highscore highscore={this.state.highscore} />
      </div>
    );
  }
}
