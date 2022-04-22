import React from "react";
import PrikazHighscore from "./PrikazHighscore";

const Igra1Highscore = ({ highscore, username }) => {
  const Osobni = highscore.pogadanjeBrojeva.filter(
    (element) => element.ime === username
  );
  return (
    <div>
      <PrikazHighscore parcijalniHighscore={highscore.pogadanjeBrojeva} />
      <PrikazHighscore parcijalniHighscore={Osobni} />
    </div>
  );
};

export default Igra1Highscore;
