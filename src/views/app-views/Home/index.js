import React, { useEffect } from "react";
import MainPhoto from "./Home-Components/MainPhoto";
import SliderMain from "./Home-Components/SliderMain";
import Maintain from "./Home-Components/Maintain";
import SliderSecondary from "./Home-Components/SliderSecondary";
import KidsAd from "./Home-Components/KidsAd";
import OurApps from "./Home-Components/OurApps";
import JoinUs from "./Home-Components/JoinUs";
import MoreNike from "./Home-Components/MoreNike";
import FooterCategories from "./Home-Components/FooterCategories";

const Home = () => {
  useEffect(() => {
    document.title = "Nike Clone | Onur Uçar";
  }, []);
  return (
    <div>
      <MainPhoto />
      <SliderMain />
      <Maintain />
      <SliderSecondary />
      <KidsAd />
      <OurApps />
      <JoinUs />
      <MoreNike />
      <FooterCategories />
    </div>
  );
};

export default Home;
