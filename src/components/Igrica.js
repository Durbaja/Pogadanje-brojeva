import React from "react";

const Igrica = () => {
  const zamisljeniBroj = Math.floor(Math.random() * 101);
  let brojPokusaja = 0;

  function provjeriBroj(e) {
    e.preventDefault();

    let feedback = document.getElementById("feedback");
    let pokusaji = document.getElementById("pokusaji");

    if (document.getElementById("unosBroja").value > zamisljeniBroj) {
      brojPokusaja++;
      feedback.innerHTML = "Vas broj je prevelik!";
      pokusaji.innerHTML = "Broj pokusaja: " + brojPokusaja;
    } else if (document.getElementById("unosBroja").value < zamisljeniBroj) {
      brojPokusaja++;
      feedback.innerHTML = "Vas broj je premal!";
      pokusaji.innerHTML = "Broj pokusaja: " + brojPokusaja;
    } else {
      feedback.innerHTML =
        "Cestitamo, pogodili ste borj iz " + brojPokusaja + "pokusaja";
      pokusaji.innerHTML = "";
      feedback.style.color = "red";
    }
  }

  return (
    <div>
      <form onSubmit={provjeriBroj}>
        <input
          style={{ width: "250px", textAlign: "center" }}
          type="number"
          id="unosBroja"
          placeholder="Pogodite broj koji sam zamislio (0 - 100)"
        ></input>
      </form>
      <div id="pokusaji">Broj pokusaja: 0</div>
      <div id="feedback"></div>
    </div>
  );
};

export default Igrica;
