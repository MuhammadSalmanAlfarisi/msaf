import React, { useRef } from "react";

import { useInView } from "framer-motion";

import Data from "../Data";

import Projects from "../components/Projects";

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section
      ref={ref}
      className="container relative flex min-h-screen flex-col items-center justify-center"
      id="projects"
    >
      <div
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h2 className="section__title z-10 text-center text-[2rem] font-bold lg:text-start">
          Projects
        </h2>
      </div>
      <div className="absolute z-0 h-[300px] w-[300px] -translate-x-48 rounded-full bg-emerald-200 blur-3xl" />
      <div
        style={{
          transform: isInView ? "none" : "translatex(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="z-20 space-y-5 md:grid md:grid-cols-2 md:gap-2 md:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0"
      >
        {Data.map((item, id) => {
          return (
            <Projects
              key={id}
              image={item.image}
              title={item.title}
              desc={item.desc}
              tech={item.tech}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Work;
