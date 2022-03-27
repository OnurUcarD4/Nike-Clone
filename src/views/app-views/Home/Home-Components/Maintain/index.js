import React from "react";

const Maintain = () => {
  return (
    <div>
      <div className="header-text-maintain mb-4">
        <span className="text-2xl">Seni İleriye Taşıyacak Stiller</span>
      </div>

      <div className="grid  grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-10 gap-2">
        <div className="col-span-1">
          <div className="relative">
            <div className="absolute bottom-10 left-10 text-white">
              Yeni Sezon. Yeni Hedefler.
              <div className="mt-10">
                <button className="bg-white rounded-full px-4 py-1.5 text-black text-opacity-80 hover:bg-gray-300">
                  İncele
                </button>
              </div>
            </div>
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/6dafc759-2932-41c8-aa49-8a04f9f7d334/resmi-nike-sitesi.jpg"
              alt="ileriye taşıyacak stiller"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <div className="absolute bottom-10 left-10 text-white">
              Canlan ve Yenilen
              <div className="mt-10">
                <button className="bg-white rounded-full px-4 py-1.5 text-black text-opacity-80 hover:bg-gray-300">
                  İncele
                </button>
              </div>
            </div>
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/af8120d1-f968-41c5-a5dc-1bc02251ca7a/resmi-nike-sitesi.jpg"
              alt="ileriye taşıyacak stiller"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintain;
