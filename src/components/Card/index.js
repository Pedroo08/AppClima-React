import React from "react";
import './Card.css'
function Card({Dia,temp}){

    return(
        <div className="card">
            <p>{Dia}</p>
            <p>{temp}</p>
        </div>
    )
}

export default Card;