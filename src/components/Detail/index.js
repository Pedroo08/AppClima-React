import React from "react";
import './Detail.css'
import gotaImg from '../../imgs/gota.png';
import ventoImg from '../../imgs/vento.png';
import medidorImg from '../../imgs/termometro.png'
function Detail({humidity,pressure,speed}){
    
    return(
        <section className="Detail">

            <div className="points">
            Humidade:  
            <img  className= 'icon' src={gotaImg}></img>
             <span>{humidity}%</span>
            </div>

            <div className="points">
            Pressão: 
            <img   className= 'icon' src={medidorImg}></img>
            <span>{pressure}hPa</span>
            </div>

            <div className="points">
                Vento: 
                <img   className= 'icon' src={ventoImg}></img>
                <span>{speed}m/s</span>
            </div>
            
        </section>

    )

}

export default Detail;