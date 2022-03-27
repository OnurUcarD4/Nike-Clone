import React from "react";

const GridHelp = ({ options }) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer text-left">
      {options.map((e) => (
        <span key={e.Id}>{e.Title}</span>
      ))}
    </div>
  );
};

export default GridHelp;
