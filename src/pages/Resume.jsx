import React, { useRef } from "react";

import { useInView } from "framer-motion";

import Constant from "../Constant";
import Card from "../components/Card";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      ref={ref}
      className="container relative flex min-h-screen w-full justify-center"
      id="resume"
    >
      <div
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="flex flex-col justify-center "
      >
        <h2 className="section__title text-center text-[2rem] font-bold lg:text-start">
          Journey
        </h2>
        <div className="grid-row-2 grid gap-4 lg:grid-cols-2 lg:gap-6 ">
          <div className="timeline relative z-10 grid rounded-2xl bg-[#fff] p-3 shadow-lg lg:p-4">
            {Constant.map((item, id) => {
              if (item.category === "education") {
                return (
                  <Card
                    key={id}
                    icon={item.icon}
                    title={item.title}
                    year={item.year}
                    desc={item.desc}
                  />
                );
              }
            })}
          </div>
          <div className="absolute left-[50%] z-0 h-[300px] w-[300px] rounded-full bg-rose-200 blur-3xl" />
          <div className="timeline relative grid rounded-2xl bg-[#fff] p-3 shadow-lg lg:p-4 ">
            {Constant.map((item, index) => {
              if (item.category === "experience") {
                return (
                  <Card
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    year={item.year}
                    desc={item.desc}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
