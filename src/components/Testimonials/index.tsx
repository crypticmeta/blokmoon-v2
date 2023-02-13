import React from "react";
import Slider from "react-slick";

function Testimonials() {
  const settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <div className="lg:px-32 w-full   lg:w-10/12 md:w-9/12">
        <div className="w-full">
          <Slider {...settings}>
            <div className="relative flex p-2 md:p-6 justify-center h-[200px] md:h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi1.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex p-2 md:p-6 justify-center h-[200px] md:h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi2.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex p-2 md:p-6 justify-center h-[200px] md:h-[400px] items-center">
              <div className="flex justify-center  h-full">
                <div className=" flex justify-center items-center w-full">
                  <img
                    className=" object-fill w-full border border-red-500 p-3 bg-black"
                    src="/assets/images/testi3.jpg"
                  />
                </div>
              </div>
            </div>
            <div className="relative flex p-2 md:p-6 justify-center h-[200px] md:h-[400px] items-center">
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
 function SamplePrevArrow(props) {
   const { className, style, onClick } = props;

   return (
     <div
       onClick={onClick}
       style={{ zIndex: 200 }}
       // style={{ ...style }}
       className={
         "arrows prev absolute top-0 bottom-0 left-0 z-50 flex cursor-pointer w-[100px] flex-col justify-center"
       }
     >
       <svg viewBox="0 0 130 130" className="fill-brand_red">
         <defs>
           <filter
             id="Ellipse_691"
             x="0"
             y="0"
             width="130"
             height="130"
             filterUnits="userSpaceOnUse"
           >
             <feOffset dy="12" input="SourceAlpha" />
             <feGaussianBlur stdDeviation="15" result="blur" />
             <feFlood floodColor="#d82744" floodOpacity="0.502" />
             <feComposite operator="in" in2="blur" />
             <feComposite in="SourceGraphic" />
           </filter>
         </defs>
         <g id="Group_228" data-name="Group 228" transform="translate(45 33)">
           <g
             transform="matrix(1, 0, 0, 1, -45, -33)"
             filter="url(#Ellipse_691)"
           >
             <g
               id="Ellipse_691-2"
               data-name="Ellipse 691"
               transform="translate(45 33)"
               fill="#d82744"
               stroke="#d82744"
               strokeWidth="1"
             >
               <circle cx="20" cy="20" r="20" stroke="none" />
               <circle cx="20" cy="20" r="19.5" fill="none" />
             </g>
           </g>
           <path
             id="Icon_awesome-arrow-down"
             data-name="Icon awesome-arrow-down"
             d="M14.57,9.21l.794-.794a.855.855,0,0,0,0-1.212L8.416.252A.855.855,0,0,0,7.2.252L.252,7.2a.855.855,0,0,0,0,1.212l.794.794A.859.859,0,0,0,2.273,9.2L6.378,4.887V15.164a.856.856,0,0,0,.858.858H8.38a.856.856,0,0,0,.858-.858V4.887L13.344,9.2A.853.853,0,0,0,14.57,9.21Z"
             transform="translate(11.978 27.616) rotate(-90)"
             fill="#fff"
           />
         </g>
       </svg>
     </div>
   );
 }
 function SampleNextArrow(props) {
   const { className, style, onClick } = props;

   return (
     <div
       onClick={onClick}
       style={{ zIndex: 200 }}
       // style={{ ...style }}
       className={
         "arrows next absolute top-0 bottom-0 right-0 z-50 flex cursor-pointer w-[100px] flex-col justify-center"
       }
     >
       <svg viewBox="0 0 130 130">
         <defs>
           <filter
             id="Ellipse_691"
             x="0"
             y="0"
             width="130"
             height="130"
             filterUnits="userSpaceOnUse"
           >
             <feOffset dy="12" input="SourceAlpha" />
             <feGaussianBlur stdDeviation="15" result="blur" />
             <feFlood floodColor="#d82744" floodOpacity="0.502" />
             <feComposite operator="in" in2="blur" />
             <feComposite in="SourceGraphic" />
           </filter>
         </defs>
         <g id="Group_229" data-name="Group 229" transform="translate(45 33)">
           <g
             transform="matrix(1, 0, 0, 1, -45, -33)"
             filter="url(#Ellipse_691)"
           >
             <g
               id="Ellipse_691-2"
               data-name="Ellipse 691"
               transform="translate(45 33)"
               fill="#d82744"
               stroke="#d82744"
               strokeWidth="1"
             >
               <circle cx="20" cy="20" r="20" stroke="none" />
               <circle cx="20" cy="20" r="19.5" fill="none" />
             </g>
           </g>
           <path
             id="Icon_awesome-arrow-down"
             data-name="Icon awesome-arrow-down"
             d="M14.57,6.812l.794.794a.855.855,0,0,1,0,1.212L8.416,15.77a.855.855,0,0,1-1.212,0L.252,8.818a.855.855,0,0,1,0-1.212l.794-.794a.859.859,0,0,1,1.227.014l4.105,4.309V.858A.856.856,0,0,1,7.236,0H8.38a.856.856,0,0,1,.858.858V11.136l4.105-4.309A.853.853,0,0,1,14.57,6.812Z"
             transform="translate(12 27.616) rotate(-90)"
             fill="#fff"
           />
         </g>
       </svg>
     </div>
   );
 }

export default Testimonials;
