import React, { useState } from "react";

const Eighteen = () => {
  const [colour, setColour] = useState("#000000");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      Eighteen
      <input
        type="color"
        onChange={(e) => {
          setColour(e.target.value);
        }}
      />
      <div
        style={{
          height: "100px",
          width: "100px",
          background: colour,
          marginTop: "10px",
        }}
      ></div>
    </div>
  );
};

export default Eighteen;
