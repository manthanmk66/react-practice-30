import React, { useEffect, useState } from "react";

const Fifteen = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=dc7dbb20e7786db0257b56951c578ec3`
          );
          const data = await response.json();
          setWeather(data);
          setCity(data.name);
        } catch (error) {
          console.error("Error fetching the weather data", error);
        }
      });
    }
  }, []);

  return (
    <div>
      {weather ? (
        <p>
          Today's Weather in your city <b>{city}</b> is
          <b> {weather.weather[0].description}</b> with a temperature of{" "}
          <b>{(weather.main.temp - 273.15).toFixed(2)}°C</b>
        </p>
      ) : (
        "Loading...."
      )}
    </div>
  );
};

export default Fifteen;
