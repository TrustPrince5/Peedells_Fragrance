import React from "react";
import Container from "../component/shared/Container";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductItems from "../component/ProductItems";
import Loader from "../component/Loader";

function Products() {
  const { product } = useContext(ProductContext);
  return (
    <Container>
      <div className={" text-center my-8 font-sans space-y-5"}>
        <h2 className="text-3xl uppercase font-bold">Our Products</h2>
        <p>Explore our wide range of products</p>
      </div>

      <div className="parent grid grid-cols-1 md:grid-cols-4 gap-4 mt-7">
        {product.map((item) => (
          <ProductItems key={item?.id} item={item} />
        ))}
      </div>
       
      {/* <div className="parent grid grid-cols-4 md:grid-cols-3 gap-4 mt-7">
        {product.map((item) => (
          <ProductItems key={item.id} item={item} />
        ))}
      </div> */}
    </Container>
  );
}

export default Products;
