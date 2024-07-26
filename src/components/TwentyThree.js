import React, { useReducer, useState } from "react";

const TwentyThree = () => {
  function taskreducer(state, action) {
    switch (action.type) {
      case "ADD_TASK":
        return [
          ...state,
          { id: Date.now(), text: action.payload, completed: false },
        ];
      case "DELETE_TASK":
        return state.filter((task) => task.id !== action.payload);
      default:
        return state;
    }
  }

  const [tasks, dispatch] = useReducer(taskreducer, []);
  const [taskText, settaskText] = useState("");

  const addTask = () => {
    if (taskText.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: taskText });
    settaskText("");
  };

  const removeHandler = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div>
      <input
        className="border-2"
        type="text"
        placeholder="Enter Your Task"
        value={taskText} // Controlled input
        onChange={(e) => settaskText(e.target.value)}
      />
      <button
        className="ml-2 bg-orange-400 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={addTask}
      >
        Add Task
      </button>

      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            <span>
              {item.text}{" "}
              <button onClick={() => removeHandler(item.id)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwentyThree;
