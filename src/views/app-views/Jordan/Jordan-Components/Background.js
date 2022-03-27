import React from "react";
import "../Jordan.scss";

const Background = () => {
  return (
    <div>
      <span className="font-extrabold tracking-tight text-2xl">
        TASARIMIN ARKA PLANI
        <div className="img-wrapper mt-6 flex flex-col gap-2">
          <img
            className="md:hidden"
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/3d0ba25b-ba12-442e-97f9-12255aa0283f/image.jpg"
            alt="img"
          />
          <img
            className="hidden md:block"
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/51cdca5e-20d6-4ff9-93df-3256d06563a0/image.jpg"
            alt="jordan"
          />
          <div className="flex flex-col gap-2 mt-4 text-center justify-center  md:flex-row">
            <span className="text-3xl">AIR JORDAN 1</span>
            <span className="text-3xl">ELEVATE LOW SE</span>
          </div>

          <div className="flex gap-2 justify-center">
            <button className="jordan-button text-lg">İncele</button>
            <button className="jordan-button text-lg">İzle</button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Background;
