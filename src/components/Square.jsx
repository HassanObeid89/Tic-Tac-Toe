import React from "react";

export default function Square({ handleClick, value }) {
  return (
    <button onClick={handleClick} className="cell">
      {value}
    </button>
  );
}
