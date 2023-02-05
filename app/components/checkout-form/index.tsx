import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SimpleReactValidator from "simple-react-validator";
import Link from "next/link";
import { TextInput } from "../form/TextInput";
import { SelectInput } from "../form/SelectInput";
import { scrollToTop } from "../../utils";
import { createOrder } from "../../api/products";
import { resetCart } from "../../service/cart";
import { RadioInput } from "../form";

const transformCartToOrderData = (cart: any) => {
  return cart.items.map((item: any) => ({
    size: item.size,
    quantities: item.quantity,
    product: item.product.id,
    price: item.price,
    totalPrice: item.price,
  }));
};

const CheckoutForm = ({
  cart,
  deliveryCities,
  deliveryCity,
  setDeliveryCity,
}: any) => {
  const [formProps, setFormProps] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    city: deliveryCity,
    address: "",
    street: "",
    order: transformCartToOrderData(cart),
    totalPrice: transformCartToOrderData(cart).reduce(
      (a: number, b: { totalPrice: number }) => a + b.totalPrice,
      0
    ),
  });
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [, forceUpdate] = useState<undefined | number>();
  const validator = useRef(
    new SimpleReactValidator({
      autoForceUpdate: { forceUpdate: () => forceUpdate(1) },
    })
  );
  const [currentPage, setCurrentPage] = useState<"information" | "payment">(
    "information"
  );
  const [paymentCheck, setPaymentCheck] = useState(false);

  useEffect(() => {
    setDeliveryCity(formProps.city);
  }, [formProps.city]);

  function proceedToPayment() {
    if (!validator.current.allValid()) {
      scrollToTop();
      return validator.current.showMessages();
    }
    setCurrentPage("payment");
  }

  function onSubmit(e: any) {
    e.preventDefault();

    setSubmitting(true);

    createOrder(formProps)
      .then(({ data }) => {
        resetCart();
        router.push("/success/" + data.uuid);
      })
      .catch(() =>
        alert(
          "Something went wrong. Please contact Yatri support or try again later."
        )
      )
      .finally(() => setSubmitting(false));
  }

  function onChange(e: any) {
    const { name, value } = e.currentTarget;
    setFormProps({ ...formProps, [name]: value });
  }

  function handlePaymentCheck(e: any) {
    const { checked } = e.currentTarget;
    console.log(checked);

    setPaymentCheck(checked);
  }

  const { fullname, email, phoneNumber, city, address, street } = formProps;

  return (
    <div>
      <div style={{ marginBottom: "0.6rem" }}>
        {currentPage === "information" && (
          <Link href="/cart">
            <a className="link small" style={{ fontWeight: 500 }}>
              Back to cart
            </a>
          </Link>
        )}
        {currentPage === "payment" && (
          <button
            className="btn-chromeless"
            onClick={() => setCurrentPage("information")}
          >
            <a className="link small" style={{ fontWeight: 500 }}>
              Back to information
            </a>
          </button>
        )}
      </div>
      <form onSubmit={onSubmit}>
        {currentPage === "information" && (
          <div className="inner-card">
            <h2>Your information</h2>
            <br />
            <div className="c-field">
              <TextInput
                label="Fullname*"
                type="text"
                name="fullname"
                value={fullname}
                onChange={onChange}
              />
              {validator.current.message("fullname", fullname, "required")}

              <TextInput
                label="Email*"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
              />
              {validator.current.message("email", email, "required|email")}

              <TextInput
                name="phoneNumber"
                label="Phone Number*"
                type="text"
                maxLength="10"
                value={phoneNumber}
                onChange={onChange}
              />
              {validator.current.message(
                "phoneNumber",
                phoneNumber,
                "required|phone"
              )}
              <SelectInput
                label="City*"
                name="city"
                value={city}
                onChange={onChange}
                options={[
                  {
                    label: "EC Pickup (Baluwatar)",
                    value: "EC Pickup (Baluwatar)",
                  },
                  {
                    label: "__________________",
                    value: "",
                    disabled: true,
                  },
                  ...deliveryCities.map((deliveryCity: { city: string }) => ({
                    label: deliveryCity.city,
                    value: deliveryCity.city,
                  })),
                ]}
                required
              />
              {!city.toLowerCase().includes("pickup") && (
                <>
                  <TextInput
                    name="address"
                    label="Address*"
                    type="text"
                    value={address}
                    onChange={onChange}
                    required
                  />
                  <TextInput
                    name="street"
                    label="Street / Landmark"
                    type="text"
                    value={street}
                    onChange={onChange}
                  />
                </>
              )}
            </div>
            <button
              type="button"
              className="btn btn-success"
              style={{ position: "relative", width: "100%" }}
              onClick={proceedToPayment}
            >
              PROCEED
            </button>
          </div>
        )}
        {currentPage === "payment" && (
          <div className="inner-card">
            <h2>Payment</h2>
            <br />
            <div>
              <div style={{ marginBottom: "1rem", textAlign: "center" }}>
                <Image
                  priority
                  width={80}
                  height={25}
                  layout="intrinsic"
                  src={"/assets/fonepay-logo.png"}
                  alt={"Yatri Payment QR code"}
                />
              </div>
              <div style={{ maxWidth: 220, margin: "0 auto" }}>
                <Image
                  priority
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={"/assets/yatri-gibl.png"}
                  alt={"Yatri Payment QR code"}
                />
              </div>
              <p style={{ fontSize: "0.8rem" }}>
                For payment, please use the fonepay QR code above and transfer
                the <strong>TOTAL TO PAY</strong> amount. Please mention your
                name in the payment remarks.
              </p>
            </div>
            <hr style={{ margin: "1rem 0" }} />
            <div
              className="form-group"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              <input
                id="paymentCheck"
                name="paymentCheck"
                type="checkbox"
                checked={paymentCheck}
                onChange={handlePaymentCheck}
                style={{ margin: "2px 8px 0px 0px", flexShrink: 0 }}
              />
              <label htmlFor="paymentCheck">
                I have made the payment through fonepay QR code.
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              style={{ position: "relative", width: "100%" }}
              disabled={!paymentCheck}
            >
              {submitting && (
                <div
                  className="spi spi-light"
                  style={{ position: "absolute", top: 10, left: 10 }}
                />
              )}
              PLACE ORDER
            </button>
          </div>
        )}
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          By placing your order you agree to our{" "}
          <Link href="/policies">
            <a className="link">privacy</a>
          </Link>{" "}
          and{" "}
          <Link href="/policies#delivery-returns">
            <a className="link">return policies</a>
          </Link>
          . You also consent to some of your data being stored by Yatri
          Motorcycles, which may be used to make shopping experiences better for
          you.
        </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
