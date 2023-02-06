import React from 'react'
import Rive from "./Rive"
function Hero
() {
  return (
    <div className="w-full flex min-h-screen text-white items-baseline justify-between custom-container flex-wrap">
      <div className="w-full lg:w-6/12">
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
      <div className="w-full lg:w-6/12 flex justify-end bg-red-00">
        <Rive />
      </div>
    </div>
  );
}

export default Hero
