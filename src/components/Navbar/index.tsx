import React, { useEffect, useRef, useState } from 'react'
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {FaDiscord} from 'react-icons/fa'
import Link from "next/link"
import { BsTwitter } from 'react-icons/bs';
function Navbar() {

  const [open, setOpen] = useState(false);
  const MobileNav = { true: "translateX(0%)", false: "translateX(100%)" };
  var style = {
    //@ts-ignore
    transform: MobileNav[open],
    boxShadow: open ? "-8px -2px 21px 7px rgba(0,0,0,0.75)" : "none",
  };

  const menuRef = useRef();

  const handleClickOutside = event => {
    //@ts-ignore
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <div className="text-white  md:px-12 flex justify-between w-full custom-container text-3xl">
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
      <div className="text-3xl text-white ">
            <div className="cursor-pointer">
              <AiOutlineMenu onClick={() => setOpen(!open)} />
            </div>
          </div>
          <aside
             ref={menuRef}
            style={style}
            className=" fixed right-0 top-0 bottom-0 z-50 min-h-screen w-10/12 md:w-6/12 lg:w-4/12  bg-brand_secondary transition-all duration-700"
          >
            <div className="flex text-white items-center space-x-8 p-6 ">
              <p className=" text-2xl md:text-3xl font-extrabold">Blokmoon</p>
              <div className="flex space-x-4 text-2xl md:text-3xl ">
                <Link  onClick={() => setOpen(false)} target="#" href="">
                  <BsTwitter />
                </Link>
                <Link  onClick={() => setOpen(false)} target="#" href="">
                  {" "}
                  <FaDiscord />{" "}
                </Link>
              </div>
              <div className="text-3xl  p-2 cursor-pointer text-white  ">
                <AiOutlineClose onClick={() => setOpen(!open)} className="" />
              </div>
            </div>
          </aside>
    </div>
  );
}

export default Navbar