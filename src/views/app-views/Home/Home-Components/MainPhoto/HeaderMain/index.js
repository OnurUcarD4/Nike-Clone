import React from "react";
import "./HeaderMain.scss";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <span>Yeni Satışa Sunuldu</span>
      <span className="head-text">NIKE AIR MAX DAWN</span>
      <span>
        Koşuya özel retro tasarım öğelerine sahip olan modern Air Max Dawn ile
        konfor alanının dışına çık ve yaratıcılığını konuştur.
      </span>
      <div className="buttons-main">
        <button>İncele</button>
        <button>Çocuk Ürünlerini İncele</button>
      </div>
    </div>
  );
};

export default HeaderMain;
