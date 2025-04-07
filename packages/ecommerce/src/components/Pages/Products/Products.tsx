import { useParams } from "react-router-dom";
import "./Product.css";
import ProductItems from "../../ProductItems/ProductItems";
import { products } from "./product-list";

/**
 * display the products based on the product category.
 * @returns
 */
export default function Products() {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
      <ProductItems products={products} category={name} />
    </div>
  );
}
