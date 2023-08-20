import React from "react";
import logo from '../../imgs/my-weather.png';
import './Top.css'

function Top({city,country,img,Temperatura,situacao}){


    if(img){
    return(
        <header className="top-content">
             <img className="logo" src= {logo} ></img>
             <div className="info-top">
                <span className='local-header'>{city}-{country} </span>
                <img className="image-header" src= {`http://openweathermap.org/img/wn/${img}@2x.png`}></img>
                <span className="Temp-header">{Temperatura}°C</span>
                <span>{situacao}</span>
            </div>

        </header>
    )}
    

        return(
            <header className="top-content">
                <img className="logo" src= {logo} ></img>
                <div className="info-top">
                    <span className="Temp-header">Seu app climático</span>
                </div>
            </header>
        )

    }



export default Top;