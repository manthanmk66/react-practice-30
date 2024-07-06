import React, { useState } from "react";

const Eight = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() !== "") {
      console.log(list);
      setList([...list, input]);
      setInput("");
    }
  };

  const handledelt = (index) => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Input Your Todo Here"
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>
      <div>
        <ul>
          {list.map((e, index) => (
            <li key={index}>
              {e}:<button onClick={handledelt}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Eight;
