import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from "next/router"
import copy from "copy-to-clipboard"
import { AiOutlineCopy } from 'react-icons/ai'
import Input from "../../../components/Input"
type Data = {
    title: string;
    id: string;
    timestamp: string;
    inscription_number: string;
    address: string;
}
function Id() {
    const router = useRouter();
    const [data, setData] = useState<Data|null>(null);
        const fetchData = useCallback(async() => {
          await axios
            .get(
              "https://ordapi.xyz/inscription/"+router.query.id
            )
              .then((res) => {
                setData(res.data);
            })
            .catch((err) => console.log(err, "ERR"));
        }, [router.query]);

    useEffect(() => {
            if(router.query?.id)
          fetchData();
    }, [fetchData, router.query]);
    
    if(data)
  return (
    <div className="custom-container   h-screen">
      <Input/>
      <div className="flex h-70vh  justify-between items-center flex-wrap">
        <div className="w-full md:w-6/12 flex justify-end px-3">
          <div className="h-[300px] w-[300px] services-gradient border-4 border-brand_red overflow-hidden relative">
            <Image
              className="overflow-hidden object-cover"
              fill
              placeholder={"blur"}
              blurDataURL={"favicon.ico"}
              // onError={() => setShow(false)}
              alt="ordinal"
              src={`https://ordinals.com/content/${data.id}`}
            />
          </div>
        </div>
        <div className="w-full md:w-6/12 px-3 flex flex-col justify-end h-[300px]">
          <p className="text-3xl text-brand_red font-extrabold uppercase">
            {data.title}
          </p>
          <p className="text-brand_blue font-semibold text-sm pb-3">
            {data.timestamp}
          </p>
          <p className="text-white pb-1 flex">
            ID:{" "}
            <span className="text-xs bg-brand_blue px-3 py-1 rounded flex items-center space-x-3">
              {data.id}{" "}
              <AiOutlineCopy
                onClick={() =>
                  copy(data.id, { message: "copied to clipboard" })
                }
                className="ml-3 cursor-pointer"
              />
            </span>
          </p>
          <p className="text-white pb-1 flex">
            Address:{" "}
            <span className="text-xs bg-brand_blue px-3 py-1 rounded flex items-center space-x-3">
              {data.address}{" "}
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
    </div>
  );
}

export default Id