import React, { useRef } from "react";

import Me from "../assets/avatar-1.png";
import Social from "../components/Social";

import { CgScrollV } from "react-icons/cg";
import { useInView } from "framer-motion";

const Home = () => {
  const firstName = ["S", "a", "l", "m", "a", "n"];
  const lastName = ["A", "l", "f", "a", "r", "i", "s", "i"];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        <div className="flex flex-row gap-2">
          <div>
            {firstName.map((letter, index) => (
              <span
                key={index}
                className="cursor-default text-[36px] font-bold hover:text-first lg:text-[42px]"
              >
                {letter}
              </span>
            ))}
          </div>
          <div>
            {lastName.map((letter, index) => (
              <span
                key={index}
                className="cursor-default text-[36px] font-bold hover:text-first lg:text-[42px]"
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
        {/* add animation type */}
        <span className="text-md font-semibold">
          <code className="cursor-default"><span>React</span> // <span>Tailwind</span> // <span>Node</span></code>
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
