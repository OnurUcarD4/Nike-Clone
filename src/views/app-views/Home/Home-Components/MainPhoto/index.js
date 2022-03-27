import React from "react";
import HeaderMain from "./HeaderMain";
import "./sliderMain.scss";

const MainPhoto = () => {
  return (
    <div className="main">
      <img
        className="hidden lg:block xl:block md:block"
        src="https://i.imgur.com/JBJs0fP.png"
        alt="mainphoto"
      />
      <img
        className="lg:hidden xl:hidden md:hidden block"
        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_437,c_limit/3de1514d-116e-4aa2-ab35-9a49e56c72e6/resmi-nike-sitesi.jpg"
        alt="phonephoto"
      />
      <HeaderMain />
    </div>
  );
};

export default MainPhoto;
