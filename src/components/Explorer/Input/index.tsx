import Link from 'next/link';
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { useRouter } from "next/router";
function Index() {
   const router = useRouter();
  const [id, setId] = useState(router.query?.id||"");
  return (
    <div className="custom-container center flex-col ">
      <div className="gradient  md:w-full flex sm:px-6 px-8  md:px-3 rounded-2xl  border-white border-4 items-center mb-3">
        <input
          placeholder="enter inscription id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="flex-1 text-xl py-2 bg-transparent focus:outline-none text-white"
        />
        <Link href={id && `/explorer/${id}`}>
          <BsSearch className="text-lg md:text-xl text-white" />
        </Link>
      </div>
      <div className="center space-x-3">
        <button className="gradient text-white uppercase font-thin px-4 py-2 text-xs">
          <Link href={`/explorer/address/${id}`}>Address</Link>
        </button>
        <button className="gradient text-white uppercase font-thin px-4 py-2 text-xs">
          <Link href={`/explorer/${id}`}>Inscription ID</Link>
        </button>
        <button className="gradient text-white uppercase font-thin px-4 py-2 text-xs">
          <Link href={`/explorer/${id}`}>Transaction</Link>
        </button>
      </div>
    </div>
  );
}

export default Index