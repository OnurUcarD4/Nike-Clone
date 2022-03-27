import React from "react";

const GridIcons = ({ options }) => {
  return (
    <div className="flex gap-2 text-[#333] ">
      {options.map((e) => {
        return (
          <a href={e.Link}>
            <div
              className="hover:text-[#666] cursor-pointer"
              dangerouslySetInnerHTML={{ __html: e.Icon }}
            ></div>
          </a>
        );
      })}
    </div>
  );
};

export default GridIcons;
