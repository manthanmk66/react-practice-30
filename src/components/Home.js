import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "HOME";
  });
  return <div>This is Home Page</div>;
};

export default Home;
