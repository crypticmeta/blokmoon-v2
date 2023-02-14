import React from 'react'
import Slider from "react-slick";
import Mint from './Mint';
import NFT from './NFT';
import Website from './Website';
import Ordinals from "./Ordinals"
function Services() {
     var settings = {
      nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
       dots: true,
       infinite: false,
       speed: 500,
       slidesToShow: 4,
       slidesToScroll: 4,
       initialSlide: 0,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
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
    <div className="min-h-screen center text-white w-full custom-container">
      <div className="w-full">
        <Slider {...settings} className="w-full">
          <div className=" w-full flex items-center justify-center   md:w-6/12 p-3 h-[500px] 2xl:h-[1000px] relative">
            <h3 className="  text-xl lg:text-4xl font-extrabold text-brand_blue absolute bottom-0 uppercase">
              <span className="text-[8rem]">S</span>ervices
            </h3>
          </div>
          <div className="w-full md:w-6/12 p-3 h-[500px] 2xl:h-[1000px] center">
            <div className="border-4 rounded-[30px] h-[100%] border-brand_blue p-3  services-gradient relative overflow-hidden">
              <Ordinals />
              <div className="absolute bottom-0 left-0 right-0 h-[35%]">
                <div className="relative h-full w-full">
                  <div className="absolute min-w-full min-h-full scale-110 bg-brand_red rounded-tl-[50px]  rounded-tr-[100px] rotate-[5deg]"></div>
                  <div className="absolute min-w-full min-h-full bg-brand_blue pb-2 rounded-tl-[50px]  rounded-tr-[100px] flex flex-col justify-end pl-4">
                    <p className="text-xs pr-6 pb-3 font-thin">
                      Creating a BTC Ordinal can be a chore. We help you live easy by creating ordinals for you with the data you provide.
                    </p>
                    <p className="font-bold tracking-wide">BTC ORDINALS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 p-3 h-[500px] 2xl:h-[1000px] center">
            <div className="border-4 rounded-[30px] h-[100%] border-brand_blue p-3  services-gradient relative overflow-hidden">
              <Website />
              <div className="absolute bottom-0 left-0 right-0 h-[35%]">
                <div className="relative h-full w-full">
                  <div className="absolute min-w-full min-h-full scale-110 bg-brand_red rounded-tl-[50px]  rounded-tr-[100px] rotate-[5deg]"></div>
                  <div className="absolute min-w-full min-h-full bg-brand_blue pb-2 rounded-tl-[50px]  rounded-tr-[100px] flex flex-col justify-end pl-4">
                    <p className="text-xs pr-6 pb-3 font-thin">
                      We can create pixel perfect websites that are secure, fast
                      and responsiveness. Our websites works well on all
                      standard devices and help you convey your idea properly.
                    </p>
                    <p className="font-bold tracking-wide">WEBSITE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 p-3 h-[500px] 2xl:h-[1000px] center">
            <div className="border-4 rounded-[30px] h-[100%] border-brand_blue p-3  services-gradient relative overflow-hidden">
              <Mint />
              <div className="absolute bottom-0 left-0 right-0 h-[35%]">
                <div className="relative h-full w-full">
                  <div className="absolute min-w-full min-h-full scale-110 bg-brand_red rounded-tl-[50px]  rounded-tr-[100px] rotate-[5deg]"></div>
                  <div className="absolute min-w-full min-h-full bg-brand_blue pb-2 rounded-tl-[50px]  rounded-tr-[100px] flex flex-col justify-end pl-4">
                    <p className="text-xs pr-6 pb-3 font-thin">
                      We create websites and webpages for projects to enable
                      their users to mint NFTs. We have a lot of experience in
                      using various methods of NFT launch.{" "}
                    </p>
                    <p className="font-bold tracking-wide">MINT SITE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 p-3 h-[500px] 2xl:h-[1000px] center">
            <div className="border-4 rounded-[30px] h-[100%] border-brand_blue p-3  services-gradient relative overflow-hidden">
              <NFT />
              <div className="absolute bottom-0 left-0 right-0 h-[35%]">
                <div className="relative h-full w-full">
                  <div className="absolute min-w-full min-h-full scale-110 bg-brand_red rounded-tl-[50px]  rounded-tr-[100px] rotate-[5deg]"></div>
                  <div className="absolute min-w-full min-h-full bg-brand_blue pb-2 rounded-tl-[50px]  rounded-tr-[100px] flex flex-col justify-end pl-4">
                    <p className="text-xs pr-6 pb-3 font-thin">
                      We can help you generate thousands of NFTs along with the
                      metadata depending on the layers you provide to us.
                    </p>
                    <p className="font-bold tracking-wide">NFT GENERATION</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
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
        "arrows prev absolute top-0 bottom-0 left-[-60px] lg:left-[-10px] z-50 flex cursor-pointer w-[150px] flex-col justify-center"
      }
    >
      <svg viewBox="0 0 130 130" className="fill-brand_blue">
        <defs>
          <filter
            id="Ellipse_691"
            x="0"
            y="0"
            width="130"
            height="130"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="12" in="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#2233f0" floodOpacity="0.502" />
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
              fill="#2233f0"
              stroke="#2233f0"
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
        "arrows next absolute top-0 bottom-0 right-0   lg:right-[-70px] z-50 flex cursor-pointer w-[150px] flex-col justify-center"
      }
    >
      <svg viewBox="0 0 130 130" className="fill-brand_blue">
        <defs>
          <filter
            id="Ellipse_691"
            x="0"
            y="0"
            width="130"
            height="130"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="12" in="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#2233f0" floodOpacity="0.502" />
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
              fill="#2233f0"
              stroke="#2233f0"
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

export default Services