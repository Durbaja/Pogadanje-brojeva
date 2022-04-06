import React from "react";

const Highscore = ({ highscore }) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      Trenutni highscore: {highscore}
    </div>
  );
};

export default Highscore;
