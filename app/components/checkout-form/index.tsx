import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import SimpleReactValidator from "simple-react-validator";
import Link from "next/link";
import { TextInput } from "../form/TextInput";
import { SelectInput } from "../form/SelectInput";
import { scrollToTop } from "../../utils";
import { createOrder } from "../../api/products";

const transformCartToOrderData = (cart: any) => {
  return cart.items.map((item: any) => ({
    size: item.size,
    quantities: item.quantity,
    product: item.product.id,
    price: item.price,
    totalPrice: item.price,
  }));
};

const CheckoutForm = ({ cart, deliveryCities }: any) => {
  const [formProps, setFormProps] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    city: "Kathmandu",
    address: "",
    street: "",
    order: transformCartToOrderData(cart),
    totalPrice: transformCartToOrderData(cart).reduce(
      (a, b) => a + b.totalPrice,
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

  function onSubmit(e: any) {
    e.preventDefault();
    if (!validator.current.allValid()) {
      scrollToTop();
      return validator.current.showMessages();
    }

    setSubmitting(true);

    createOrder(formProps)
      .then(() => router.push("/success"))
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

  const { fullname, email, phoneNumber, city, address, street } = formProps;

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="inner-card">
          <h2>Your information</h2>
          <br />
          <div className="c-field">
            <TextInput
              label="Fullname"
              type="text"
              name="fullname"
              value={fullname}
              onChange={onChange}
            />
            {validator.current.message("fullname", fullname, "required")}

            <TextInput
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
            {validator.current.message("email", email, "required|email")}

            <TextInput
              name="phoneNumber"
              label="Phone Number"
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
              options={deliveryCities.map((deliveryCity: { city: string }) => ({
                label: deliveryCity.city,
                value: deliveryCity.city,
              }))}
              required
            />
            <TextInput
              name="address"
              label="Address"
              type="text"
              value={address}
              onChange={onChange}
            />
            {validator.current.message("addresss", address, "required")}
            <TextInput
              name="street"
              label="Street"
              type="text"
              value={street}
              onChange={onChange}
            />
          </div>
        </div>
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
              For payment, please use the fonepay QR code above and transfer the{" "}
              <strong>TOTAL TO PAY</strong> amount and send in the payment
              screenshot to our support team at{" "}
              <strong> +977 (980) 187-7447 (What&apos;sapp / Viber)</strong>.
            </p>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success"
          style={{ position: "relative", width: "100%" }}
        >
          {submitting && (
            <div
              className="spi spi-light"
              style={{ position: "absolute", top: 10, left: 10 }}
            />
          )}
          CONFIRFM
        </button>
        <p className="text-muted" style={{ fontSize: "0.8rem" }}>
          By placing your order you agree to our{" "}
          <Link href="/">
            <a className="link">privacy &amp; policy</a>
          </Link>{" "}
          and{" "}
          <Link href="/">
            <a className="link">returns policies</a>
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
