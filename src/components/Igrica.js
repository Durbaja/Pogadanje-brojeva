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
    <div className="Igrica-style">
      <form onSubmit={provjeriBroj}>
        <input
          className="Input-style"
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
        {" "}
        {feedback}
      </div>
    </div>
  );
};

export default Igrica;
