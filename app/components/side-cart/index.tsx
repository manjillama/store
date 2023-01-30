import Link from "next/link";
import Image from "next/image";
import Loader from "../commons";
import { getCart } from "../../service/cart";
import { useEffect, useState } from "react";

const SideCart = ({
  onBlur,
  setCartVisibility,
  show,
}: {
  onBlur: (e: any) => void;
  setCartVisibility: (flag: boolean) => void;
  show: boolean;
}) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    setCart(getCart());
  }, [show]);

  if (!cart) return <Loader />;

  return (
    <div id="miniCart" onClick={onBlur} className={show ? "opened" : ""}>
      <div id="myMiniBag" className="bag-wrapper">
        {cart ? (
          <div>
            <div className="bag-head d-flex">
              <div>
                <span className="title">My Bag, </span>
                <span>
                  {cart.items.reduce((a, b) => a + b.quantity, 0)} items
                </span>
              </div>
              <button
                onClick={() => setCartVisibility(false)}
                className="btn btn-chromeless"
                style={{ fontSize: "22px", lineHeight: 0 }}
              >
                <i className="fas fa-times"></i>{" "}
              </button>
            </div>
            <ul className="item-wr list-nostyle">
              {cart.items.map((item, i) => (
                <RenderItem item={item} key={i} />
              ))}
            </ul>
            <div className="action-wrapper d-flex">
              <div className="a-info">
                <span>Sub total</span>
                <div>Rs. {subTotal(cart.items).toLocaleString()}</div>
              </div>
              <div className="a-ls">
                <Link href="/cart">
                  <a
                    className="btn btn-l"
                    style={{ backgroundColor: "#fff", borderColor: "#ddd" }}
                  >
                    {" "}
                    View Bag
                  </a>
                </Link>
                <Link href="/checkout">
                  <a className="btn btn-l btn-success"> Checkout</a>
                </Link>
              </div>
              {/* <div className="more-i">
                <div className="foot">
                  <p>Delivery all over Nepal</p>
                  <small>
                    More info <Link href="/customer-service/delivery">here</Link>
                  </small>
                </div>
              </div> */}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

function RenderItem({ item }: { item: typeof cart.items[0] }) {
  const { product } = item;

  return (
    <li className="item-i">
      <div className="d-flex">
        <div className="item-image">
          <a href={`${`/products/${product.slug}`}`}>
            <Image
              priority
              layout="fill"
              src={product.images[0].url}
              alt={product.name}
            />
          </a>
        </div>
        <div className="item-desc">
          <div className="p-price">
            {renderPriceField(product.price, product.comparePrice)}
          </div>
          <p className="p-name">{product.name}</p>
          <div className="p-props d-flex">
            <span>Size: {item.size}</span>
            <span>Qty: {item.quantity}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

function renderPriceField(price: number, comparePrice: number) {
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
}

/*
 * Calculating cart items total cost
 */
function subTotal(items: typeof cart.items) {
  return items.reduce((a, b) => {
    return a + b.product.price * b.quantity;
  }, 0);
}

export default SideCart;
