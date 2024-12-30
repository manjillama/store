/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PageHead from "../components/page-head";

const About = () => {
  return (
    <div className="ec-page">
      <PageHead
        title="Motorcycles, Casual and Accessories Clothing | Yatri Motorcycles Official Store"
        description="Shop, Learn and Chill | Yatri Motorcycles Official Store"
      ></PageHead>
      <Navbar />
      <header className="banner">
        <div className="banner-item">
          <Image
            priority
            layout="fill"
            src={`/assets/ec.jpg`}
            alt=""
            className="img-cover"
          />
          <div className="overlay-dark" />
          <div className="caption container-l">
            <h3>Experience Center</h3>
            <p>
              Visit our Experience Center to learn about products in-depth &amp;
              experience Yatri.
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
                src="/assets/ec1.jpg"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className="ec-right">
              <h4>EXPERIENCE YATRI</h4>
              <p>
                An Experience center where you can learn about the products
                in-depth and experience Yatri.
              </p>
            </div>
          </div>
          <div className="row-content">
            <div className="ec-left">
              <Image
                layout="fill"
                src="/assets/ec3.jpg"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className="ec-right">
              <h4>SHOWCASE ENGINEERING</h4>
              <p>
                A space where we celebrate engineering and showcase the extent
                of ground up development in the Yatri products.
              </p>
            </div>
          </div>
          <div className="row-content">
            <div className="ec-left">
              <Image
                layout="fill"
                src="/assets/ec2.jpg"
                alt=""
                objectFit="cover"
              />
            </div>
            <div className="ec-right">
              <h4>HANGOUT SPACE</h4>
              <p>
                A chillout hangout space for our community. Treat yourself and
                your friends with a nice cup of coffee and just enjoy!
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
