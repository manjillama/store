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
              src="/assets/banner/banner-1.webp"
              alt="Yatri Apparels"
              className="img-cover"
            />
            <div className="caption container-l">
              <h3>Must-have pieces you don&apos;t want to miss</h3>
              <p>
                Technical apparel, casual styles and endless accessories perfect
                for two-wheel adventures and leisure looks too.
              </p>
              <button className="btn btn-primary">SHOP NOW</button>
            </div>
          </div>
          <div className="banner-item">
            <Image
              layout="fill"
              src="/assets/banner/banner-2.webp"
              alt="Yatri Apparels"
              className="img-cover"
            />
            <div className="caption container-l">
              <h3>Safe and protected in all weather conditions</h3>
              <p>
                Discover our four-season suits, multi-layer jackets, and other
                rainproof and windproof garments designed to keep you protected
                and ensure maximum support in all weather conditions.
              </p>
              <button className="btn btn-primary">SHOP NOW</button>
            </div>
          </div>
          <div className="banner-item">
            <Image
              layout="fill"
              src="/assets/banner/banner-3.webp"
              alt="Yatri Apparels"
              className="img-cover"
            />
            <div className="caption container-l">
              <h3>Leather jackets: protect yourself in style</h3>
              <p>Like a second skin!</p>
              <button className="btn btn-primary">SHOP NOW</button>
            </div>
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
            src="/assets/banner/banner-4.webp"
            alt="Apparels Banner"
            className="img-fluid"
          />
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Cheer for YATRI!
          </h2>
          <p style={{ margin: 0 }}>
            Prepare to experience a whole host of emotions with the Ducati Team
            in the range of Ducati Corse clothing. Racing colours and
            contemporary designs: bring your best style to the track.
          </p>
        </section>

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
      </main>

      <Footer theme="dark" />
    </div>
  );
};

export default Home;
