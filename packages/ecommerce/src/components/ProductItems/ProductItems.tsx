// import { useEffect } from "react";
import { Product } from "./ProductItem/product.type";
import ProductItem from "./ProductItem/ProductItem";
import "./ProductItems.css";

/**
 * display the list of products
 * @param param0
 * @returns
 */
export default function ProductItems({
  products,
  category = "",
}: {
  products: Array<Product>;
  category?: string | undefined;
}) {
  if (category !== "") {
    products = products.filter((product) => product.category == category);
  }
  return (
    <div className="product-wrap">
      <div className="product-list">
        {products.map((product: Product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
