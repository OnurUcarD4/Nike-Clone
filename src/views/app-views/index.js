import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Help from "./Help";
import Jordan from "./Jordan";
import NikeApp from "./NikeApp";
import Register from "./Register";

const Home = React.lazy(() => import("./Home"));
const Favorites = React.lazy(() => import("./Favorites"));
const CartPage = React.lazy(() => import("./Cart"));
const HelpPage = React.lazy(() => import("./Help"));
const JordanPage = React.lazy(() => import("./Jordan"));
const NikeAppPage = React.lazy(() => import("./NikeApp"));
const RegisterPage = React.lazy(() => import("./Register"));
const ManProducts = React.lazy(() => import("./ManProducts"));

const AppViews = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/help" element={<Help />} />
        <Route path="/jordan" element={<Jordan />} />
        <Route path="/nike-app" element={<NikeApp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/erkek" element={<ManProducts />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppViews;
