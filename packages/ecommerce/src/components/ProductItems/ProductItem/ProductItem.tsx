import "./productItem.css";
import type { Product } from "./product.type";

/**
 * display product image, title, description and price.
 * @param param0
 * @returns
 */
export default function ProductItem({ product }: { product: Product }) {
  return (
    <div className="product">
      <div className="product-image-wrap">
        <img
          src={product.url}
          alt={product.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      <span className="product-name" title={product.name}>
        {product.name}
      </span>
      <span className="product-price">₹ {product.price}</span>
      <div className="cart-actions">
        <button>Add</button>
        <button>Favourite</button>
      </div>
    </div>
  );
}
