import React from "react";
import Image from "next/image";
import Link from "next/link";
import { removeFromCartUsingIndex } from "../../service/cart";

const CartItem = ({ item, index }: { item: any; index: number }) => {
  const { size, quantity, product } = item;

  const removeItem = (i: number) => {
    removeFromCartUsingIndex(i);
    window.location.reload();
  };

  const renderPriceField = (price: number, comparePrice: number) => {
    if (comparePrice > price) {
      return (
        <p>
          <span className="pr-sp"> Rs. {price}</span>{" "}
          <span className="pr-cp">Rs. {comparePrice}</span>
        </p>
      );
    } else {
      return <p>Rs. {price}</p>;
    }
  };

  return (
    <li className="item">
      <div className="d-flex">
        <div>
          <Link href={`/products/${product.slug}`}>
            <a style={{ border: "1px solid #eeeff0", display: "block" }}>
              <Image
                priority
                width={110}
                height={110}
                src={product.images[0].url}
                alt={product.name}
              />
            </a>
          </Link>
        </div>
        <div className="item-desc">
          <div className="p-price">
            {renderPriceField(product.price, product.compare_price)}
          </div>
          <p className="p-name">{product.name}</p>
          <div className="p-selections d-flex">
            {size && (
              <div>
                <label htmlFor="cSize">Size: </label>
                <span> {size}</span>
              </div>
            )}
            <div>
              <label htmlFor="cQty">Qty: </label>
              <span> {quantity}</span>
            </div>
          </div>
        </div>
        <div style={{ flexGrow: 0 }}>
          <button
            className="btn btn-chromeless"
            onClick={() => removeItem(index)}
          >
            <i className="fas fa-times"></i>{" "}
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
