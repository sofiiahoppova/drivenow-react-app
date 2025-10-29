import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import css from "./Carousel.module.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}></div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}></div>
  );
};

const Carousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "24px",
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={css.container}>
      <h2 className={css.title}>Btands We Offer</h2>
      <p className={css.description}>
        Select your favorite brand and discover available models.
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Lexus.png"
              alt="Lexus"
            />
            <p>Lexus</p>
          </div>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Volkswagen.png"
              alt="Volkswagen Logo"
            />
            <p>Volkswagen</p>
          </div>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Nissan.png"
              alt="Nissan Logo"
            />
            <p>Nissan</p>
          </div>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Mersedes.png"
              alt="Mercedes Logo"
            />
            <p>Mersedes</p>
          </div>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Lamborghini.png"
              alt="Lamborghini Logo"
            />
            <p>Lamborghini</p>
          </div>{" "}
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Toyota.png"
              alt="Toyota Logo"
            />
            <p>Toyota</p>
          </div>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/BMW.png"
              alt="BMW Logo"
            />
            <p>BMW</p>
          </div>
          <div className={css.item}>
            <img
              className={css.image}
              src="/images/CarBrands/Audi.png"
              alt="Audi Logo"
            />
            <p>Audi</p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
