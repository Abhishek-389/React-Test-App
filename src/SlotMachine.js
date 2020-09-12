import React from "react";

function SlotMachine({ x, y, z }) {
  if (x === y && y === z) {
    return (
      <div className="slotContainer">
        <div className="emojis">
          <span>
            {x}
            {y}
            {z}
          </span>
        </div>
        <h3>This is a match</h3>
      </div>
    );
  } else {
    return (
      <div className="slotContainer">
        <div className="emojis">
          <span>
            {x}
            {y}
            {z}
          </span>
        </div>
        <h3>This is not a match</h3>
      </div>
    );
  }
}

export default SlotMachine;
