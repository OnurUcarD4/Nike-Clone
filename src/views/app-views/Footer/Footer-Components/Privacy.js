import React from "react";

const Privacy = () => {
  return (
    <div className="mt-10 flex justify-between">
      <span className="text-[#555] text-xs">
        © 2022 Nike, Inc. Tüm Hakları Saklıdır.
      </span>
      <div className="flex gap-4 privacy">
        <span>Rehberler</span>
        <span>Kullanım Şartları</span>
        <span>Satış Şartları</span>
        <span>Şirket Ayrıntıları</span>
        <span>Gizlilik Politikası</span>
      </div>
    </div>
  );
};

export default Privacy;
