import React, { useState } from "react";

const TwentyNine = () => {
  const [state, setstate] = useState({
    count: 0,
    text: "",
    isActive: true,
  });

  const IncrementCount = () => {
    setstate({ ...state, count: state.count + 1 });
  };

  const ChangeText = () => {
    setstate({ ...state, text: "updated Text" });
  };

  const toggleaActive = () => {
    setstate({ ...state, isActive: !state.isActive });
  };
  return (
    <div>
      <h1>Multiple State Example</h1>
      <p>Count:{state.count}</p>
      <p>Text:{state.text}</p>
      <p>Active:{state.isActive ? "Yes" : "No"}</p>

      <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={IncrementCount}
      >
        Increment
      </button>
      <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={ChangeText}
      >
        Change Text
      </button>
      <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={toggleaActive}
      >
        Toggle Active
      </button>
    </div>
  );
};

export default TwentyNine;
