import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getCart } from "../../service/cart";
import CartItem from "../../components/cart-item";
import Footer from "../../components/footer";
import PageHead from "../../components/page-head";
import CheckoutForm from "../../components/checkout-form";
import Loader from "../../components/commons";
import { ICart, ICartItem } from "../../interface";
import Navbar from "../../components/navbar";

const deliveryCities = [
  { city: "Achham", price: 160 },
  { city: "Arghakhanchi", price: 160 },
  { city: "Baglung", price: 160 },
  { city: "Baitadi", price: 160 },
  { city: "Bajhang", price: 160 },
  { city: "Bajura", price: 160 },
  { city: "Banke", price: 160 },
  { city: "Bara", price: 160 },
  { city: "Bardiya", price: 160 },
  { city: "Bhaktapur", price: 160 },
  { city: "Bhojpur", price: 160 },
  { city: "Chitwan", price: 160 },
  { city: "Dadeldhura", price: 160 },
  { city: "Dailekh", price: 160 },
  { city: "Dang Deokhuri", price: 160 },
  { city: "Darchula", price: 160 },
  { city: "Dhading", price: 160 },
  { city: "Dhankuta", price: 160 },
  { city: "Dhanusa", price: 160 },
  { city: "Dolakha", price: 160 },
  { city: "Dolpa", price: 160 },
  { city: "Doti", price: 160 },
  { city: "Gorkha", price: 160 },
  { city: "Gulmi", price: 160 },
  { city: "Humla", price: 160 },
  { city: "Ilam", price: 160 },
  { city: "Jajarkot", price: 160 },
  { city: "Jhapa", price: 160 },
  { city: "Jumla", price: 160 },
  { city: "Kailali", price: 160 },
  { city: "Kalikot", price: 160 },
  { city: "Kanchanpur", price: 160 },
  { city: "Kapilvastu", price: 160 },
  { city: "Kaski", price: 160 },
  { city: "Kathmandu", price: 160 },
  { city: "Kavrepalanchok", price: 160 },
  { city: "Khotang", price: 160 },
  { city: "Lalitpur", price: 160 },
  { city: "Lamjung", price: 160 },
  { city: "Mahottari", price: 160 },
  { city: "Makwanpur", price: 160 },
  { city: "Manang", price: 160 },
  { city: "Morang", price: 160 },
  { city: "Mugu", price: 160 },
  { city: "Mustang", price: 160 },
  { city: "Myagdi", price: 160 },
  { city: "Nawalparasi", price: 160 },
  { city: "Nuwakot", price: 160 },
  { city: "Okhaldhunga", price: 160 },
  { city: "Palpa", price: 160 },
  { city: "Panchthar", price: 160 },
  { city: "Parbat", price: 160 },
  { city: "Parsa", price: 160 },
  { city: "Pyuthan", price: 160 },
  { city: "Ramechhap", price: 160 },
  { city: "Rasuwa", price: 160 },
  { city: "Rautahat", price: 160 },
  { city: "Rolpa", price: 160 },
  { city: "Rukum", price: 160 },
  { city: "Rupandehi", price: 160 },
  { city: "Salyan", price: 160 },
  { city: "Sankhuwasabha", price: 160 },
  { city: "Saptari", price: 160 },
  { city: "Sarlahi", price: 160 },
  { city: "Sindhuli", price: 160 },
  { city: "Sindhupalchok", price: 160 },
  { city: "Siraha", price: 160 },
  { city: "Solukhumbu", price: 160 },
  { city: "Sunsari", price: 160 },
  { city: "Surkhet", price: 160 },
  { city: "Syangja", price: 160 },
  { city: "Tanahu", price: 160 },
  { city: "Taplejung", price: 160 },
  { city: "Terhathum", price: 160 },
  { city: "Udayapur", price: 160 },
];

// const deliveryPrice = (deliveryCity: string) =>
//   deliveryCities.find((city) => city.city === deliveryCity)?.price;

const Checkout = () => {
  const [cart, setCart] = useState<ICart | null>(null);

  useEffect(() => {
    setCart(getCart());
  }, []);

  if (!cart) return <Loader />;

  if (cart.items.length <= 0)
    return (
      <>
        <Navbar />
        <div className="e-bag nav-offset">
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
        <Footer theme="dark" />
      </>
    );

  return (
    <>
      <PageHead
        title="Checkout | Yatri Motorcycles Official Store"
        description="Checkout | Yatri Motorcycles Official Store`"
      ></PageHead>
      <div id="checkoutPage" className="container">
        <h1 className="text-center">Checkout</h1>

        <div className="m-page d-flex">
          <div className="l-card">
            <CheckoutForm deliveryCities={deliveryCities} cart={cart} />
            {/*
              <div className="inner-card">
                <h2>Delivery Option</h2>
                <div className="c-field">
                  Hello There!!!
                </div>
              </div>
              <div className="inner-card">
                <h2>Payment</h2>
                <div className="c-field">
                  Hello There!!!
                </div>
              </div>
              */}
            {/* <div className="order-panel">
              <button
                className="btn btn-l btn-success full-width btn-order"
                onClick={onSubmit}
                disabled={submitting}
              >
                {submitting && (
                  <div
                    className="spi spi-light"
                    style={{ position: "absolute" }}
                  ></div>
                )}
                Place order
              </button>
              <br />
              <br />
            </div> */}
          </div>
          <div className="r-card">
            <div>
              {cart && (
                <>
                  <div className="bag-head d-flex">
                    <h2>
                      {cart.items.reduce((a, b) => a + b.quantity, 0)} items
                    </h2>
                    <Link href="/cart">
                      <a className="btn btn-chromeless">Edit</a>
                    </Link>
                  </div>
                  <div className="checkout-item">
                    <ul className="list-nostyle i-w">
                      {cart.items.map((item, i) => (
                        <CartItem item={item} key={i} index={i} />
                      ))}
                    </ul>
                  </div>

                  <div className="checkout-total">
                    <table>
                      <tbody>
                        <tr>
                          <td>Subtotal</td>
                          <td className="text-right">
                            Rs. {subTotal(cart.items).toLocaleString()}
                          </td>
                        </tr>
                        <tr>
                          <td>Delivery</td>
                          <td className="text-right text-success">Free</td>
                        </tr>
                        <tr className="t-main">
                          <td>TOTAL TO PAY</td>
                          <td className="text-right">
                            Rs. {subTotal(cart.items).toLocaleString()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

/*
 * Calculating cart items total cost
 */
function subTotal(items: ICartItem[]) {
  return items.reduce((a, b) => a + b.product.price * b.quantity, 0);
}
