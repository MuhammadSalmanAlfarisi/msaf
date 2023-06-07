import React, { Component } from "react";
import Slider from "react-slick";

import Data from "../Data";
import Projects from "./Projects";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            centerMode: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
      ],
    };
    return (
      <div className="">
        <Slider {...settings}>
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
        </Slider>
      </div>
    );
  }
}
