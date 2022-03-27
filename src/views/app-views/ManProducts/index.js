import React, { useEffect } from "react";
import Activities from "./ManProducts-Components/Activities";
import Brands from "./ManProducts-Components/Brands";
import Card from "./ManProducts-Components/Card";
import Colors from "./ManProducts-Components/Colors";
import Design from "./ManProducts-Components/Design";
import Gender from "./ManProducts-Components/Gender";
import HeadText from "./ManProducts-Components/HeadText";
import Icons from "./ManProducts-Components/Icons";
import Kid from "./ManProducts-Components/Kid";
import List from "./ManProducts-Components/List";
import NBA from "./ManProducts-Components/NBA";
import Partner from "./ManProducts-Components/Partner";
import Price from "./ManProducts-Components/Price";
import Spor from "./ManProducts-Components/Spor";
import "./Products.scss";

const ManProducts = () => {
  useEffect(() => {
    document.title = "Erkek Ayakkabılar. Nike TR";
  }, []);
  const cardData = [
    {
      Id: 1,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec3731d2-8c98-4a5d-ba02-405bfbe24f8f/air-max-terrascape-90-ayakkabısı-Lxf5bw.png",
      New: true,
      Title: "Nike Air Max Terrascape 90",
      Desc: "Erkek Ayakkabısı",
      Color: "2 Renk",
      Price: "2.179,90",
    },
    {
      Id: 2,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec3cdf8f-ecd3-47d5-8206-655f7272177b/air-max-dawn-ayakkabısı-MmLxf4.png",
      New: true,
      Title: "Nike Air Max Dawn",
      Desc: "Erkek Ayakkabısı",
      Color: "4 Renk",
      Price: "1.669,90",
    },
    {
      Id: 3,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c4e6929-fbbc-495e-b8af-ec76d6e163fd/winflo-8-yol-koşu-ayakkabısı-LHnhnx.png",
      New: false,
      Title: "Nike WinFlo 8",
      Desc: "Erkek Yol Koşu Ayakkabısı",
      Color: "1 Renk",
      Price: "1.449,90",
    },
    {
      Id: 4,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a17c1c96-1088-4ea6-bd8d-be5e8dca2110/zoomx-vaporfly-next-2-yol-yarış-ayakkabısı-dxSLFw.png",
      New: false,
      Title: "Nike ZoomX Vaporfly Next% 2",
      Desc: "Erkek Yol Yarış Ayakkabısı",
      Color: "5 Renk",
      Price: "3.629,90",
    },
    {
      Id: 5,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/erzfadfpnzgkxt0gn2ya/air-max-plus-ayakkabısı-nnTrAZe0.png",
      New: true,
      Title: "Nike Air Max Plus",
      Desc: "Erkek Ayakkabısı",
      Color: "2 Renk",
      Price: "2.469,90",
    },
    {
      Id: 6,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b8992c10-41af-4da9-b2b7-2799e74a095d/blazer-mid-77-jumbo-ayakkabısı-g1NlvJ.png",
      New: false,
      Title: "Nike Blazer Mid '77 Jumbo",
      Desc: "Erkek Ayakkabısı",
      Color: "3 Renk",
      Price: "1.599,90",
    },
    {
      Id: 7,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eee9bf47-49ae-42ac-9250-1e9a86f139e3/zoom-fly-4-yol-koşu-ayakkabısı-dxPLb2.png",
      New: false,
      Title: "Nike Zoom Fly 4",
      Desc: "Yol Koşu Ayakkabısı",
      Color: "1 Renk",
      Price: "2.469,90",
    },
    {
      Id: 8,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/caa25160-c0bb-439f-97e6-28832414b8a9/pegasus-trail-3-gore-tex-su-geçirmez-arazi-tipi-koşu-ayakkabısı-SH97wQ.png",
      New: false,
      Title: "Nike Pegasus Trail 3 GORE-TEX",
      Desc: "Su Geçirmez Arazi Tipi Erkek Koşu Ayakkabısı",
      Color: "3 Renk",
      Price: "2.179,90",
    },
    {
      Id: 9,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/881f86ad-162d-4444-bf7e-979298cc6bb0/air-huarache-ayakkabısı-kbDR5S.png",
      New: false,
      Title: "Nike Air Huarache",
      Desc: "Erkek Ayakkabısı",
      Color: "7 Renk",
      Price: "1.599,90",
    },
    {
      Id: 10,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/881f86ad-162d-4444-bf7e-979298cc6bb0/air-huarache-ayakkabısı-kbDR5S.png",
      New: false,
      Title: "Nike Air Huarache",
      Desc: "Erkek Ayakkabısı",
      Color: "7 Renk",
      Price: "1.599,90",
    },
    {
      Id: 11,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1659b94a-3b7f-49e3-98da-c8d87b1cf719/air-max-plus-3-ayakkabısı-vj1h7C.png",
      New: false,
      Title: "Nike Air Max Plus 3",
      Desc: "Erkek Ayakkabısı",
      Color: "2 Renk",
      Price: "2.599,90",
    },
    {
      Id: 12,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1659b94a-3b7f-49e3-98da-c8d87b1cf719/air-max-plus-3-ayakkabısı-vj1h7C.png",
      New: false,
      Title: "Nike Air Zoom Terra Kiger 8",
      Desc: "Arazi Tipi Erkek Koşu Ayakkabısı",
      Color: "3 Renk",
      Price: "2.029,90",
    },
    {
      Id: 13,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16f5a345-9c2c-44d5-9657-ca0d7d5a69b7/kyrie-infinity-basketbol-ayakkabısı-kmX2jc.png",
      New: true,
      Title: "Kyrie Infinity",
      Desc: "Basketbol Ayakkabısı",
      Color: "3 Renk",
      Price: "1.899,90",
    },
    {
      Id: 14,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9bba7778-8deb-4682-bf92-ee2e7874144e/air-trainer-1-sp-ayakkabısı.png",
      New: false,
      Title: "Nike Air Trainer 1 SP",
      Desc: "Erkek Ayakkabısı",
      Color: "2 Renk",
      Price: "1.899,90",
    },
    {
      Id: 15,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88d0be0c-a32e-4c17-8817-2b06346c82d7/air-zoom-superrep-3-hiit-dersi-ayakkabısı-CDk5j2.png",
      New: false,
      Title: "Nike Air Zoom SuperRep 3",
      Desc: "Erkek HIIT Dersi Ayakkabısı",
      Color: "3 Renk",
      Price: "1.899,90",
    },
    {
      Id: 16,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0e2c1c9a-1502-4826-b95e-6a5fd92bb766/metcon-7-antrenman-ayakkabısı-mj0r6f.png",
      New: false,
      Title: "Nike Metcon 7",
      Desc: "Antrenman Ayakkabısı",
      Color: "7 Renk",
      Price: "1.899,90",
    },
    {
      Id: 17,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a5b0caa8-4528-45b3-b880-960ee05d4726/acg-air-mada-ayakkabısı.png",
      New: false,
      Title: "Nike ACG Air Mada",
      Desc: "Erkek Ayakkabısı",
      Color: "3 Renk",
      Price: "2.099,90",
    },
    {
      Id: 18,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f43cc86d-2760-4795-83a5-4d744e02e826/lebron-19-basketbol-ayakkabısı-Tshbtg.png",
      New: false,
      Title: "LeBron 19",
      Desc: "Basketbol Ayakkabısı",
      Color: "1 Renk",
      Price: "2.749,90",
    },
    {
      Id: 19,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b834d92-ac9f-4630-9e74-5e4a21baca79/court-zoom-vapor-cage-4-rafa-sert-kort-tenis-ayakkabısı-1t7FzV.png",
      New: true,
      Title: "NikeCourt Zoom Vapor Cage 4 Rafa",
      Desc: "Sert Kort Erkek Tenis Ayakkabısı",
      Color: "4 Renk",
      Price: "1.749,90",
    },
    {
      Id: 20,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/099a173f-90fb-4c91-b079-6317341576a8/air-jordan-13-retro-low-ayakkabısı.png",
      New: true,
      Title: "Air Jordan 13 Retro Low",
      Desc: "Erkek Ayakkabısı",
      Color: "1 Renk",
      Price: "3.199,90",
    },
    {
      Id: 21,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/860d504a-1cb7-428e-80d8-30c0bec94689/custom-nike-react-infinity-run-3-by-you.png",
      New: true,
      Title: "Nike React Infinity Run 3 By You",
      Desc: "Kişiye Özel Erkek Yol Koşu Ayakkabısı",
      Color: "6 Renk",
      Price: "2.759,90",
    },
    {
      Id: 22,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d550e5ad-44bc-4b04-b9e7-53e5f65cf475/sb-chron-2-canvas-kaykay-ayakkabısı-dpsMv8.png",
      New: true,
      Title: "Nike SB Chron 2 Canvas",
      Desc: "Kaykay Ayakkabısı",
      Color: "4 Renk",
      Price: "699,90",
    },
    {
      Id: 23,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e0a3ff9-a45b-4273-a25a-d748e4d6d82a/react-infinity-run-flyknit-3-yol-koşu-ayakkabısı-Rxz40r.png",
      New: true,
      Title: "Nike React Infinity Run Flyknit 3",
      Desc: "Erkek Yol Koşu Ayakkabısı",
      Color: "1 Renk",
      Price: "2.329,90",
    },
    {
      Id: 24,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/cf96444a-d294-4007-9f99-b5a504dfdcd0/sb-shane-prm-kaykay-ayakkabısı-HmMWl4.png",
      New: true,
      Title: "Nike SB Shane PRM",
      Desc: "Kaykay Ayakkabısı",
      Color: "1 Renk",
      Price: "929,90",
    },
    {
      Id: 25,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dad71c8-87be-4e92-99a5-a7e69712c2d3/go-flyease-ayakkabı-84H33P.png",
      New: true,
      Title: "Nike Go FlyEase",
      Desc: "Ayakkabı",
      Color: "4 Renk",
      Price: "1.799,90",
    },
    {
      Id: 26,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b6b4d627-30d1-40fd-a3bb-5375a693e172/air-jordan-7-retro-se-ayakkabısı.png",
      New: true,
      Title: "Air Jordan 7 Retro SE",
      Desc: "Erkek Ayakkabısı",
      Color: "1 Renk",
      Price: "3.199,90",
    },
    {
      Id: 27,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/12bcc23c-d25b-4958-8f0e-36f88e9d960c/jordan-zoom-separate-basketbol-ayakkabısı-WbB4xC.png",
      New: true,
      Title: "Jordan Zoom Separate",
      Desc: "Basketbol Ayakkabısı",
      Color: "3 Renk",
      Price: "1.749,90",
    },
    {
      Id: 28,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8a1cc5d3-f6ac-45ea-849d-b25a96dff0bc/tiempo-legend-9-academy-mg-çoklu-zemin-kramponu-LSHTHQ.png",
      New: true,
      Title: "Nike Tiempo Legend 9 Academy MG",
      Desc: "Çoklu Zemin Kramponu",
      Color: "1 Renk",
      Price: "1.099,90",
    },
    {
      Id: 29,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16daa42d-92e3-44d1-a2c4-b175431af49b/air-jordan-1-ayakkabı.png",
      New: false,
      Title: "Air Jordan 1",
      Desc: "Ayakkabı",
      Color: "2 Renk",
      Price: "2.899,90",
    },
    {
      Id: 30,
      Image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c01e0621-7fa0-43c0-95d7-c197bc4acd16/10-sacai-blazer-low-ayakkabısı.png",
      New: false,
      Title: "Nike x sacai Blazer Low",
      Desc: "Erkek Ayakkabısı",
      Color: "1 Renk",
      Price: "1.799,90",
    },
  ];
  return (
    <div className="mt-4">
      <HeadText />
      <div className="md:grid md:grid-cols-12">
        <div className="md:mt-4 md:w-52 md:max-h-screen md:min-h-[50vh] md:overflow-scroll md:overflow-x-hidden md:col-span-2 md:sticky md:top-10 hidden md:block">
          <List />
          <hr className="mt-4" />
          <Gender />
          <hr className="mt-4" />
          <Kid />
          <hr className="mt-4" />
          <Price />
          <hr className="mt-4" />
          <Spor />
          <hr className="mt-4" />
          <Colors />
          <hr className="mt-4" />
          <Brands />
          <hr className="mt-4" />
          <Icons />
          <hr className="mt-4" />
          <Design />
          <hr className="mt-4" />
          <Activities />
          <hr className="mt-4" />
          <Partner />
          <hr className="mt-4" />
          <NBA />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 col-span-10 h-full  ">
          <Card options={cardData} />
        </div>
      </div>
    </div>
  );
};

export default ManProducts;
