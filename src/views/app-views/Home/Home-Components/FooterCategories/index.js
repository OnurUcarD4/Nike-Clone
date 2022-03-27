import React from "react";
import "./FooterCategories.scss";

const FooterCategories = () => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mt-20 text-center">
      <div className="col-span-1">
        <span>Ayakkabılar</span>
        <ul className="footer-categories">
          <li>Tüm Ayakkabılar</li>
          <li>Antrenman Ayakkabıları</li>
          <li>Kramponlar</li>
          <li>Koşu Ayakkabıları</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span>Giysiler</span>
        <ul className="footer-categories">
          <li>Tüm Giysiler</li>
          <li>Üstler</li>
          <li>Eşofman Altları ve Taytlar</li>
          <li>Ceketler</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span>Çocuk</span>
        <ul className="footer-categories">
          <li>Çocuk Antrenman Ayakkabıları</li>
          <li>Çocuk Sırt Çantaları</li>
          <li>Çocuk Kramponları</li>
          <li>Çocuk Koşu Ayakkabıları</li>
        </ul>
      </div>
      <div className="col-span-1">
        <span>Öne Çıkanlar</span>
        <ul className="footer-categories">
          <li>Yeni Çıkanlar</li>
          <li>Nike Run Club</li>
          <li>Nike Training Club</li>
          <li>Sırt Çantaları ve Çantalar</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterCategories;
