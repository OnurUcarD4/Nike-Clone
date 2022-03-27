import SliderMain from "Components/Slider";
import React, { useEffect } from "react";
import Background from "./Jordan-Components/Background";
import JordanCategories from "./Jordan-Components/JordanCategories";
import JordanFamily from "./Jordan-Components/JordanFamily";
import Main from "./Jordan-Components/Main";
import OtherJordan from "./Jordan-Components/OtherJordan";

const Jordan = () => {
  const SliderJordan = [
    {
      Id: 1,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/18363fd7-d557-4c97-956a-722a392dfce1/paris-saint-germain-2022-23-stadyum-dördüncü-dri-fit-genç-futbol-forması-Kw8xlh.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "NİKE DRİ-FIT GENÇ ÇOCUK FUTBOL FORMASI",
      Price: "₺949,90",
    },
    {
      Id: 2,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/273c9d02-7f70-4a50-87ad-585dd78bb51a/paris-saint-germain-2022-23-stadyum-dördüncü-dri-fit-futbol-forması-jjJCgn.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "NİKE DRİ-FIT KADIN FUTBOL FORMASI",
      Price: "₺1.229,90",
    },
    {
      Id: 3,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/7e8e6f63-a44a-41dd-9950-2b60c970d0e2/paris-saint-germain-2022-23-maç-dördüncü-dri-fit-adv-futbol-forması-DGxb9Z.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "NİKE DRİ-FIT ADV ERKEK FUTBOL FORMASI",
      Price: "₺1.899,90",
    },
    {
      Id: 4,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/6e56f3a0-04ee-49ea-b464-5c262326c6e6/jordan-10-paris-saint-germain-fleece-eşofman-altı-qQX38k.png",
      Title: "JORDAN X PARİS SAİNT-GERMAİN",
      Desc: "FLEECE KADIN EŞOFMAN ALTI",
      Price: "₺1.159,90",
    },
    {
      Id: 5,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/23a9ecf8-689b-4481-baa5-2dcdbf462442/jordan-10-paris-saint-germain-fleece-kapüşonlu-üstü-cQvPk9.png",
      Title: "JORDAN X PARİS SAİNT-GERMAİN",
      Desc: "FLEECE KADIN KAPÜŞONLU ÜSTÜ",
      Price: "₺1.299,90",
    },
    {
      Id: 6,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/c9609d91-024c-409e-a373-6c7e81928f0f/paris-saint-germain-2022-23-stadyum-dördüncü-dri-fit-futbol-forması-Gw13JH.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "NİKE DRİ-FIT ERKEK FUTBOL FORMASI",
      Price: "₺1.229,90",
    },
    {
      Id: 7,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/36a16186-21a1-4176-8a5c-748d6a6f4c8b/paris-saint-germain-2022-23-stadyum-dördüncü-dri-fit-futbol-şortu-LdpFBN.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "NİKE DRİ-FIT ERKEK FUTBOL ŞORTU",
      Price: "₺549,90",
    },
    {
      Id: 8,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/13c20aff-0983-4393-8b80-fead9c433b37/paris-saint-germain-2022-23-stadyum-dördüncü-genç-futbol-şortu-JwRl3b.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "GENÇ ÇOCUK FUTBOL ŞORTU",
      Price: "₺479,90",
    },
    {
      Id: 9,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/9df49360-7820-4d46-828c-3d18f914bd6d/paris-saint-germain-grafikli-tişörtü-r0Cb2x.png",
      Title: "PARİS SAİNT-GERMAİN",
      Desc: "GRAFİKLİ KADIN TİŞÖRTÜ",
      Price: "₺629,90",
    },
    {
      Id: 10,
      Image:
        "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_566,c_limit/9df49360-7820-4d46-828c-3d18f914bd6d/paris-saint-germain-grafikli-tişörtü-r0Cb2x.png",
      Title: "PARİS SAİNT-GERMAİN 2022/23 STADYUM DÖRDÜNCÜ",
      Desc: "KÜÇÜK ÇOCUK FUTBOL FORMASI",
      Price: "₺869,90",
    },
  ];
  const JordanCategoriess = [
    {
      Id: 1,
      Title: "JORDAN KADIN",
      MiniImage:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_437,c_limit/38303aea-607e-4abf-b0aa-a28a54cff726/jordan-markas%C4%B1.jpg",
      MainImage:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_2433,c_limit/41eb67d4-7d0c-415b-b370-541433b4afcd/jordan-markası.jpg",
      MainTitle: "FLIGHT",
      Model: "(HER)ITAGE KOLEKSİYONU",
      Desc: "Güçlü tasarım çizgileri ve basketbol mirasını yansıtan desenleriyle rahat et ve kendine güven.",
    },
    {
      Id: 2,
      Title: "JORDAN ERKEK",
      MiniImage:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_437,c_limit/4a753d0f-88fd-43ae-be50-f7c3aca7bd96/jordan-markas%C4%B1.jpg",
      MainImage:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_2433,c_limit/f70b5088-5a57-45e7-b051-7dd03ca13c95/jordan-markası.jpg",
      MainTitle: "JORDAN 23",
      Model: "ENGINEERED",
      Desc: "Gezegenimiz düşünülerek tasarlanan yeni, özel olarak geliştirilen Jordan stilleriyle şehre hükmetmeye hazır ol.",
    },
    {
      Id: 3,
      Title: "JORDAN ÇOCUK",
      MiniImage:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_437,c_limit/4bab22ea-ccc0-4fcf-8ac1-82076405ed73/jordan-markas%C4%B1.jpg",
      MainImage:
        "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_2433,c_limit/c9fce1d7-62cc-4d75-af64-43a8124596e2/jordan-markası.jpg",
      MainTitle: "TEMEL JORDAN",
      Model: "FLEECE STİLLERİ",
      Desc: "Günlük kullanıma uygun, rahat kesimler.",
    },
  ];
  useEffect(() => {
    document.title = "Jordan Markası. Nike TR";
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-24 mt-4"
          src="https://www.nike.com/assets/experience/ciclp/landing-pages/static/v2/214-bc54691f7cf/static/icons/jordan.svg"
          alt="Jordan"
        />
        <Main />
      </div>
      <div className="flex flex-col text-left my-8">
        <SliderMain options={SliderJordan} />
      </div>
      <Background />
      <JordanCategories options={JordanCategoriess} />
      <JordanFamily />
      <OtherJordan />
    </div>
  );
};

export default Jordan;
