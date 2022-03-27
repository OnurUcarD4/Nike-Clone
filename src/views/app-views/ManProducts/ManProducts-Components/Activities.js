import React from "react";

const Activities = () => {
  return (
    <div className="p-2">
      İdeal Olduğu Aktiviteler
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Sıcak Hava</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Yağışlı Hava Şartları</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Soğuk Hava</label>
      </div>
    </div>
  );
};

export default Activities;
