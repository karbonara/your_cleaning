import React from "react";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
    const settings = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider__content">
            <span className="slider__advertising">Реклама</span>
            <Slider {...settings} className="slider__wrapper">
                <div className="slider__item">
                    <img className="slider__img" src="https://i.imgur.com/WndnKgY.png" alt="" />
                </div>
                <div className="slider__item">
                    <img className="slider__img" src="https://i.imgur.com/WndnKgY.png" alt="" />
                </div>
                <div className="slider__item">
                    <img className="slider__img" src="https://i.imgur.com/WndnKgY.png" alt="" />
                </div>
                <div className="slider__item">
                    <img className="slider__img" src="https://i.imgur.com/WndnKgY.png" alt="" />
                </div>
                <div className="slider__item">
                    <img className="slider__img" src="https://i.imgur.com/WndnKgY.png" alt="" />
                </div>
                <div className="slider__item">
                    <img className="slider__img" src="https://i.imgur.com/WndnKgY.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlider;