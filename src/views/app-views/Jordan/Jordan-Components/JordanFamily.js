import React from "react";

const JordanFamily = () => {
  return (
    <div className="mt-10">
      <span className="font-extrabold tracking-tight text-2xl">
        JORDAN AİLESİNE HOŞ GELDİN
        <div className="img-wrapper mt-6 flex flex-col gap-2">
          <img
            className="md:hidden"
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/512307ac-f611-499c-aa6b-ef49d3174d8e/image.png"
            alt="img"
          />
          <img
            className="hidden md:block"
            src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/896130fc-9251-4406-9dde-2ac4c9f2a741/image.jpg"
            alt="jordan"
          />
          <div className="flex flex-col  mt-4 text-center justify-center  md:flex">
            <span className="text-3xl mb-2 md:text-5xl">
              BURADA OLMANIN BİR SEBEBİ VAR
            </span>
            <span className="text-base font-thin tracking-wide md:text-lg">
              Hepimiz Jordan Family DNA'sını taşıyoruz. Çok çalışma, azim.
              <br />
              İhtişam ve motivasyonla aklına koyduğun <br /> her şeyi
              yapabilirsin. Çünkü burada olmanın bir sebebi var.
            </span>
          </div>
        </div>
      </span>
    </div>
  );
};

export default JordanFamily;
