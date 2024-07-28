import React, { useEffect, useState } from "react";
import axios from "axios";

const TwentyEight = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke"
        );
        setData1(response.data);
      } catch (error) {
        console.log(error, "Something Went Wrong");
      }
    };

    fetchData1();
  }, []);

  useEffect(() => {
    const fetchData2 = async () => {
      try {
        const response = await axios.get(
          "https://official-joke-api.appspot.com/random_joke"
        );
        setData2(response.data);
      } catch (error) {
        console.log(error, "Something Went Wrong");
      }
    };

    fetchData2();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Joke from First API Call :</h1>
      {data1 && (
        <div>
          <p>{data1.setup}</p>
          <p>{data1.punchline}</p>
        </div>
      )}
      <h1 className="text-3xl">Joke from Second API Call:</h1>
      {data2 && (
        <div>
          <p>{data2.setup}</p>
          <p>{data2.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default TwentyEight;
