
import React, { useState } from 'react';

function Header({city,country}){

    const [time,setTime] = useState(new Date())
    const [location, setLocation] = useState(false);

    return(
        <span>
            <div className='local'>{city},{country} </div>
            

        </span>
    )
}

export default Header;