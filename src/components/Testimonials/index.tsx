import React from "react";
import Slider from "react-slick";

function Testimonials() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    
  };

  return (
    <div className="flex justify-between items-center pr-10 py-72">
      <div className="relative w-1/12 h-full flex items-center pr-2">
        <h3 className="transform kallistoBold -rotate-90  text-xl lg:text-4xl font-extrabold text-brand_blue  uppercase">
          <span className="text-[8rem] leading-tight absolute top-[-35px] left-[-84px]">T</span>estimonials
        </h3>
      </div>
      <div className="pt-20 lg:px-32  w-10/12 md:w-9/12">
      <div className="">
      <Slider {...settings}>
           <div className="flex px-6 justify-center">
           <div className=" bg-red-500  flex justify-center  ">
            <div className=" p-7 py-12 bg-black border border-red-500">
            <div className=" flex justify-center items-center">
            <img className="" src="/assets/images/testi1.jpg"/>
           </div>
            </div>
          </div>
            </div> 
            <div className="flex items-center  px-6 justify-center">
           <div className="  flex justify-center bg-red-400 ">
            <div className=" p-7 py-20 bg-black border border-red-500">
            <div className=" flex justify-center items-center">
            <img className="" src="/assets/images/testi2.jpg"/>
           </div>
            </div>
          </div>
            </div> 
            <div className="flex items-center  px-6 justify-center">
           <div className="  flex justify-center bg-red-400 ">
            <div className=" p-7 py-24 bg-black border border-red-500">
            <div className=" flex justify-center items-center">
            <img className="" src="/assets/images/testi3.jpg"/>
           </div>
            </div>
          </div>
            </div> 
            <div className="flex items-center  px-6 justify-center">
           <div className="  flex justify-center bg-red-400 ">
            <div className=" p-7 py-20 bg-black border border-red-500">
            <div className=" flex justify-center items-center">
            <img className="" src="/assets/images/testi4.jpg"/>
           </div>
            </div>
          </div>
            </div> 
        </Slider>
      </div>
      </div>
    </div>
  );
}

export default Testimonials;
