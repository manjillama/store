import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "../../components/commons";
import { getCart } from "../../service/cart";
import CartItem from "../../components/cart-item";
import Footer from "../../components/footer";
import PageHead from "../../components/page-head";
import Navbar from "../../components/navbar";
import { ICart, ICartItem } from "../../interface";

const Cart = () => {
  const [cart, setCart] = useState<ICart | null>(null);

  useEffect(() => {
    setCart(getCart());
  }, []);

  if (!cart) return <Loader />;

  return (
    <>
      <PageHead
        title="Shopping Bag | Yatri Motorcycles Official Store"
        description="Shopping Bag | Yatri Motorcycles Official Store`"
      ></PageHead>
      <Navbar />
      <div id="bagPage">
        <div
          className="container-l nav-offset"
          style={{ paddingBottom: "2rem" }}
        >
          <div className="m-bag">
            {cart.items.length > 0 ? (
              <div className="f-bag d-flex flex-wrap">
                <div className="bag-item-wrapper">
                  <div className="bag-content">
                    <div className="title-holder d-flex flex-wrap">
                      <h2>MY BAG</h2>
                      <small
                        className="text-muted"
                        style={{ fontSize: "0.7rem" }}
                      >
                        Items in your cart are saved only for an hour
                      </small>
                    </div>
                    <ul className="bag-items list-nostyle">
                      {cart.items.map((item, i) => (
                        <CartItem item={item} key={i} index={i} />
                      ))}
                    </ul>
                  </div>

                  <Link href="/policies#delivery-returns">
                    <a className="bag-panel d-flex">
                      <div>{/* <FaTruck /> */}</div>
                      <div>
                        <h4>Free Standard Delivery</h4>
                        <p>Free standard delivery all over Nepal.</p>
                        <span>More info</span>
                      </div>
                    </a>
                  </Link>

                  <Link href="/policies#delivery-returns">
                    <a className="bag-panel d-flex">
                      <div>{/* <IoMdUndo /> */}</div>
                      <div>
                        <h4>Free and easy returns</h4>
                        <p>
                          Items shipped from store.yatrimotorcycles.com can be
                          returned within 5 business days of delivery. However,
                          there might be items that may be non-returnable or
                          non-refundable.
                        </p>
                        <span>More info</span>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="bag-checkout">
                  <div className="bag-content">
                    <div className="total-wrapper">
                      <div className="c-title">
                        <h2>Total</h2>
                      </div>
                      <div className="c-info">
                        <p>
                          <span className="sub-t">Sub-Total</span>
                          <span className="price-t">
                            Rs. {subTotal(cart.items).toLocaleString()}
                          </span>
                        </p>
                      </div>
                      {/*
                  <div className="c-info">
                    <p>
                      <span className="sub-t">Delivery</span>
                      <span className="i-t">
                        <FaInfoCircle />
                      </span>
                    </p>
                  </div>
                  */}
                      <div>
                        <Link href="/checkout">
                          <a className="btn checkout-btn btn-success">
                            CHECKOUT
                          </a>
                        </Link>

                        {/* <br />
                  <br />
                  <p>Got a discount code? Add it in the next step.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="e-bag">
                {/* <span>
            <svg className="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M18.037,18.517L16.787,4.646c-0.034-0.38-0.355-0.672-0.735-0.672h-2.1c-0.258-1.968-1.93-3.499-3.967-3.499c-2.039,0-3.71,1.531-3.967,3.499H3.921c-0.381,0-0.7,0.291-0.735,0.672L1.915,18.72c-0.02,0.206,0.049,0.411,0.19,0.564c0.138,0.152,0.338,0.241,0.545,0.241h14.67c0.012-0.002,0.02-0.002,0.03,0c0.408,0,0.738-0.331,0.738-0.738C18.088,18.692,18.07,18.601,18.037,18.517z M9.985,1.951c1.225,0,2.25,0.87,2.49,2.023h-4.98C7.735,2.821,8.76,1.951,9.985,1.951zM3.457,18.049l1.139-12.6h10.782l1.135,12.6H3.457z"
              ></path>
            </svg>
          </span> */}
                <h2>Your bag is empty</h2>
                <p>
                  What are you waiting for? Let&apos;s spice up your bag with
                  awesomeness
                </p>
                <Link href="/">
                  <a className="btn btn-success">
                    <strong>Continue Shopping</strong>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
        <Footer theme="dark" />
      </div>
    </>
  );
};
/*
 * Calculating cart items total cost
 */
function subTotal(items: ICartItem[]) {
  return items.reduce((a, b) => {
    return a + b.product.price * b.quantity;
  }, 0);
}

export default Cart;
