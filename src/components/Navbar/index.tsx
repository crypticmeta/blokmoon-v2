import React from 'react'
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import {FaDiscord} from 'react-icons/fa'
import Link from "next/link"
function Navbar() {
  return (
    <div className="text-white flex justify-between w-full custom-container text-3xl">
      <div>
        <Link href="/">
          <AiFillHome />
        </Link>
      </div>

      <div className='flex items-center space-x-3'>
        <a href="https://discord.gg/UCgMuJ3uGx" target={"_blank"} rel="noreferrer" className='pt-2'>
          <FaDiscord />
        </a>
        <div>
          <Link
            href="/explorer"
            className="text-base tracking-wider rounded-xl uppercase gradient px-3 py-1"
          >
            Explorer
          </Link>
        </div>
      </div>
      {/* <div>
        <AiOutlineMenu />
      </div> */}
    </div>
  );
}

export default Navbar