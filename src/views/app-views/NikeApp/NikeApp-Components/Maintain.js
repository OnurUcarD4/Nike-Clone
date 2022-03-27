import React from "react";

const Maintain = ({ options }) => {
  return (
    <div className="mt-10">
      <div className="mb-32">
        <span className="text-2xl ">Nike App</span>
      </div>
      {options.map((e) => {
        return (
          <>
            <div key={e.Id} className="img-wrapper-app mb-20 ">
              <div className="md:justify-center md:flex md:items-center">
                <img className="hidden md:block" src={e.Image} alt="nikeapp" />
              </div>

              <img className="md:hidden" src={e.MiniImage} alt="phoneimg" />
              <div className=" justify-center items-center flex">
                <div className="flex flex-col gap-2 mt-10 w-[75%] md:w-[50%]">
                  <span className="text-2xl ">{e.Title}</span>
                  <span className="text-xl">{e.Desc}</span>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Maintain;
