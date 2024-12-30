/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageHead from "../components/page-head";
import { APP } from "../constants";

const About = () => {
  return (
    <div className="ec-page">
      <PageHead
        title={`${APP.TITLE} | ${APP.NAME} Official Store`}
        description={`${APP.DESCRIPTION} | ${APP.NAME} Official Store`}
      ></PageHead>
      <Navbar />
      <header className="banner">
        <div className="banner-item">
          <Image
            priority
            layout="fill"
            src={`/assets/background.jpg`}
            alt=""
            className="img-cover"
          />
          <div className="overlay-dark" />
          <div className="caption container-l">
            <h3>Store</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <Link href="/contact">
              <a
                className="btn btn-primary"
                style={{ textTransform: "uppercase" }}
              >
                Visit Us
              </a>
            </Link>
          </div>
        </div>
      </header>
      <main className="container-l">
        <section>
          <div className="row-content">
            <div className="ec-left">
              <Image
                layout="fill"
                src="/assets/background.jpg"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className="ec-right">
              <h4>Lorem Ipsum</h4>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              </p>
            </div>
          </div>
          <div className="row-content">
            <div className="ec-left">
              <Image
                layout="fill"
                src="/assets/background.jpg"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className="ec-right">
              <h4>Lorem Ipsum</h4>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              </p>
            </div>
          </div>
          <div className="row-content">
            <div className="ec-left">
              <Image
                layout="fill"
                src="/assets/background.jpg"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className="ec-right">
              <h4>Lorem Ipsum</h4>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer theme="dark" />
    </div>
  );
};

export default About;
