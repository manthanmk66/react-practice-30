//Implement counter of countdown of 60 seconds


import React, { useEffect, useState } from "react";

const Seven = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => {
        clearTimeout(time);
      };
    }
  }, [time]);

  return (
    <div>
      <p>Time Left:{time}</p>
    </div>
  );
};

export default Seven;
