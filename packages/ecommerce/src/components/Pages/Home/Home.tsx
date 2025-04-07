import ProductItems from "../../ProductItems/ProductItems";
import { products } from "../Products/product-list";
import "./Home.css";

/**
 * display the home page
 * @returns
 */
export default function Home() {
  return (
    <div>
      <h1>Welcome to Shopping!</h1>
      <ProductItems products={products} />
    </div>
  );
}
