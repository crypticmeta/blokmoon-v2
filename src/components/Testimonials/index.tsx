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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="md:flex md:justify-between items-center md:pr-10 lg:h-screen">
      <div className="hidden  relative w-1/12 h-full md:flex items-center pr-2">
        <h3 className="transform kallistoBold -rotate-90  text-xl lg:text-4xl font-extrabold text-brand_red  uppercase">
          <span className="text-[8rem] leading-tight absolute top-[-35px] left-[-84px]">
            T
          </span>
          estimonials
        </h3>
      </div>
      <div className="flex  md:hidden">
      <h3 className=" kallistoBold text-center w-full  text-xl lg:text-4xl font-extrabold text-brand_red  uppercase">
          <span className=" text-6xl ">
            T
          </span>
          estimonials
        </h3>
      </div>
      <div className=" px-10 lg:px-32 w-full   lg:w-10/12 md:w-9/12">
        <div className="">
          <Slider {...settings}>
            <div className="flex p-6 justify-center h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex p-6 justify-center h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi2.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex p-6 justify-center h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi3.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="flex p-6 justify-center h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi4.jpg"
                  />
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
