import React from 'react';
import nikslogo from "../assets/nikslogo.png";

function Logo({width = "100px"}) {
  return (
    <div className="">
      <img src={nikslogo} alt="Nikita Logo" className="h-10 w-auto" />

    </div>
  )
}

export default Logo
