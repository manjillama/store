import React from "react";
import Image from "next/image";
import Footer from "../components/footer";
import PageHead from "../components/page-head";
import ECMAP from "../components/map";
import Navbar from "../components/navbar";

const ContactPage = () => (
  <>
    <PageHead
      title="Contact Us | Yatri Motorcycles Official Store"
      description="General inquiries: info@yatrimotorcycles.com, Baluwatar Thirbam Sadak, Kathmandu 44600, Kathmandu, Nepal"
    ></PageHead>
    <Navbar />
    <div className="contact-page">
      <div className="contact-header">
        <Image
          src={`https://s3.ap-south-1.amazonaws.com/yatri.static/render6.jpg`}
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
                <h2>OUR EXPERIENCE CENTER</h2>
                <p>Baluwatar, KTM</p>
              </div>
              <div className="right">
                <div>
                  <h3>
                    <span className="bullet"></span>ADDRESS:
                  </h3>
                  <p>44616 Thirbam Sadak, Baluwatar</p>
                  <p>Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3>
                    <span className="bullet"></span>CONTACT:
                  </h3>
                  <p>
                    <a href="tel:+9779801877447">+977 (980) 187-7447</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="left">
                <h2>OUR HEADQUARTER</h2>
                <p>Budanilkantha, KTM</p>
              </div>
              <div className="right">
                <div>
                  <h3>
                    <span className="bullet"></span>ADDRESS:
                  </h3>
                  <p>44600, Budanilkantha</p>
                  <p>Kathmandu, Nepal</p>
                </div>
                <div>
                  <h3>
                    <span className="bullet"></span>CONTACT:
                  </h3>
                  <p>
                    <a
                      style={{ textDecoration: "underline" }}
                      href="mailto:info@yatrimotorcycles.com"
                    >
                      info@yatrimotorcycles.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: 300, width: "100%" }}>
            <ECMAP />
          </div>
        </div>
      </section>
      <Footer theme="dark" />
    </div>
  </>
);

export default ContactPage;
