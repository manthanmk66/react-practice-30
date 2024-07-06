import React, { useState } from "react";

const One = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <spam>{count}</spam>
      <button
        onClick={() => {
          setcount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default One;
