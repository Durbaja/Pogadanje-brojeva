import React, { Component } from "react";
import { MojaTemaContext } from "../services/Konteksti";

// jedan način
/* export default class ProbaKonteksta extends Component {
  render() {
    return (
      <MojaTemaContext.Consumer>{(value) => value}</MojaTemaContext.Consumer>
    );
  }
} */

// drugi način
export default class ProbaKonteksta extends Component {
  static contextType = MojaTemaContext;
  render() {
    return <div> ProbaKonteksta {this.context.pozdrav}</div>;
  }
}
