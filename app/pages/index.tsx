/* eslint-disable @next/next/no-img-element */
import type { GetServerSidePropsContext, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getHomePageCarousel } from "../api";
import { getProducts } from "../api/products";
import Carousel from "../components/carousel";
import SampleNextArrow from "../components/carousel/SampleNextArrow";
import SamplePrevArrow from "../components/carousel/SamplePrevArrow";
import Loader from "../components/commons";
import Footer from "../components/footer";
import ItemCard from "../components/item-card";
import Navbar from "../components/navbar";
import PageHead from "../components/page-head";
import { ICtaCarousel, IProduct } from "../interface";

const Home = ({ homePageCarousel }: { homePageCarousel: ICtaCarousel[] }) => {
  return (
    <div>
      <PageHead
        title="Motorcycles, Casual and Accessories Clothing | Yatri Motorcycles Official Store"
        description="Yatri Motorcycles online store: clothing, helmets, accessories and merchandising by Yatri Motorcycles."
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

        {/* <section>
          <img
            src="/assets/banner/banner-4.webp"
            alt="Apparels Banner"
            className="img-fluid"
          />
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Cheer for YATRI!
          </h2>
          <p style={{ margin: 0 }}>
            Prepare to experience a whole host of emotions with the Yatri Team
            in the range of Yatri P1 clothing. Signature Yatri turquoise colours
            and contemporary designs: bring your best style to the track.
          </p>
        </section> */}

        <Featured />
      </main>

      <Footer theme="dark" />
    </div>
  );
};

function NewIn() {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  // products?created_at_gte=2021-08-07
  useEffect(() => {
    async function fetchData() {
      const { data } = await getProducts({
        _sort: `created_at:DESC`,
        _limit: 12,
      });
      setProducts(data);
    }
    fetchData();
  }, []);

  if (!products) return <Loader />;

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
  const [products, setProducts] = useState<IProduct[] | null>(null);
  // products?_sort=created_at:DESC&isFeatured=true

  useEffect(() => {
    async function fetchData() {
      const { data } = await getProducts({
        _sort: `created_at:DESC`,
        isFeatured: true,
        _limit: 12,
      });
      setProducts(data);
    }
    fetchData();
  }, []);

  if (!products) return <Loader />;

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
  const { data } = await getHomePageCarousel();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { homePageCarousel: data }, // will be passed to the page component as props
  };
}

export default Home;
