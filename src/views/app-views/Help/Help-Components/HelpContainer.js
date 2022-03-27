import React from "react";
import GridHelpNav from "./GridHelpNav";
import HelpContainerHeader from "./HelpContainerHeader";

const HelpContainer = () => {
  const gridCargo = [
    {
      Id: 1,
      Title: "KARGO VE TESLİMAT",
    },
    {
      Id: 2,
      Title: "Nike Si̇pari̇şleri̇nde Ücretsi̇z Kargodan Nasil Yararlanabi̇li̇ri̇m?",
    },
    {
      Id: 3,
      Title: "Nike'in Tesli̇mat Seçenekleri̇ Nelerdi̇r?",
    },
    {
      Id: 4,
      Title: "Nike Si̇pari̇şi̇m Uluslararasi Gönderi̇me Uygun Mu?",
    },
  ];
  const gridRefunds = [
    {
      Id: 1,
      Title: "İADELER",
    },
    {
      Id: 2,
      Title: "Nike siparişimi nasıl iade ederim?",
    },
    {
      Id: 3,
      Title: "Nike'ın iade politikası nedir?",
    },
    {
      Id: 4,
      Title: "Ödeme iadem nerede?",
    },
  ];
  const gridAccounts = [
    {
      Id: 1,
      Title: "NIKE ÜYELİĞİ",
    },
    {
      Id: 2,
      Title: "Nike Üyeliği nedir?",
    },
    {
      Id: 3,
      Title: "Nasıl Nike Üye Profili oluşturabilirim?",
    },
    {
      Id: 4,
      Title:
        "NRC ve NTC uygulamalarından en verimli şekilde nasıl faydalanırım?",
    },
  ];
  const gridOrders = [
    {
      Id: 1,
      Title: "SİPARİŞLER",
    },
    {
      Id: 2,
      Title: "Nike siparişimin durumunu nasıl takip ederim?",
    },
    {
      Id: 3,
      Title: "Nike si̇pari̇şi̇mi̇ i̇ptal edebi̇li̇r mi̇yi̇m veya deği̇şti̇rebi̇li̇r mi̇yi̇m?",
    },
    {
      Id: 4,
      Title: "Nike Si̇pari̇şleri̇nde Hangi̇ Ödeme Seçenekleri̇ni̇ Kullanabi̇li̇ri̇m?",
    },
  ];
  const gridProducts = [
    {
      Id: 1,
      Title: "ÜRÜN BİLGİLERİ",
    },
    {
      Id: 2,
      Title: "Nike'ın en yeni spor ayakkabılarını nasıl edinebilirim?",
    },
    {
      Id: 3,
      Title: "Doğru bedeni/numarayı ve uyumu nasıl bulurum?",
    },
    {
      Id: 4,
      Title: "Nike By You'nin kişiselleştirme politikası nedir?",
    },
    {
      Id: 5,
      Title: "Nike ayakkabıların garantisi var mı?",
    },
  ];
  const gridCorporation = [
    {
      Id: 1,
      Title: "KURUMSAL ",
    },
    {
      Id: 2,
      Title: "Nike, Inc. hakkında daha fazla bilgiye nereden ulaşabilirim?",
    },
    {
      Id: 3,
      Title: "Bana en yakın Nike mağazası nerede?",
    },
  ];
  return (
    <div className="border p-6 mt-4 w-full h-full md:p-16">
      <HelpContainerHeader />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GridHelpNav
          gridCargo={gridCargo}
          gridRefunds={gridRefunds}
          gridAccounts={gridAccounts}
          gridOrders={gridOrders}
          gridProducts={gridProducts}
          gridCorporation={gridCorporation}
        />
      </div>
    </div>
  );
};

export default HelpContainer;
