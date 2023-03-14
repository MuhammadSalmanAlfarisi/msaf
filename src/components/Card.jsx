import React from "react";

const Card = (props) => {
  return (
    <div className="items w-full relative pl-12 lg:pb-12 md:pb-10 pb-5 last:pb-0 ">
      <i className={props.icon}></i>
      <span className="italic text-sm">{props.year}</span>
      <h3 className="font-semibold text-lg my-1">{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
