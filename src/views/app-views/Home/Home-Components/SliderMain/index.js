import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderMain.scss";

const SliderMain = () => {
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
        <span className="text-2xl">Hazırlan</span>
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
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/303843af-3f79-45ed-84ab-e04f6d18b07d/air-zoom-pegasus-38-yol-koşu-ayakkabısı-FGw5Ll.png"
            alt="Kadın Yol Yarış Ayakkabısı"
          />
          <div className="image-description mt-4 flex flex-col">
            <div className="flex justify-between">
              <span>Nike Air Zoom Pegasus 38</span>
              <span className="mr-10">₺1.749,90</span>
            </div>

            <span className="opacity-50">Kadın Yol Koşu Ayakkabısı</span>
          </div>
        </div>

        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/aa45540e-ad2a-40b5-a132-ff89d7cdfc33/air-zoom-alphafly-next-flyknit-yol-yarış-ayakkabısı-mGK8M0.png"
            alt="Kadın Yol Yarış Ayakkabısı"
          />
          <div className="image-description mt-4 flex flex-col">
            <div className="flex justify-between">
              <span>Nike Air Zoom Alphafly NEXT% Flyknit</span>
              <span className="mr-10">₺4.349,90</span>
            </div>

            <span className="opacity-50">Kadın Yol Yarış Ayakkabısı</span>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/a17c1c96-1088-4ea6-bd8d-be5e8dca2110/zoomx-vaporfly-next-2-yol-yarış-ayakkabısı-dxSLFw.png"
            alt="Erkek Yol Yarış Ayakkabısı"
          />
          <div className="image-description mt-4 flex flex-col">
            <div className="flex justify-between">
              <span>Nike ZoomX Vaporfly Next% 2</span>
              <span className="mr-10">₺3.629,90</span>
            </div>

            <span className="opacity-50">Erkek Yol Yarış Ayakkabısı</span>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/e8e530a3-2317-4783-819b-40860281daaf/zoomx-streakfly-yol-yarış-ayakkabısı-wWhMKs.png"
            alt="Yol Yarış Ayakkabısı"
          />
          <div className="image-description mt-4 flex flex-col">
            <div className="flex justify-between">
              <span>Nike ZoomX Streakfly</span>
              <span className="mr-10">₺2.179,90</span>
            </div>

            <span className="opacity-50">Yol Yarış Ayakkabısı</span>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/dec81d47-4188-405f-a126-37c47c665e87/zoomx-vaporfly-next-2-yol-yarış-ayakkabısı-wttWqR.png"
            alt="Kadın Yol Yarış Ayakkabısı"
          />
          <div className="image-description mt-4 flex flex-col">
            <div className="flex justify-between">
              <span>Nike ZoomX Vaporfly Next% 2</span>
              <span className="mr-10">₺3.629,90</span>
            </div>

            <span className="opacity-50">Kadın Yol Yarış Ayakkabısı</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderMain;
