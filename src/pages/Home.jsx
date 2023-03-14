import React from "react";

import Me from "../assets/avatar-1.png";
import Social from "../components/Social";

import { CgScrollV } from "react-icons/cg";

const Home = () => {
  return (
    <section
      className="container relative flex min-h-screen items-center justify-center"
      id="home"
    >
      {/* shapes */}
      <div className="absolute z-0 h-[70%] w-[70%] rounded-full bg-cyan-50 blur-3xl" />

      {/* main home */}
      <div className="z-10 flex flex-col items-center p-3 text-center ">
        <img src={Me} alt="" className="mb-3 w-36 lg:w-44 rounded-[40%]" />
        <h1 className="text-[36px] font-bold lg:text-[42px]">
          Salman Alfarisi
        </h1>
        {/* add animation type */}
        <span className="text-md font-semibold">Frontend Dev</span>
        <Social />
        <a href="#about" className="absolute bottom-16">
          <CgScrollV className="ani-mouse relative h-8 w-8 hover:text-first" />
        </a>
      </div>
    </section>
  );
};

export default Home;
