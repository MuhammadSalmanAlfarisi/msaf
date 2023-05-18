import React from "react";

import Logo from "../assets/heart.svg";

import {
  BiUser,
  BiHomeAlt2,
  BiPhone,
  BiBriefcase,
  BiLoader,
} from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="aside fixed top-0 left-0 z-10 hidden h-full w-24 flex-col content-center items-center justify-between gap-4 border-r-[1px] border-solid border-[#0000000d] bg-body p-10 md:flex lg:flex">
      <a href="/" className="flex h-[80px] w-[80px] justify-center">
        <img src={Logo} alt="" className="h-10 w-10" />
      </a>

      <nav>
        <ul className="flex flex-col gap-[1rem]">
          <li className="py-[4px] transition-all hover:scale-125">
            <a href="#home">
              <BiHomeAlt2 className="h-6 w-6 text-title hover:text-first" />
            </a>
          </li>
          <li className="py-[4px] transition-all hover:scale-125">
            <a href="#about">
              <BiUser className="h-6 w-6 text-title hover:text-first" />
            </a>
          </li>
          <li className="py-[4px] transition-all hover:scale-125">
            <a href="#projects">
              <BiBriefcase className="h-6 w-6 text-title hover:text-first" />
            </a>
          </li>
          <li className="py-[4px] transition-all hover:scale-125">
            <a href="#resume">
              <BiLoader className="h-6 w-6 text-title hover:text-first" />
            </a>
          </li>
          <li className="py-[4px] transition-all hover:scale-125">
            <a href="#contact">
              <BiPhone className="h-6 w-6 text-title hover:text-first" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <p className="text-xs text-[#9b98b3]">© 2023. All rights reserved.</p>
      </div>
    </aside>
  );
};

export default Sidebar;
