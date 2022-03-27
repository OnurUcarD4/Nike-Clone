import React, { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    document.title = "Favoriler | Nike Clone";
  }, []);
  return (
    <div className="mt-4">
      <h1 className="text-xl">Favoriler</h1>
      <div className="flex text-center justify-center mt-10 text-xl">
        Favorilerine eklenen öğeler buraya kaydedilecek.
      </div>
    </div>
  );
};

export default Favorites;
