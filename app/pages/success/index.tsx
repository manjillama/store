/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import PageHead from "../../components/page-head";
import Footer from "../../components/footer";
import Wrapper from "../../components/wrapper";

const Success = () => (
  <>
    <PageHead
      title="Order Complete | Yatri Motorcycles Official Apparel Storee"
      description="Order Complete | Yatri Motorcycles Official Apparel Store"
    />

    <Wrapper hideNewsletter>
      <section>
        <div className="container-sm text-center nav-offset">
          <h2>Order complete!</h2>
          <img
            src="/assets/check.svg"
            style={{ marginTop: "1.2rem" }}
            width="60"
            alt=""
          />
          <p>
            Our team will reach out to you shortly with a order confirmation.
            For further information, please contact Yatri Motorcycles operators.
          </p>
          <br />
          <Link href="/">
            <a className="btn btn-dark">RETURN HOME</a>
          </Link>
        </div>
      </section>
    </Wrapper>
  </>
);

export default Success;
