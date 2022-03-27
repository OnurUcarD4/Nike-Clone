import React from "react";

const NBA = () => {
  return (
    <div className="p-2 mb-10">
      NBA
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Los Angeles Lakers</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Utah Jazz</label>
      </div>
    </div>
  );
};

export default NBA;
