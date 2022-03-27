import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../views/app-views/Home/Home-Components/SliderMain/SliderMain.scss";

const SliderMain = ({ options }) => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mb-20">
      <div className="flex justify-between items-end mr-10 mb-3">
        <span className="font-extrabold text-sm md:text-2xl">
          İLGİNİN ODAĞINDA
        </span>
        <div className="Slider-Buttons">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {options.map((e) => (
          <div className="hover:opacity-70 duration-300 cursor-pointer">
            <div key={e.Id} className="">
              <img src={e.Image} alt={e.Desc} />
              <div className="image-description mt-4 flex flex-col">
                <div className="flex justify-between">
                  <span className="font-bold tracking-tight text-sm md:text-base">
                    {e.Title}
                  </span>
                  <span className="mr-10 font-bold tracking-tight">
                    {e.Price}
                  </span>
                </div>

                <span className="opacity-50 font-bold text-sm tracking-tighter">
                  {e.Desc}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderMain;
