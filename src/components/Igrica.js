import React from "react";

const Igrica = ({ brojPokusaja, zamisljeniBroj, promijeniStanje }) => {
  function provjeriBroj(e) {
    e.preventDefault();
    let uneseniBroj = e.target.childNodes[0].value;
    promijeniStanje();
  }

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <form onSubmit={provjeriBroj}>
        <input
          style={{
            width: "300px",
            textAlign: "center",
            marginBottom: "10px",
            padding: "5px 10px",
            fontWeight: "bold",
          }}
          type="number"
          id="unosBroja"
          placeholder="Pogodite broj koji sam zamislio (0 - 100)"
        ></input>
      </form>
      <div id="pokusaji">Broj pokusaja: {brojPokusaja}</div>
      <div style={{ marginBottom: "10px" }} id="feedback"></div>
    </div>
  );
};

export default Igrica;
