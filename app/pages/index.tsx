/* eslint-disable @next/next/no-img-element */
import type { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getHomePageCarousel } from "../api";
import { getProducts } from "../service/productService";
import Carousel from "../components/carousel";
import SampleNextArrow from "../components/carousel/SampleNextArrow";
import SamplePrevArrow from "../components/carousel/SamplePrevArrow";
import Loader from "../components/commons";
import Footer from "../components/footer";
import ItemCard from "../components/item-card";
import Navbar from "../components/navbar";
import PageHead from "../components/page-head";
import { ICtaCarousel } from "../interface";
import Product from "../models/Product";
import { APP } from "../constants";

const Home = ({ homePageCarousel }: { homePageCarousel: ICtaCarousel[] }) => {
  return (
    <div>
      <PageHead
        title={`${APP.TITLE} | ${APP.NAME} Official Store`}
        description={`${APP.DESCRIPTION} | ${APP.NAME} Official Store`}
      ></PageHead>
      <Navbar />
      <header className="banner">
        <Carousel
          settings={{
            dots: true,
            // fade: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
        >
          {homePageCarousel.map(({ id, title, caption, image, cta }) => (
            <div key={id} className="banner-item">
              <Image
                priority
                layout="fill"
                src={image.url}
                alt={`banner ${id}`}
                className="img-cover"
              />
              <div className="caption container-l">
                <h3>{title}</h3>
                <p>{caption}</p>
                {cta && (
                  <Link href={cta.link}>
                    <a
                      className="btn btn-primary"
                      style={{ textTransform: "uppercase" }}
                    >
                      {cta.name}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </header>
      <main className="container-l">
        <NewIn />

        <section>
          <img
            src="/assets/banner.jpg"
            alt="Apparels Banner"
            className="img-fluid"
          />
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Lorem ipsum dolor
          </h2>
          <p style={{ margin: 0 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio consectetur esse minima, soluta minus molestiae provident in incidunt iure sunt repellat veritatis qui tempora repudiandae ullam voluptatem itaque. Iure, incidunt!
            Ullam est eos dicta a eius.
          </p>
        </section>

        <Featured />
      </main>

      <Footer theme="dark" />
    </div>
  );
};

function NewIn() {
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    async function fetchData() {
      const product = await getProducts({
        _sort: `created_at:DESC`,
        _limit: 12,
      });
      console.log("new in", product);
      setProducts(product);
    }
    fetchData();
  }, []);

  if (!products)
    return (
      <section>
        <Loader />
      </section>
    );

  if (products.length < 3) return null;
  return (
    <section>
      <h2 className="section-title">New In</h2>
      <div className="carousel-card card">
        <Carousel
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
            ],
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }}
        >
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function Featured() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts({
        _sort: `createdAt:DESC`,
        isFeatured: true,
        _limit: 12,
      });
      setProducts(products);
    }
    fetchData();
  }, []);

  if (!products)
    return (
      <section>
        <Loader />
      </section>
    );

  if (products.length < 3) return null;
  return (
    <section>
      <h2 className="section-title">Featured</h2>
      <div className="carousel-card card">
        <Carousel
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                },
              },
            ],
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }}
        >
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // const { data } = await getHomePageCarousel();

  // if (!data) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: { homePageCarousel: data }, // will be passed to the page component as props
  // };
  return {
    props: { homePageCarousel: [] }, // will be passed to the page component as props
  };
}

export default Home;
