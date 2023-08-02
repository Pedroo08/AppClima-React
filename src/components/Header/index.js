
import React, { useState } from 'react';

function Header({city,country}){

    const [time,setTime] = useState(new Date())
    const [location, setLocation] = useState(false);

    return(
        <header>
            <div className='local'>{city},{country} </div>
            

        </header>
    )
}

export default Header;