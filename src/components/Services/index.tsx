import React from 'react'
import Slider from "react-slick";
import Mint from './Mint';
import NFT from './NFT';
import Website from './Website';
import Ordinals from "./Ordinals"
function Services() {
     var settings = {
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
          <div className="w-full md:w-6/12 p-3 h-[500px] 2xl:h-[1000px] relative">
            <h3 className="text-xl lg:text-4xl font-extrabold text-brand_blue absolute bottom-0 uppercase">
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

export default Services