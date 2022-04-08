import React from "react";

const Igrica = ({
  brojPokusaja,
  zamisljeniBroj,
  promijeniStanje,
  feedback,
}) => {
  function provjeriBroj(e) {
    console.log(feedback);
    e.preventDefault();
    let uneseniBroj = e.target.childNodes[0].value;
    e.target.childNodes[0].value = "";
    if (uneseniBroj < zamisljeniBroj) {
      // zamisljeni broj je veći
      promijeniStanje("Veći");
    } else if (uneseniBroj > zamisljeniBroj) {
      // zamisljeni broj je manji
      promijeniStanje("Manji");
    } else {
      // jednaki su
      promijeniStanje("Pogodak");
    }
  }

  return (
    <div
      style={{
        backgroundColor: "lightblue",
      }}
    >
      <form onSubmit={provjeriBroj}>
        <input
          style={{
            width: "300px",
            textAlign: "center",
            padding: "5px 10px",
            fontWeight: "bold",
          }}
          type="number"
          id="unosBroja"
          placeholder="Pogodite broj koji sam zamislio (0 - 100)"
        ></input>
      </form>
      <div id="pokusaji">Broj pokusaja: {brojPokusaja}</div>
      <div
        style={{
          backgroundColor: "yellow",
        }}
        id="feedback"
      >
        {feedback}
      </div>
    </div>
  );
};

export default Igrica;
