import React, { useEffect } from "react";

const LoginForm = ({ setOturumAc }) => {
  useEffect(() => {
    document.title = "Giriş Yap. Nike TR";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="nike-unite-swoosh">
        <img
          src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
          alt="nike"
        />
      </div>
      <div className="header-text">
        <span>
          NIKE'A DAİR HER ŞEY İÇİN <br /> HESABIN
        </span>
      </div>
      <form>
        <div className="login-panel-form">
          <input required placeholder="E-posta adresi" type="text" />
          <input required placeholder="Şifre" type="password" />
          <span className="login-panel-desc">
            Oturum açarak Nike'ın{" "}
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
          <button className="login-panel-button">OTURUM AÇ</button>
          <span className="text-center mt-4 text-xs">
            Üye değil misin?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setOturumAc(true)}
            >
              Bize Katıl.
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
