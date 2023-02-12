import React from 'react'
import Rive from "./Rive"
function Hero
() {
  return (
    <div className="w-full flex lg:h-80vh text-white justify-between custom-container flex-wrap">
      <div className="w-full lg:w-6/12 h-full flex items-end">
        <div className='gradient-text'>
          <p className="text-3xl lg:text-7xl font-extrabold uppercase">
            Imagine
          </p>
          <p className="text-3xl lg:text-7xl font-extrabold uppercase">
            Innovate
          </p>
          <p className="text-3xl lg:text-7xl font-extrabold uppercase">
            Invent
          </p>
        </div>
      </div>
      <div className="w-full lg:w-6/12 flex justify-end">
        <Rive />
      </div>
    </div>
  );
}

export default Hero
