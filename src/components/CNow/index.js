import React from "react";

import './Cnow.css'
function Cnow({Temperatura,situacao,img}){


    return(
        <section className="clima-agora">

          
            <img className="image" src= {`http://openweathermap.org/img/wn/${img}@2x.png`}></img>
            <span className="main-Temp">{Temperatura}°C</span>
            <span>{situacao}</span>
            
            
            

        </section>
        
    )
}

export default Cnow;