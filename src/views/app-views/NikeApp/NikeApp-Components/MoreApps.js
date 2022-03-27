import React from "react";

const MoreApps = () => {
  const MoreAppConfig = [
    {
      Id: 1,
      Image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_603,c_limit/50855d80-5364-451f-ac7e-583a7f8e6f96/nike-app.jpg",
      Desc: "Nike Training Club",
    },
    {
      Id: 2,
      Image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_603,c_limit/fc04f576-88f6-4bff-8f84-4c1fe6d5d073/nike-app.jpg",
      Desc: "Nike Run Club",
    },
    {
      Id: 3,
      Image:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_603,c_limit/866a0f42-994d-4a6e-9612-ff457a3c4f3b/nike-app.jpg",
      Desc: "SNKRS",
    },
  ];
  return (
    <div className="mt-20">
      <span className="text-2xl">Nike'tan Daha Fazla Uygulama</span>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-3">
        {MoreAppConfig.map((e) => {
          return (
            <div key={e.Id} className="grid-cols-1 cursor-pointer">
              <img className="mb-4 mt-4 md:mb-10" src={e.Image} alt={e.Desc} />
              <span className="text-xl">{e.Desc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreApps;
