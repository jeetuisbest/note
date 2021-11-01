import React from "react";

function Footer(){
let date = new Date()
let year = date.getFullYear();
console.log(year)

return <div className='footer'>
    <p className='copyright'>copyright @{year}</p>

    </div>

}


export default Footer;