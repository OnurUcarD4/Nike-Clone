import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Navbar-Components/Menu";
import "./navbar.scss";

const Navbar = () => {
  const newProducts = [
    {
      Id: 1,
      Name: "Öne Çıkanlar",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Tüm Yeni Sezon Ürünlerini İncele",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "SNKRS Lansman Takvimi",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Yeni Erkek Ürünleri",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "Giysiler",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Ekipmanlar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Tüm Yeni Erkek Ürünlerini İncele",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Yeni Kadın Ürünleri",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Ayakkabılar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Giysiler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Ekipmanlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Tüm Yeni Kadın Ürünlerini İncele",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Yeni Çocuk Ürünleri",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Erkek Çocuk Ayakkabıları",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Erkek Çocuk Giysileri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Kız Çocuk Ayakkabıları",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Kız Çocuk Giysileri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Tüm Yeni Çocuk Ürünlerini İncele",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Markaya Göre İncele",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Nike Sportswear",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "NikeLab",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Jordan",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Nike SB",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "ACG",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Nike Pro",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];
  const manProducts = [
    {
      Id: 1,
      Name: "Öne Çıkanlar",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Yeni Çıkanlar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "İlkbaharın Başlangıcı",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "SNKRS Lansman Takvimi",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Üye Erişimi",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "En Çok Satanlar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "Sürdürülebilir Malzemeler",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "Temel Nike Ürünleri",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Ayakkabılar",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Tüm Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "İndirimdeki Tüm Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Günlük Giyim",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Koşu",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Basketbol",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Futbol",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Jordan",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Spor Salonu Ve Antrenman",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2008,
          Name: "Kaykay",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2009,
          Name: "Tenis",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2010,
          Name: "Golf",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2011,
          Name: "Nike By You ile Kişiselleştir",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Giysiler",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Tüm Giysiler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "İndirimdeki Tüm Giysiler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Üstler ve Tişörtler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Eşofmanlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Uyumlu Setler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Şortlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3008,
          Name: "Ceketler ve Yelekler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3009,
          Name: "Formalar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3010,
          Name: "Polo Üstler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3011,
          Name: "Büyük Beden ve Uzun Boy",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3012,
          Name: "Çoraplar",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Spora Göre İncele",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Koşu",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Futbol",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Basketbol",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Tenis",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Golf",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4005,
          Name: "Spor Salonu ve Antrenman",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4006,
          Name: "Cross Training",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4007,
          Name: "Kaykay",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4008,
          Name: "Yoga",
          Parent: 4,
          Children: [],
        },
      ],
    },
  ];
  const womanProducts = [
    {
      Id: 1,
      Name: "Öne Çıkanlar",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Yeni Çıkanlar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "İlkbaharın Başlangıcı",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "SNKRS Lansman Takvimi",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Üye Erişimi",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "En Çok Satanlar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "Sürdürülebilir Malzemeler",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "Temel Nike Ürünleri",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Ayakkabılar",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Tüm Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "İndirimdeki Tüm Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Günlük Giyim",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Koşu",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Basketbol",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Futbol",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Jordan",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Spor Salonu Ve Antrenman",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2008,
          Name: "Kaykay",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2009,
          Name: "Tenis",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2010,
          Name: "Golf",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2011,
          Name: "Nike By You ile Kişiselleştir",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Giysiler",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Tüm Giysiler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "İndirimdeki Tüm Giysiler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Üstler ve Tişörtler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Eşofmanlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Uyumlu Setler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Şortlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3008,
          Name: "Ceketler ve Yelekler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3009,
          Name: "Formalar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3010,
          Name: "Polo Üstler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3011,
          Name: "Büyük Beden ve Uzun Boy",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3012,
          Name: "Çoraplar",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Spora Göre İncele",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Koşu",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Futbol",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Basketbol",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Tenis",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Golf",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4005,
          Name: "Spor Salonu ve Antrenman",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4006,
          Name: "Cross Training",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4007,
          Name: "Kaykay",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4008,
          Name: "Yoga",
          Parent: 4,
          Children: [],
        },
      ],
    },
  ];
  const kidProducts = [
    {
      Id: 1,
      Name: "Öne Çıkanlar",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Yeni Çıkanlar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "İlkbaharın Başlangıcı",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "Fleece",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Spor Ekipmanları",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "Dans",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "En Çok Satanlar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "Sürdürülebilir Malzemeler",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Ayakkabılar",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Tüm Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "Tüm Spor Ayakkabıları",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Bebek (17-27)",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Küçük Çocuk (27,5-35)",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Genç Çocuk (35,5-40)",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Günlük Giyim",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Futbol",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Koşu",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2008,
          Name: "Jordan",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2009,
          Name: "Air Max",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2010,
          Name: "Air Force 1",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Erkek Çocuk Giysileri",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Tüm Erkek Çocuk Giysileri",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Bebek (0-36 Ay)",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Küçük Çocuk (96-128 CM)",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Genç Çocuk (122-170 CM)",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Spor Giysileri",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Eşofmanlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3008,
          Name: "Ceketler ve Yelekler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3009,
          Name: "Üstler ve Tişörtler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3010,
          Name: "Şortlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3011,
          Name: "Formalar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3012,
          Name: "Çoraplar",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Kız Çocuk Giysileri",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Tüm Kız Çocuk Giysileri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Bebek (0-36 Ay)",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Küçük Çocuk (96-128 CM)",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Genç Çocuk (122-170 CM)",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Spor Giysileri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4005,
          Name: "Spor Sütyenleri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4006,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4007,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4008,
          Name: "Eşofmanlar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4009,
          Name: "Ceketler ve Yelekler",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4010,
          Name: "Şortlar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4011,
          Name: "Etekler ve Elbiseler",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4012,
          Name: "Formalar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4013,
          Name: "Çoraplar",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Bebek",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Kız Bebek",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "Erkek Bebek",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Tüm Bebek Ayakkabıları",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Tüm Bebek Giysileri",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "Bebek Setleri",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];
  const saleProducts = [
    {
      Id: 1,
      Name: "Öne Çıkanlar",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Tüm İndirimli Ürünleri İncele",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "Kış Stilleri İndirimi",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Erkekler İçin İndirimli Ürünler",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Erkekler İçin En Çok Satanlar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "Ayakkabılar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Giysiler",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Aksesuarlar ve Ekipmanlar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Ceketler ve Yelekler",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Tüm İndirimli Erkek Ürünlerini İncele",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Kadınlar İçin İndirimli Ürünler",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Kadınlar İçin En Çok Satanlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "Ayakkabılar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Giysiler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Aksesuarlar ve Ekipmanlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3004,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3005,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3006,
          Name: "Ceketler ve Yelekler",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3007,
          Name: "Spor Sütyenleri",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3008,
          Name: "Tüm İndirimli Kadın Ürünlerini İncele",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Çocuklar İçin İndirimli Ürünler",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Çocuklar İçin En Çok Satanlar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Ayakkabılar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Giysiler",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Aksesuarlar ve Ekipmanlar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Kapüşonlu Üstler ve Sweatshirt'ler",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4005,
          Name: "Eşofman Altları ve Taytlar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4006,
          Name: "Ceketler ve Yelekler",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4007,
          Name: "Spor Sütyenleri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4008,
          Name: "Tüm İndirimli Çocuk Ürünlerini İncele",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Spora Göre İndirimli Ürünler",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Koşu",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "Spor Salonu ve Antrenman",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Yoga",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Futbol",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "Basketbol",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Tenis",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5006,
          Name: "Golf",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];
  const collectionProducts = [
    {
      Id: 1,
      Name: "Trend Ürünler",
      Parent: null,
      Children: [
        {
          Id: 1000,
          Name: "Air Ayakkabılar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1001,
          Name: "FlyEase",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1002,
          Name: "Flyknit",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1003,
          Name: "Nike Free",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1004,
          Name: "Metcon",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1005,
          Name: "Air Zoom",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1006,
          Name: "FlyEase",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1007,
          Name: "SB Janoski",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1008,
          Name: "Jordan X Paris Saint-Germain",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1009,
          Name: "LeBron James Ayakkabıları",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1010,
          Name: "SuperRep Ayakkabılar",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1011,
          Name: "Kadınlar İçin Air Force 1",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1012,
          Name: "Beyaz Air Force 1",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1013,
          Name: "Netbol",
          Parent: 1,
          Children: [],
        },
        {
          Id: 1014,
          Name: "Temel Nike Ürünleri",
          Parent: 1,
          Children: [],
        },
      ],
    },
    {
      Id: 2,
      Name: "Günlük Giyim",
      Parent: null,
      Children: [
        {
          Id: 2000,
          Name: "Air Force 1",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2001,
          Name: "Blazer",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2002,
          Name: "Air Max",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2003,
          Name: "Air Max 1",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2004,
          Name: "Air Max 90",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2005,
          Name: "Air Max 95",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2006,
          Name: "Air Max 97",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2007,
          Name: "Air Max 270",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2008,
          Name: "Air Max 720",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2009,
          Name: "Air Max 2090",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2010,
          Name: "Air Max Plus",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2011,
          Name: "VaporMax",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2012,
          Name: "Staple Kicks",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2013,
          Name: "Cortez",
          Parent: 2,
          Children: [],
        },
        {
          Id: 2014,
          Name: "Air Jordan 1",
          Parent: 2,
          Children: [],
        },
      ],
    },
    {
      Id: 3,
      Name: "Koşu",
      Parent: null,
      Children: [
        {
          Id: 3000,
          Name: "Joyride",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3001,
          Name: "React",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3002,
          Name: "Pegasus",
          Parent: 3,
          Children: [],
        },
        {
          Id: 3003,
          Name: "Air Zoom",
          Parent: 3,
          Children: [],
        },
      ],
    },
    {
      Id: 4,
      Name: "Futbol",
      Parent: null,
      Children: [
        {
          Id: 4000,
          Name: "Phantom",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4001,
          Name: "Mercurial",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4002,
          Name: "Tiempo",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4003,
          Name: "Futsal",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4004,
          Name: "Kişiye Özel Formalar",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4005,
          Name: "Milli Takım Koleksiyonu",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4006,
          Name: "Futbol Kulüpleri",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4007,
          Name: "F.C. Barcelona",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4008,
          Name: "Liverpool F.C.",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4009,
          Name: "Paris Saint-Germain",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4010,
          Name: "Chelsea",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4011,
          Name: "Tottenham Hotspur",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4012,
          Name: "Nike Football Training",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4013,
          Name: "Cristiano Ronaldo",
          Parent: 4,
          Children: [],
        },
        {
          Id: 4014,
          Name: "Inter Milan",
          Parent: 4,
          Children: [],
        },
      ],
    },
    {
      Id: 5,
      Name: "Spora Göre İndirimli Ürünler",
      Parent: null,
      Children: [
        {
          Id: 5000,
          Name: "Koşu",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5001,
          Name: "Spor Salonu ve Antrenman",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5002,
          Name: "Yoga",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5003,
          Name: "Futbol",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5004,
          Name: "Basketbol",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5005,
          Name: "Tenis",
          Parent: 5,
          Children: [],
        },
        {
          Id: 5006,
          Name: "Golf",
          Parent: 5,
          Children: [],
        },
      ],
    },
  ];

  return (
    <nav className="flex justify-between items-center">
      <div className="Logo hover:opacity-50 cursor-pointer">
        <Link to="/home">
          <svg
            class="pre-logo-svg"
            height="60px"
            width="60px"
            fill="#111"
            viewBox="0 0 69 32"
          >
            <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
          </svg>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fa-solid fa-bars"></i>
        </label>

        <ul>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fa-solid fa-x close hidden"></i>
          </label>
          <Link to="/erkek">
            <li>
              Yeni Çıkanlar
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={newProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/erkek">
            <li>
              Erkek
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-4 gap-4">
                  {" "}
                  <Menu options={manProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/erkek">
            <li>
              Kadın
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-4 gap-4">
                  <Menu options={womanProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/erkek">
            <li>
              Çocuk
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={kidProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/erkek">
            <li>
              İndirim
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={saleProducts} />
                </div>
              </div>
            </li>
          </Link>
          <Link to="/erkek">
            <li>
              Koleksiyonlar
              <div className="yeni-cikanlar hidden">
                <div className="grid grid-cols-5 gap-4">
                  <Menu options={collectionProducts} />
                </div>
              </div>
            </li>
          </Link>
        </ul>
        <div className="absolute right-28 hidden lg:block">
          <i className="fa-solid fa-magnifying-glass absolute top-1.5 left-2 opacity-50 text-lg"></i>
          <input
            placeholder="Ara..."
            className="bg-[#f0efef] p-2 rounded-full w-40 pl-8 hover:bg-[#ebe9e9]"
            type="text"
          />
        </div>
      </div>
      <div className="mr-5 items-center hidden lg:flex">
        <div className="button-right">
          <Link to="/favorites">
            <svg
              className=""
              width="24px"
              height="24px"
              fill="#111"
              viewBox="0 0 24 24"
            >
              <path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path>
            </svg>
          </Link>
        </div>
        <Link to="/cart">
          <div className="button-right">
            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24">
              <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
              <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
            </svg>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
