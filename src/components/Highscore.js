import React from "react";

const Highscore = ({ highscore }) => {
  return (
    <ul style={{ backgroundColor: "red" }}>
      {highscore.map((element, index) => {
        return <li key={index}>Trenutni highscore je: {element}</li>;
      })}
    </ul>
  );
};

export default Highscore;
