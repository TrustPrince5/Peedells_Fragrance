import ProductItems from "./ProductItems";
import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Trending() {
  const { trending } = useContext(ProductContext);

  return (
    <div className="mt-7">
      <h2>Trending Products</h2>
      <div className="parent grid grid-cols-1 md:grid-cols-4 mt-5 gap-4">
        {trending.map((item) => (
          <ProductItems key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Trending;
