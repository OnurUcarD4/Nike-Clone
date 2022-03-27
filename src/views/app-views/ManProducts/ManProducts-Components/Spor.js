import React from "react";

const Spor = () => {
  return (
    <div className="p-2 flex flex-col">
      <span>Spor</span>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Günlük Giyim</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Koşu</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Futbol</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Antrenman ve Spor Salonu</label>
      </div>
    </div>
  );
};

export default Spor;
