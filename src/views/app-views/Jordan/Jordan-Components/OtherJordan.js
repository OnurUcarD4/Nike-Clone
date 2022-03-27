import React from "react";

const OtherJordan = () => {
  return (
    <div className="mt-20">
      <span className="text-2xl font-extrabold tracking-tight">
        DİĞER JORDAN STİLLERİNİ KEŞFET
      </span>
      <div className="img-wrapper grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 cursor-pointer">
        <div className="relative">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1209,c_limit/3dcd862e-9bb4-466a-af53-897001cf82dd/jordan-markası.jpg"
            alt="jordan"
          />
          <span className="absolute text-base bottom-10 left-10 text-white md:text-lg">
            Jordan Basketbol Stillerini Keşfet
          </span>
        </div>
        <div className="relative">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_1209,c_limit/b208f842-84d5-4e41-ab9c-626149b388b4/jordan-markası.jpg"
            alt="jordan"
          />
          <span className="absolute bottom-10 left-10 text-white text-base md:text-lg">
            Koleksiyonu Keşfet
          </span>
        </div>
      </div>
    </div>
  );
};

export default OtherJordan;
