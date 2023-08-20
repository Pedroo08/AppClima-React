import "./App.css";

import Painel from "./components/Painel";
import Top from "./components/Top";
import axios from "axios";

import React, { useEffect, useState } from "react";

function App() {
  const key = "b65127f2cba251302eebfb3c3b86fe09";
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  


  let getWeather = async (lat, long) => {
    let res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=pt_br`
    );
    setWeather(res.data);
  };

  if (location == false) {
    return (
      <main className="App">
        <Top />
        <Painel className="secundary" />
      </main>
    );
  } else if (weather == false) {
    return (
      <main className="App-loading">
        <span className="loanding">Carrgando...</span>
      </main>
    );
  }

  return (
    <main className="App">
      <Top
        city={weather.name}
        country={weather.sys.country}
        img={weather.weather[0].icon}
        Temperatura={weather.main.temp}
      />
      <Painel className="secundary" />
    </main>
  );
}

export default App;
