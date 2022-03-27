import React from "react";

const OurApps = () => {
  return (
    <div className="mb-20">
      <span className="text-2xl">Uygulamalarımızı Keşfet</span>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mt-4">
        <div className="col-span-1 cursor-pointer">
          <div className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/6b68a809-e5fa-4228-85ef-e0db636ce083/resmi-nike-sitesi.jpg"
              alt="our apps"
            />
            <div className="absolute bottom-10 left-10">
              <span className="text-white">Nike App</span>
              <div className="button-apps mt-10 mb-5">
                <button className="bg-white text-black px-4 py-1.5 rounded-full tracking-wide hover:bg-gray-400">
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 cursor-pointer ">
          <div className="relative">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/25ab408d-6697-4b17-a80f-47aeeaa6eb32/resmi-nike-sitesi.jpg"
              alt="our apps"
            />
            <div className="absolute bottom-10 left-10">
              <span className="text-white">Nike Run Club Uygulaması</span>
              <div className="button-apps mt-10 mb-5">
                <button className="bg-white text-black px-4 py-1.5 rounded-full tracking-wide hover:bg-gray-400">
                  Daha Fazla Bilgi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApps;
