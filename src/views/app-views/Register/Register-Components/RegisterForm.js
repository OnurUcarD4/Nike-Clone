import React, { useState } from "react";
import SelectCountries from "../../LoginModal/LoginModal-Components/SelectCountries";

const RegisterForm = ({ setOturumAc }) => {
  const [Gender, setGender] = useState(undefined);

  return (
    <div className="flex flex-col justify-center text-center items-center">
      <div className="nike-unite-swoosh">
        <img
          src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
          alt="nike"
        />
      </div>
      <div className="header-text">
        <span>NIKE ÜYESİ OL</span>
      </div>
      <form>
        <div className="register-panel-form">
          <input required placeholder="E-posta adresi" type="text" />
          <input required placeholder="Şifre" type="password" />
          <input required placeholder="Adı" type="text" />
          <input required placeholder="Soyadı" type="text" />
          <span className="text-center text-xs mt-2 text-gray-400">
            Her yıl Doğum Gününde Nike Üye Ödülü kazan.
          </span>
          <input required placeholder="gg/aa/yy" type="date" />
          <SelectCountries />
          <div className="flex gap-4 justify-center mt-4 items-center">
            {Gender}
            <button
              type="button"
              onClick={() => setGender(true)}
              className={`${
                Gender ? "border-black" : ""
              } border rounded-md py-2 w-full text-sm px-6`}
            >
              <i
                className={`${Gender ? "visible" : "hidden"} fa-solid fa-check`}
              ></i>{" "}
              Erkek
            </button>{" "}
            <button
              type="button"
              onClick={() => setGender(false)}
              className={`${
                Gender ? "" : "border-black"
              } border rounded-md py-2 text-sm w-full px-6`}
            >
              <i
                className={`${Gender ? "hidden" : "visible"} fa-solid fa-check`}
              ></i>{" "}
              Kadın
            </button>
          </div>
          <span className="register-panel-desc">
            Hesap oluşturarak Nike'ın{" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Gizlilik Politikası
            </a>
            'nı ve <br />{" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Kullanım Şartları
            </a>
            'nı kabul etmiş olursun.
          </span>
          <button className="register-panel-button">BİZE KATIL</button>
          <span className="text-xs text-center mt-4">
            Zaten üye misin?{" "}
            <span
              onClick={() => setOturumAc(false)}
              className="underline cursor-pointer"
            >
              Oturum Aç.
            </span>{" "}
          </span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
