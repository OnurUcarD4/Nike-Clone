import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderSecondary.scss";

const SliderSecondary = () => {
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
        <span className="sm:text-2xl">SNKRS'ta En Yeniler</span>
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
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/7443e12d-4322-4bd5-9e82-4d69bd5fd17c/kadınlar-için-air-jordan-6-mint-foam-dq4914-103-lansman-tarihi.jpg"
            alt="Kadınlar İçin Air Jordan 6"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>Kadınlar İçin Air Jordan 6</span>
              <span className="opacity-50">Kadın Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺3.199,90</span>
            </div>
          </div>
        </div>

        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/58a27405-ccd2-432d-ae37-8ad36e299dae/air-jordan-1-gore-tex-particle-grey-db2889-001-lansman-tarihi.jpg"
            alt="gore-tex air jordan"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>Air Jordan 1 GORE-TEX</span>
              <span className="opacity-50">Ayakkabı</span>
              <span className="mr-10 opacity-50">₺2.899,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/a4bb4b42-92f8-40a2-8a43-f939bffb76da/air-max-95-ıronstone-dr0146-001-lansman-tarihi.jpg"
            alt="Erkek Ayakkabısı"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>Air Max 95</span>
              <span className="opacity-50">Erkek Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.599,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/fa50c56d-9d87-43e6-92d0-5c27156403fc/acg-mountain-fly-low-gore-tex-sea-glass-dd2861-001-lansman-tarihi.jpg"
            alt="ACG Mountain"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>ACG Mountain Fly Low GORE-TEX</span>
              <span className="opacity-50">Erkek Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.599,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/a0f27dee-c64b-4940-9d11-ed13a1b7a832/acg-air-mada-vachetta-tan-dm3004-200-lansman-tarihi.jpg"
            alt="ACG Air Mada"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>ACG Air Mada</span>
              <span className="opacity-50">Erkek Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.099,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/ce2443e9-acb3-4152-b6b3-a3404cd56841/acg-air-mada-black-dm3004-002-lansman-tarihi.jpg"
            alt="ACG Air Mada"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>ACG Air Mada</span>
              <span className="opacity-50">Erkek Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.099,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/817cfd07-9211-4710-8374-6fbbb3b1b5b2/acg-air-mada-ash-green-dm3004-001-lansman-tarihi.jpg"
            alt="ACG Air Mada"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>ACG Air Mada</span>
              <span className="opacity-50">Erkek Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.099,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/0a45ec56-3359-4999-8fe6-3b5198d8e80c/acg-mountain-fly-low-gore-tex-hazel-rush-dd2861-200-lansman-tarihi.jpg"
            alt="ACG Mountain Fly Low"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>ACG Mountain Fly Low GORE-TEX</span>
              <span className="opacity-50">Erkek Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.599,90</span>
            </div>
          </div>
        </div>
        <div className="hover:opacity-70 duration-300 cursor-pointer">
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/66884f23-8ee5-4df2-b9f7-fb7a3dd185c3/kadınlar-için-air-max-95-rise-and-unity-dq9323-200-lansman-tarihi.jpg"
            alt="Air MAX 95"
          />
          <div className="image-description mt-4 flex flex-col">
            <span className="text-red-500">SNKRS Özel</span>
            <div className="flex flex-col">
              <span>Kadınlar İçin Air Max 95</span>
              <span className="opacity-50">Kadın Ayakkabısı</span>
              <span className="mr-10 opacity-50">₺2.749,90</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderSecondary;
