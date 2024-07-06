import React, { useState } from "react";

const Two = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Input here"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>The input is {input}</div>
    </div>
  );
};

export default Two;
