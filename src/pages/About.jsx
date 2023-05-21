import React, { useRef } from "react";

import Me from "../assets/avatar-1.jpeg";

import { SiReact, SiTailwindcss, SiLaravel } from "react-icons/si";
import { useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="container relative flex min-h-screen"
      id="about"
    >
      <div
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="flex flex-col justify-center"
      >
        <h2 className="section__title z-10 text-center text-[2rem] font-bold lg:text-start">
          About Moon
        </h2>
        <div className="flex flex-col items-center lg:flex-row ">
          <div className="absolute z-0 h-[300px] w-[300px] rounded-full bg-rose-200 blur-3xl" />
          <img
            src={Me}
            alt=""
            className="z-10 mb-2 w-[150px] rounded-[20%] border-4 border-[#fff] lg:w-[180px]"
          />
          <div className="z-10 my-5 flex w-full flex-col items-center rounded-[20px] bg-[#fff] p-5 shadow-lg lg:my-0 lg:ml-10 lg:flex-row lg:py-5">
            {/* about */}
            <div className="flex flex-col gap-5 lg:w-[60%] ">
              <p className="text-justify lg:text-lg">
                Hey! <span className="font-bold">Salman</span> here, I'm a
                Frontend Developer from Indonesia. A 3rd year student at
                Universitas Diponegoro majoring in Computer Engineering.
              </p>
              <p className="text-right italic">- Sun Tzu</p>
            </div>
            {/* techstacks */}
            <div className="my-3 flex flex-col items-center justify-center gap-2 lg:w-[40%]">
              <div className="">
                <p className="font-bold">My Tech</p>
              </div>
              <div className="flex gap-3">
                <div>
                  <SiReact className="h-6 w-6 hover:scale-110 hover:text-first" />
                </div>
                <div>
                  <SiTailwindcss className="h-6 w-6 hover:scale-110 hover:text-first" />
                </div>
                <div>
                  <SiLaravel className="h-6 w-6 hover:scale-110 hover:text-first" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center px-2 lg:mt-[1rem] lg:justify-end ">
          <button className="my-2 rounded-2xl bg-first py-2 px-4 font-bold text-white outline-dotted hover:bg-[#CC3D4D] hover:outline-4 hover:outline-offset-4 hover:outline-[#CC3D4D]">
            <a href="https://pdfhost.io/v/LXs9psshx_Muhammad_Salman_Alfarisi_Frontend_Developer">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
