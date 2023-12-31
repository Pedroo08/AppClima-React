import "./painel.css";

import Header from "../Header";
import Cnow from "../CNow";
import Detail from "../Detail";
import React, { useState } from "react";
import axios from "axios";

function Painel({ object }) {
  const key = "b65127f2cba251302eebfb3c3b86fe09";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(false);

  const handleChange = (e) => {
    setCity(e.target.value);
  };


  let getWeather = async () => {
    
    try {

      if(city.toLowerCase() =='salvador'){
        console.log('entrou aqui')
        let res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=-12.98&lon=-38.48&appid=b65127f2cba251302eebfb3c3b86fe09&units=metric&lang=pt_br`
        );
        setWeather(res.data);
        return
      }

      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`
      );
      setWeather(res.data);

    } catch(erro) {
      console.log(erro)
      alert("Erro. Verifique a se o nome estar escrito de maneira correto");
    }
  };
  
 
  if (!weather) {
    return (
      <section className="Painel">
        <div className="buscar">
          <input onChange={handleChange}></input>
          <button className="btn" onClick={getWeather}>
            Pesquisar
          </button>
        </div>
        <p>Pesquise uma cidade</p>
      </section>
    );
  } else {
    return (
      <section className="Painel">
        <div className="buscar">
          <input onChange={handleChange}></input>
          <button className="btn" onClick={getWeather}>
            Pesquisar
          </button>
        </div>

        <Header city={weather.name} country={weather.sys.country} />
        <Cnow
          Temperatura={weather.main.temp}
          situacao={weather.weather[0].description.toUpperCase()}
          img={weather.weather[0].icon}
        />
        <Detail
          humidity={weather.main.humidity}
          pressure={weather.main.pressure}
          speed={weather.wind.speed}
        />
      </section>
    );
  }
}

export default Painel;
