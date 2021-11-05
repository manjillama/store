/* eslint-disable jsx-a11y/alt-text, @next/next/no-img-element */
import { GetStaticPropsContext } from 'next';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import ReactImageMagnify from 'react-image-magnify';
import Slider from 'react-slick';
import Carousel from '../../component/carousel';
import SampleNextArrow from '../../component/carousel/SampleNextArrow';
import SamplePrevArrow from '../../component/carousel/SamplePrevArrow';
import Footer from '../../component/footer';
import ItemCard from '../../component/item-card';
import PageHead from '../../component/page-head';

const Product = ({ product }: { product: any }) => {
  const { id, name, sizes, price, comparePrice, description, images } = product;

  const [submitting, setSubmitting] = useState(false);
  const [cartError, setCartError] = useState('');
  const [selection, setSelection] = useState<{ size?: string }>({ size: '' });
  const slider = useRef<any>(null);

  useEffect(() => {
    const descElem = document.getElementById('productDetail');
    if (descElem) descElem.innerHTML = description;
  }, []);

  function RenderCartButton({ onAddToCart, submitting }: any) {
    /*
    Returns true if all stocks is less than or equal to zero
    */
    const outOfStock = sizes.every((size: any) => size.stock <= 0);

    return (
      <button
        className="btn btn-primary add-item p-l"
        onClick={onAddToCart}
        disabled={outOfStock || submitting}
        style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
      >
        {submitting && (
          <div className="spi spi-light" style={{ position: 'absolute' }}></div>
        )}
        {outOfStock ? 'OUT OF STOCK' : 'ADD TO BAG'}
      </button>
    );
  }

  const onThumbImageClick = (index: number) => {
    slider?.current?.slickGoTo(index);
  };

  const RenderProductPrice = () => {
    if (comparePrice > price) {
      return (
        <p>
          <span className="pr-sp"> Rs. {price}</span>
          <span className="pr-cp">Rs. {comparePrice}</span>
        </p>
      );
    } else {
      return <span className="current-price">Rs. {price}</span>;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSelection({ ...selection, [name]: value });
  };

  const onAddToCart = () => {
    validation();
  };

  const validation = () => {
    setCartError('');
    if (sizes[0] && !selection.size)
      setCartError('Please select from the available size options');
  };

  return (
    <>
      <PageHead
        title={`${name} | Yatri Motorcycles Store`}
        description={description}
      ></PageHead>
      <div className="product-page container-l nav-offset">
        <div className="product-layout">
          <div className="gallery-content-wrapper">
            <div className="product-gallery">
              <ul className="thumbnails list-nostyle">
                {images.map((src: string, index: number) => (
                  <li className="image-thumbnail" key={index}>
                    <img
                      className="img-fluid"
                      src={src}
                      tabIndex={0}
                      onClick={() => onThumbImageClick(index)}
                    />
                  </li>
                ))}
              </ul>
              <div className="product-carousel">
                <ImageMagnify slider={slider} images={images} />
              </div>
            </div>
          </div>
          <div className="aside-content">
            <div className="product-hero">
              <h1>{product.name}</h1>
            </div>
            <div className="product-price">
              {<RenderProductPrice />}
              <Link href="/">
                <a className="btn-chromeless product-delivery">
                  <small>Delivery and returns info</small>
                </a>
              </Link>
            </div>
            {sizes[0] && (
              <div className={`product-size p-l`}>
                <label>SIZE: </label>
                <select
                  className="form-control"
                  name="size"
                  onChange={handleChange}
                >
                  <option value="">Please select</option>
                  {sizes.map((size: { size: string; stock: number }) => (
                    <option
                      key={size.size}
                      disabled={size.stock > 0 ? false : true}
                    >
                      {size.size} {size.stock > 0 ? '' : '- Out of stock'}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div className="product-add">
              <RenderCartButton
                onAddToCart={onAddToCart}
                submitting={submitting}
              />
              {cartError && (
                <small
                  className="alert p-l"
                  style={{ backgroundColor: '#FAE7EC', fontSize: '0.7rem' }}
                >
                  {cartError}
                </small>
              )}
              <div className="p-detail">
                <div>
                  <h2>Product Details</h2>
                  <div id="productDetail"></div>
                </div>
                <div>
                  <h2>Product Code</h2>
                  {id}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <h2 className="section-title">Recommended</h2>
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
      </div>

      <Footer theme="dark" />
    </>
  );
};

function ImageMagnify({ slider, images }: any) {
  var settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider ref={slider} {...settings}>
      {images.map((src: string, index: number) => (
        <div key={index}>
          <ReactImageMagnify
            className="img-magnify"
            {...{
              smallImage: {
                isFluidWidth: true,
                src: src,
              },
              largeImage: {
                src: src,
                width: 870,
                height: 1110,
              },
              enlargedImagePosition: 'over',
              hoverDelayInMs: 50,
              hoverOffDelayInMs: 50,
              fadeDurationInMs: 150,
              pressDuration: 200,
            }}
          />
        </div>
      ))}
    </Slider>
  );
}

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await fetch(`http://localhost:3005/api/products`);
  const products = await res.json();
  const product = products.find((p: any) => p.id === context.params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product }, // will be passed to the page component as props
  };
}

export default Product;
