// Fetch Data from the Random API

import React, { useEffect, useState } from "react";

const Six = () => {
  const [img, setImg] = useState("");

  const Fetchingdata = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/image/random");
    const responce = await data.json();
    const { message } = responce;
    setImg(message);
    console.log(img);
  };

  useEffect(() => {
    Fetchingdata();
  }, []);

  return <div>{img ? <img src={img} /> : <p>Loading...</p>}</div>;
};

export default Six;
