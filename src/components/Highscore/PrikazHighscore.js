import React, { useState } from "react";

const PrikazHighscore = ({ parcijalniHighscore }) => {
  const [input, setInput] = useState("najbolji");
  return (
    <div>
      <select value={input} onChange={(e) => setInput(e.target.value)}>
        <option value="najbolji">Najbolji rezultati</option>
        <option value="najgori">Najgori rezultati</option>
      </select>

      <ul>{input}</ul>
    </div>
  );
};

export default PrikazHighscore;
