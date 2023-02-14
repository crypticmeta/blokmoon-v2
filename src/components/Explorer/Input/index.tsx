import Link from 'next/link';
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { useRouter } from "next/router";
function Index() {
   const router = useRouter();
  const [id, setId] = useState(router.query?.id||"");
  return (
    <div className=" center flex-col ">
      <div className="gradient  w-full flex sm:px-6 px-3 justify-between  rounded-2xl  border-white border-4 items-center mb-3">
        <input
          placeholder="Inscription ID / Address / Tx"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className=" text-xs md:text-base w-full py-2 bg-transparent focus:outline-none text-white"
        />
        <Link shallow href={id && `/explorer/${id}`} className="ml-2">
          <BsSearch className="text-lg md:text-xl text-white" />
        </Link>
      </div>
      <div className="center flex-wrap">
        <button className="m-3 gradient text-white uppercase font-thin px-4 py-2 text-xs">
          <Link shallow href={`/explorer/address/${id}`}>Address</Link>
        </button>
        <button className="m-3 gradient text-white uppercase font-thin px-4 py-2 text-xs">
          <Link shallow href={`/explorer/${id}`}>Inscription ID</Link>
        </button>
        <button className="m-3 gradient text-white uppercase font-thin px-4 py-2 text-xs">
          <Link shallow href={`/explorer/tx/${id}`}>Transaction</Link>
        </button>
      </div>
    </div>
  );
}

export default Index