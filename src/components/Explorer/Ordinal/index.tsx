import React, { useState } from 'react'
import Input from '../Input';
import Image from "next/image"
import Link from 'next/link';
import { AiOutlineCopy } from 'react-icons/ai';
import copy from 'copy-to-clipboard';
import { shortForm } from 'utils/shortForm';
import { BsDownload } from "react-icons/bs";
import { saveAs } from "file-saver";

interface OrdinalProp {
  data: {
    title: string;
    id: string;
    timestamp: string;
    inscription_number: string;
    address: string;
  };
};

function Ordinal({ data }: OrdinalProp): JSX.Element {
 
  const [img, setImg] = useState(true);
   const handleSave = () => {
     const url = `https://ordinals.com/content/${data.id}`;
     saveAs(url, data.title);
  };
  return (
        <div className="flex h-70vh justify-center lg:justify-start pt-8 lg:pt-16  items-center lg:items-start flex-wrap">
          <div className="w-full lg:w-5/12    flex justify-center lg:justify-start">
            <div className=" h-[350px] w-[350px] lg:w-[400px] lg:h-[400px] md:h-[300px]   md:w-[300px] services-gradient border-4 border-brand_red overflow-hidden relative">
              <BsDownload
                onClick={handleSave}
                className="absolute top-5 gradient p-2 text-white cursor-pointer right-5 z-10 rounded-full text-3xl font-extrabold"
              />
              {img ? (
                <Image
                  unoptimized
                  onError={() => setImg(false)}
                  className={`overflow-hidden object-cover ${!img && "hidden"}`}
                  fill
                  placeholder={"blur"}
                  blurDataURL={"favicon.ico"}
                  // onError={() => setShow(false)}
                  alt="ordinal"
                  src={`https://ordinals.com/content/${data.id}`}
                />
              ) : (
                <iframe
                  referrerPolicy="no-referrer"
                  // sandbox="allow-scripts"
                  className={`overflow-hidden bg-white h-full w-full center`}
                  src={`https://ordinals.com/content/${data.id}`}
                ></iframe>
              )}
            </div>
          </div>
          <div className="w-full lg:w-7/12 lg:px-6  flex flex-col pt-6 lg:pt-0  h-[300px]">
            <p className="text-3xl text-brand_red font-extrabold uppercase">
              {data.title}
            </p>
            <p className="text-brand_blue font-semibold text-sm pb-3">
              {data.timestamp}
            </p>
            <p className="text-white pb-1 flex ">
              ID:{" "}
              <span className="hidden  text-xs ml-2 bg-brand_blue  px-3 py-1 rounded md:flex  items-center space-x-3">
                {data.id}{" "}
                <AiOutlineCopy
                  onClick={() =>
                    copy(data.id, { message: "copied to clipboard" })
                  }
                  className="ml-3 cursor-pointer"
                />
              </span>
              <span className="text-xs bg-brand_blue ml-2 px-3 py-1 rounded flex md:hidden flex-wrap items-center space-x-3">
                {shortForm(data.id)}{" "}
                <AiOutlineCopy
                  onClick={() =>
                    copy(data.id, { message: "copied to clipboard" })
                  }
                  className="ml-3 cursor-pointer"
                />
              </span>
            </p>
            <p className="text-white pb-1 flex ">
              Address:{" "}
              <span className="text-xs bg-brand_blue ml-2 px-3 py-1 rounded hidden md:flex  items-center space-x-3">
                {data.address}{" "}
                <AiOutlineCopy
                  onClick={() =>
                    copy(data.address, { message: "copied to clipboard" })
                  }
                  className="ml-3 cursor-pointer"
                />
              </span>
              <span className="text-xs bg-brand_blue ml-2 px-3 py-1 rounded md:hidden flex  items-center space-x-3">
                {shortForm(data.address)}{" "}
                <AiOutlineCopy
                  onClick={() =>
                    copy(data.address, { message: "copied to clipboard" })
                  }
                  className="ml-3 cursor-pointer"
                />
              </span>
            </p>
            <p className="text-white pb-3">
              Inscription Number:{" "}
              <span className="text-xs  px-3 py-1 rounded">
                {data.inscription_number}
              </span>
            </p>
            <div className="flex">
              <button className="gradient text-white uppercase font-thin px-4 py-2 text-xs">
                <Link href={`${data["genesis transaction"]}`}>Genesis Tx</Link>
              </button>
            </div>
          </div>
        </div>
  );
}

export default Ordinal

