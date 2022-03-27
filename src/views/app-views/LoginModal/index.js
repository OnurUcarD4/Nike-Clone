import React, { useState } from "react";
import "./LoginModal.scss";
import Modal from "react-modal";
import SelectCountries from "./LoginModal-Components/SelectCountries";

const LoginModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [Gender, setGender] = useState(undefined);
  const [RegisterModalIsOpen, RegisterIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeHandleRegister() {
    setIsOpen(false);
    openRegister();
  }
  function closeHandleLogin() {
    setIsOpen(true);
    closeRegister();
  }

  function openRegister() {
    RegisterIsOpen(true);
  }
  function closeRegister() {
    RegisterIsOpen(false);
  }
  return (
    <>
      <li onClick={openModal}>Oturum Aç</li>
      <div>
        <Modal
          className="Modal"
          isOpen={modalIsOpen}
          closeTimeoutMS={500}
          onRequestClose={closeModal}
          style={customStyles}
          overlayClassName="Overlay"
        >
          <button className="absolute top-2 right-3" onClick={closeModal}>
            <i class="fa-solid fa-x"></i>
          </button>
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
                  onClick={closeHandleRegister}
                >
                  Bize Katıl.
                </span>
              </span>
            </div>
          </form>
        </Modal>
        <Modal
          className="Modal"
          isOpen={RegisterModalIsOpen}
          onRequestClose={closeRegister}
          closeTimeoutMS={2000}
          style={customStyles}
          overlayClassName="Overlay"
        >
          <button className="absolute top-2 right-3" onClick={closeRegister}>
            <i class="fa-solid fa-x"></i>
          </button>
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
                    className={`${
                      Gender ? "visible" : "hidden"
                    } fa-solid fa-check`}
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
                    className={`${
                      Gender ? "hidden" : "visible"
                    } fa-solid fa-check`}
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
                  className="underline cursor-pointer"
                  onClick={closeHandleLogin}
                >
                  Oturum Aç.
                </span>{" "}
              </span>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default LoginModal;
