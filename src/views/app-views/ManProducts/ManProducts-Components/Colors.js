import React from "react";
import "../Products.scss";

const Colors = () => {
  return (
    <div className="p-2 ">
      <span>Renkler</span>
      <div className="grid grid-cols-3">
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-black" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-blue-600" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-orange-700" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-green-600" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-gray-600" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-orange-500" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-pink-600" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-violet-700" />
        </div>
        <div className="mt-2">
          <input type="checkbox" className="custom-color bg-red-600" />
        </div>
      </div>
    </div>
  );
};

export default Colors;
