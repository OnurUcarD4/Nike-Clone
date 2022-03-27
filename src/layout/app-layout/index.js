import React from "react";
import AppViews from "views/app-views";
import Footer from "views/app-views/Footer";
import Navbar from "views/app-views/Navbar";
import SwiperNotification from "views/app-views/Home/Home-Components/SwiperNotification";
import TopHeader from "views/app-views/Home/Home-Components/TopHeader";

const AppLayout = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <SwiperNotification />
      <div className="mx-10 min-h-[45vh]">
        <AppViews />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
