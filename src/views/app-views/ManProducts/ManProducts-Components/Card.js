import React from "react";

const Card = ({ options }) => {
  return (
    <>
      {options.map((e) => {
        return (
          <div className="cursor-pointer">
            <img className="mb-2" src={e.Image} alt={e.Title} />
            <div className="flex flex-col">
              {e.New ? (
                <span className="text-orange-500">Yeni Satışa Sunuldu</span>
              ) : (
                ""
              )}
              <span>{e.Title}</span>
              <span className="text-gray-400">{e.Desc}</span>
              <span className="text-gray-400">{e.Color}</span>
              <span className="mt-2">₺{e.Price}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
