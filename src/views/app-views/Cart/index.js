import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.scss";

const Cart = () => {
  useEffect(() => {
    document.title = "Sepet | Nike Clone";
  }, []);
  return (
    <div className="container flex justify-around mt-2 ">
      <div className="flex flex-col gap-2">
        <span className="text-2xl">Sepet</span>
        <span>Sepetinde ürün yok.</span>
        <div className="mt-48">
          Favorilerini görüntülemek ister misin?{" "}
          <Link to="/register">
            <span className="underline opacity-70">Bize Katıl</span>
          </Link>{" "}
          veya{" "}
          <Link to="/login">
            <span className="underline opacity-70">Oturum Aç</span>{" "}
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl">Özet</span>
        <span> Ara Toplam: ₺0,00</span>
        <span>Tahmini Kargo ve İşlem Ücreti: ₺0,00</span>
        <hr />
        <span className="font-semibold">
          Toplam: <span>₺0,00</span>
        </span>
        <hr />
        <div className="flex flex-col buttons-cart">
          <button disabled>Misafir Kullanıcı Olarak Ödeme</button>
          <button disabled>Üye Girişi Yaparak Ödeme</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
