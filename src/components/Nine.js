import React, { useState } from "react";

const Nine = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  const handleColour = () => {
    const newColour = backgroundColor === "yellow" ? "lightblue" : "yellow";
    setBackgroundColor(newColour);
  };

  return (
    <div>
      <button
        onClick={handleColour}
        style={{
          backgroundColor,
          width: "200px",
          height: "200px",
          cursor: "pointer",
        }}
      >
        Click here to Change Colour
      </button>
    </div>
  );
};

export default Nine;
