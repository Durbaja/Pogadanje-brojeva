import React, { useState, useEffect, useContext } from "react";
import { MojaTemaContext } from "../services/Konteksti";

const VjezbamoHookice = () => {
  const [brojac, setBrojac] = useState(0);
  const [brojacUnazad, setBrojacUnazad] = useState(0);

  const tema = useContext(MojaTemaContext);

  /*
  // najjednostavniji UseEffect, za bilo koju promjenu stanja se aktivira
  useEffect(() => {
    console.log(brojac);
  });

  // malo slozeniji, aktivira se samo za promjenu stanja "brojac"
  useEffect(() => {
    console.log("Promjenio se i brojač");
  }, [brojac]);
  */

  // Najslozeniji oblik UseEffecta, cleanUp funkcija se poziva prije promejnee stanja, pandan shouldComponentUpdate
  useEffect(() => {
    console.log(`Promjenio se i brojač, te sada iznosi ${brojac}`);
    return function cleanUp() {
      console.log(
        "Pozivam se prije promjene stanja! Evo ti dokaz. Trenutno stanje je: " +
          brojac
      );
    };
  }, [brojac]);

  const promijeniStanje = () => {
    setBrojac(brojac + 1);
    setBrojacUnazad(brojacUnazad - 1);
  };

  return (
    <>
      {MojaTemaContext.odzdrav}
      <h1>Brojač: {brojac}</h1>
      <h1>Brojač Unazad: {brojacUnazad}</h1>
      <button onClick={promijeniStanje}>Update brojač!</button>
      <button onClick={() => setBrojacUnazad(brojacUnazad - 1)}>
        Samo unazad!
      </button>
    </>
  );
};

export default VjezbamoHookice;
