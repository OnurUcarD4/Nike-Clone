import React from "react";

const JordanCategories = ({ options }) => {
  return (
    <>
      {options.map((e) => {
        return (
          <div key={e.Id} className="mt-10">
            <span className="font-extrabold tracking-tight text-2xl">
              {e.Title}
              <div className="img-wrapper mt-6 flex flex-col gap-2">
                <img className="md:hidden" src={e.MiniImage} alt="img" />
                <img
                  className="hidden md:block"
                  src={e.MainImage}
                  alt="jordan"
                />
                <div className="flex flex-col  mt-4 text-center justify-center  md:flex">
                  <span className="text-3xl">{e.MainTitle}</span>
                  <span className="text-3xl mb-2">{e.Model}</span>
                  <span className="text-base font-thin tracking-wide">
                    {e.Desc}
                  </span>
                </div>

                <div className="flex gap-2 justify-center">
                  <button className="jordan-button text-lg ">İncele</button>
                </div>
              </div>
            </span>
          </div>
        );
      })}
    </>
  );
};

export default JordanCategories;
