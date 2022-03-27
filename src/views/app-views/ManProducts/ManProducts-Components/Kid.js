import React from "react";

const Kid = () => {
  return (
    <div className="p-2">
      <span>Çocuk</span>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Erkek Çocuk</label>
      </div>
      <div className="mt-2 flex items-center">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Kız Çocuk</label>
      </div>
    </div>
  );
};

export default Kid;
