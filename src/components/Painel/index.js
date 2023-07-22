import React from "react";
import './painel.css'
import Card from "../Card";
function Painel({object}){

    return(
        <section className="Painel">
            <Card Dia="25/Jun" temp='20°C'/>
            <Card Dia="25/Jun" temp='20°C'/>
            <Card Dia="25/Jun" temp='20°C'/>

            <Card Dia="25/Jun" temp='20°C'/>
            <Card Dia="25/Jun" temp='20°C'/>
            <Card Dia="25/Jun" temp='20°C'/>
           
        </section>
    )
}

export default Painel;