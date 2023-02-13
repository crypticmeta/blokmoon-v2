import Link from 'next/link';
import React, { useState } from 'react'
import {BsSearch} from "react-icons/bs"
function Index() {
    const [id, setId] = useState("");
  return (
    <div className="custom-container center ">
      <div className="gradient  md:w-full flex sm:px-6 px-8  md:px-3 rounded-2xl  border-white border-4 items-center">
        <input
          placeholder="enter inscription id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="flex-1 text-xl py-2 bg-transparent focus:outline-none"
        />
        <Link href={id &&`/explorer/${id}`}>
          <BsSearch className="text-lg md:text-xl " />
        </Link>
      </div>
    </div>
  );
}

export default Index