
import './App.css';

import Cnow from './components/CNow';
import Painel from './components/Painel';
import Detail from './components/Detail';
import Header from './components/Header'
import axios from 'axios';

import React, { useEffect, useState } from 'react';


function App() {
  const  key = 'b65127f2cba251302eebfb3c3b86fe09';
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false)

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(
    	(position) => {

            console.log(position.coords.latitude,position.coords.longitude);
            getWeather(position.coords.latitude, position.coords.longitude)
            setLocation(true)
            
        }
    )
  }, [])


  let getWeather = async (lat, long) => {
  
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=pt_br`)
    setWeather(res.data);
   }

  //console.log(weather);


 
 if(location == false){

    alert("Você precisa ativar a localização")
    return(
      <main>Você precisa ativar a localização</main>
  )}

  else if (weather == false){
      return <main>Carregando...</main>
  }
  else{
    return (
   
      <main className="App">
       
          <section className='principal'>

              <header>
                  <div className='local'>{weather.name},{weather.sys.country}</div>
                  <div className='time'> </div>
              </header>
              <Cnow Temperatura={weather.main.temp} situacao= {weather.weather[0].description.toUpperCase()} img={weather.weather[0].icon}/>
              <Detail humidity={weather.main.humidity} pressure={weather.main.pressure} 
              speed={weather.wind.speed}/>
          </section>
          
      </main>
    );}
}

export default App;
