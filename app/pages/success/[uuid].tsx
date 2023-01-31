/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHead from "../../components/page-head";
import { GetServerSidePropsContext } from "next";
import { getOrderByUuid } from "../../api/orders";
import { IOrder } from "../../interface";

// const customerOrder = {
//   uuid: "24058248-95dc-4bdc-bbd6-1b3efac6d213",
//   email: "lamamanjil@gmail.com",
//   fullname: "Manjil Tamang",
//   phoneNumber: "9803587436",
//   totalPrice: 3000,
//   city: "Kathmandu",
//   address: "Jorpati",
//   street: "Buddha chowk",
//   status: "Processing",
//   order: [
//     {
//       quantity: 1,
//       price: 1000,
//       totalPrice: 1000,
//       size: "XL",
//       product: {
//         id: 12,
//         name: "Yatri Zip-Up Hoodie",
//         slug: "yatri-zip-up-hoodie",
//         images: [
//           {
//             url: "https://yatri-store.s3.ap-south-1.amazonaws.com/f_61339537d4.PNG",
//           },
//         ],
//       },
//     },
//     {
//       quantity: 1,
//       size: "L",
//       price: 1000,
//       totalPrice: 1000,
//       product: {
//         id: 12,
//         name: "Yatri Zip-Up Hoodie",
//         slug: "yatri-zip-up-hoodie",
//         images: [
//           {
//             url: "https://yatri-store.s3.ap-south-1.amazonaws.com/f_61339537d4.PNG",
//           },
//         ],
//       },
//     },
//   ],
// };

const Success = ({ customerOrder }: { customerOrder: IOrder }) => {
  const {
    fullname,
    phoneNumber,
    order,
    uuid,
    address,
    street,
    status,
    city,
    totalPrice,
  } = customerOrder;
  return (
    <>
      <PageHead
        title="Order Complete | Yatri Motorcycles Official Apparel Storee"
        description="Order Complete | Yatri Motorcycles Official Apparel Store"
      />
      <div id="orderDetailPage">
        <header className="mjl-fluid">
          <div className="container-md">
            <div className="order-w">
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
              <Image
                priority
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={"/assets/yatri-gibl.png"}
                alt={"Yatri Payment QR code"}
              />
              <p style={{ fontSize: "0.8rem" }}>
                For payment, please use the fonepay QR code above and transfer
                the <strong>TOTAL TO PAY</strong> amount. For any inquiries
                please contact our support team at
                <strong> +977 (980) 187-7447 (WhatsApp / Viber)</strong>.
              </p>
            </div>
            <div style={{ clear: "both" }}></div>

            <div
              style={{
                display: "inline-block",
                float: "right",
                color: "#fff",
                maxWidth: "300px",
                padding: "20px",
                background: "#000",
              }}
            >
              <h1>It&apos;s Ordered</h1>
              <p className="small">Code: {uuid}</p>
              <p>
                Hi {fullname.split(" ")[0]}! - Thanks for your order, we hope
                you enjoyed shopping with us
              </p>
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </header>
        <div className="container-md bod">
          <section>
            <div className="info">
              <span
                style={{
                  backgroundColor: "#018849",
                  color: "#fff",
                  fontSize: "0.6rem",
                  padding: " 0.2rem 0.4rem",
                  borderRadius: 12,
                }}
              >
                {status}
              </span>
              <h3>Delivery Information</h3>

              <ul className="list-nostyle">
                <li>{fullname}</li>
                <li>{phoneNumber}</li>
                <li>{address + ", " + street}</li>
                <li>{city}</li>
              </ul>
            </div>
            <br />
            <div className="order-r">
              <div className="table-responsive" style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", fontSize: "0.8rem" }}>
                  <thead>
                    <tr>
                      <th></th>
                      <th style={{ textAlign: "left" }}>Items</th>
                      <th className="text-center">Price</th>
                      <th className="text-center">Qty</th>
                      <th className="text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.map((item, i) => (
                      <tr key={i}>
                        <td>
                          <img
                            alt={item.product.name}
                            src={item.product.images[0].url}
                            style={{ width: 60 }}
                          />
                        </td>
                        <td>
                          {item.product.name}
                          <br />
                          <strong>{item.size}</strong>
                        </td>
                        <td className="text-center">{item.price}</td>
                        <td className="text-center">{item.quantity}</td>
                        <td className="text-right">{item.totalPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="order-total">
                <div>
                  <span>Sub total</span>
                  <span>Rs. {totalPrice}</span>
                </div>
                <div>
                  <span>Delivery</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="t-main" style={{ fontWeight: 600 }}>
                  <span>
                    <strong>TOTAL TO PAY</strong>
                  </span>
                  <span>
                    <strong>Rs. {totalPrice}</strong>
                  </span>
                </div>
              </div>
              <div style={{ clear: "both" }}></div>
            </div>
          </section>
          <div style={{ padding: "15px", textAlign: "right" }}>
            <Link href="/">
              <a className="btn btn-success">
                <strong>Go home</strong>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { data } = await getOrderByUuid(context.params?.uuid as string);
    return {
      props: { customerOrder: data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Success;