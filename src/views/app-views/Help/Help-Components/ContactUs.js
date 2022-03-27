import React from "react";
import ContactUsNav from "./ContactUsNav";

const ContactUs = () => {
  const gridOrders = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/phone.png",
    },
    {
      Id: 2,
      Title: "ÜRÜNLER VE SİPARİŞLER",
    },
    {
      Id: 3,
      Title: "+90 (212) 365 04 90",
    },
    {
      Id: 4,
      Title: "9.00 - 18.00",
    },
    {
      Id: 5,
      Title: "Pazartesi - Cuma",
    },
  ];
  const gridApps = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/phone.png",
    },
    {
      Id: 2,
      Title: "NRC ve NTC",
    },
    {
      Id: 3,
      Title: "+31 (0) 20 5820542",
    },
    {
      Id: 4,
      Title: "9.00 - 18.00",
    },
    {
      Id: 5,
      Title: "Pazartesi - Cuma",
    },
    {
      Id: 6,
      Title: "*Yalnızca İngilizce",
    },
  ];
  const gridMails = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/email.png",
    },
    {
      Id: 2,
      Title: "ÜRÜNLER VE SİPARİŞLER",
    },
    {
      Id: 3,
      Title: "Bize e-posta gönder",
    },
    {
      Id: 4,
      Title: "Bir iş günü içinde",
    },
    {
      Id: 5,
      Title: "sana dönüş yapalım",
    },
    {
      Id: 6,
      Title: "*Yalnızca İngilizce",
    },
  ];
  const gridCorps = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/link.png",
    },
    {
      Id: 2,
      Title: "ŞİRKET BİLGİLERİ VE SORULAR",
    },
    {
      Id: 3,
      Title: "Lütfen Kurumsal İletişim Seçeneklerimize göz at",
    },
  ];
  const gridMarket = [
    {
      Id: 1,
      Image:
        "https://www.nike.com/assets/experience/membership/gethelp/assets/store.png",
    },
    {
      Id: 2,
      Title: "MAĞAZA BULUCU",
    },
    {
      Id: 3,
      Title: "Yakınındaki Nike perakende mağazalarını bul",
    },
  ];

  return (
    <div className="border flex flex-col p-6 mt-4 w-full h-full md:p-16">
      <span className="text-3xl text-left">BİZE ULAŞ</span>
      <hr className="my-4" />
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-6">
        <ContactUsNav
          gridOrders={gridOrders}
          gridApps={gridApps}
          gridMails={gridMails}
          gridCorps={gridCorps}
          gridMarket={gridMarket}
        />
      </div>
    </div>
  );
};

export default ContactUs;
