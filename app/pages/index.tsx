/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Image from 'next/image';
import Carousel from '../component/carousel';
import SampleNextArrow from '../component/carousel/SampleNextArrow';
import SamplePrevArrow from '../component/carousel/SamplePrevArrow';
import Footer from '../component/footer';
import ItemCard from '../component/item-card';
import PageHead from '../component/page-head';

const Home: NextPage = () => {
  return (
    <div>
      <PageHead
        title="Motorcycles, Casual and Accessories Clothing | Yatri Motorcycles Official Apparel Store"
        description="Yatri Motorcycles online store: clothing, helmets, accessories and merchandising by Yatri Motorcycles."
      ></PageHead>
      <header className="banner">
        <Carousel
          settings={{
            dots: true,
            fade: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
          }}
        >
          <div className="banner-item">
            <Image
              layout="fill"
              src="/banner/banner-1.webp"
              alt="Yatri Apparels"
              className="img-cover"
            />
          </div>
          <div className="banner-item">
            <Image
              layout="fill"
              src="/banner/banner-2.webp"
              alt="Yatri Apparels"
              className="img-cover"
            />
          </div>
          <div className="banner-item">
            <Image
              layout="fill"
              src="/banner/banner-3.webp"
              alt="Yatri Apparels"
              className="img-cover"
            />
          </div>
        </Carousel>
      </header>
      <main className="container-l">
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
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </Carousel>
          </div>
        </section>

        <section>
          <img
            src="/banner/banner-4.webp"
            alt="Apparels Banner"
            className="img-fluid"
          />
        </section>
      </main>

      <Footer theme="dark" />
    </div>
  );
};

export default Home;
