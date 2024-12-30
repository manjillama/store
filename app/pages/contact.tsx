import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import PageHead from "../components/page-head";
// import StoreMap from "../components/map";
import Navbar from "../components/navbar";
import { APP } from "../constants";

const ContactPage = () => (
  <>
    <PageHead
      title={`Contact Us | ${APP.NAME} Official Store`}
      description={`General inquiries: ${APP.EMAIL_ADDRESS}, ${APP.ADDRESS}`}
    ></PageHead>
    <Navbar />
    <div className="contact-page">
      <div className="contact-header">
        <Image
          src={`/assets/background.jpg`}
          alt=""
          layout="fill"
          className="img-cover"
        />
      </div>
      <section>
        <div className="container-md">
          <div className="contact-body">
            <div>
              <div className="left">
                <h2>OUR STORE</h2>
                <p>{APP.ADDRESS}</p>
              </div>
              <div className="right">
                <div>
                  <h3>
                    <span className="bullet"></span>ADDRESS:
                  </h3>
                  <p>{APP.ADDRESS}</p>
                  <p>{APP.COUNTRY}</p>
                </div>
                <div>
                  <h3>
                    <span className="bullet"></span>CONTACT:
                  </h3>
                  <p>
                    <a href={`tel:${APP.PHONE_NUMBER}`}>{APP.PHONE_NUMBER}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ height: 300, width: "100%" }}>
            <StoreMap />
          </div> */}
        </div>
      </section>
      <Footer theme="dark" />
    </div>
  </>
);

export default ContactPage;
