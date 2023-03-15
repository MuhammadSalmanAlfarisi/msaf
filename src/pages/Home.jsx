import React, { useRef } from "react";

import Me from "../assets/avatar-1.png";
import Social from "../components/Social";

import { CgScrollV } from "react-icons/cg";
import { useInView } from "framer-motion";

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      ref={ref}
      className="container relative flex min-h-screen items-center justify-center"
      id="home"
    >
      {/* shapes */}
      <div className="absolute z-0 h-[70%] w-[70%] rounded-full bg-cyan-50 blur-3xl" />

      {/* main home */}
      <div
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="z-10 flex flex-col items-center p-3 text-center "
      >
        <img
          src={Me}
          alt=""
          className="mb-3 w-36 rounded-[40%] border-4 border-text lg:w-44"
        />
        <h1 className="text-[36px] font-bold lg:text-[42px]">
          Salman Alfarisi
        </h1>
        {/* add animation type */}
        <span className="text-md font-semibold">
          <code>Frontend Dev</code>
        </span>
        <Social />
      </div>
      <a href="#about" className="absolute bottom-16">
        <CgScrollV className="ani-mouse relative h-8 w-8 hover:text-first" />
      </a>
    </section>
  );
};

export default Home;
