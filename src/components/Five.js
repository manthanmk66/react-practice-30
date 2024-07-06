// Implement a Basic Toggle Button

import React, { useState } from "react";

const Five = () => {
  const [isToggledIn, setIsToggledIn] = useState(true);
  const handlechange = () => {
    setIsToggledIn(!isToggledIn);
  };
  return (
    <div>
      <input onChange={handlechange} type="checkbox" />
      <div><p> {isToggledIn ?"ON":"Off"}</p></div>
    </div>
  );
};

export default Five;
