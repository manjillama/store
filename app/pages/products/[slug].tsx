/* eslint-disable jsx-a11y/alt-text, @next/next/no-img-element */
import { GetServerSidePropsContext } from "next";
import { useEffect, useState, useRef } from "react";
import qs from "qs";
import Link from "next/link";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import Carousel from "../../components/carousel";
import SampleNextArrow from "../../components/carousel/SampleNextArrow";
import SamplePrevArrow from "../../components/carousel/SamplePrevArrow";
import Footer from "../../components/footer";
import ItemCard from "../../components/item-card";
import PageHead from "../../components/page-head";
import { RenderProductPrice } from "../../components/commons";
import SideCart from "../../components/side-cart";
import { addItemToCart } from "../../service/cartService";
import Navbar from "../../components/navbar";
import { getProductBySlug, getProducts } from "../../service/productService";
import Product from "../../models/Product";
import { APP } from "../../constants";

const ProductView = ({ product }: { product: Product }) => {
  const {
    id,
    name,
    sizes,
    price,
    comparePrice,
    description,
    stock,
    images,
    brand,
    collections,
  } = product;

  const [submitting, setSubmitting] = useState(false);
  const [cartError, setCartError] = useState("");
  const [openSideCart, setOpenSideCart] = useState(false);
  const [selection, setSelection] = useState<{ size?: string }>({ size: "" });
  const slider = useRef<any>(null);

  useEffect(() => {
    const descElem = document.getElementById("productDetail");
    if (descElem) descElem.innerHTML = description;
  }, []);

  function RenderCartButton({ onAddToCart, submitting }: any) {
    /*
    Returns true if all stocks is less than or equal to zero
    */
    const outOfStock =
      !stock ||
      (sizes.length > 0 && sizes.every((size: any) => size.stock <= 0));

    return (
      <button
        className="btn btn-success add-item p-l"
        onClick={onAddToCart}
        disabled={outOfStock || submitting}
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
      >
        {submitting && (
          <div className="spi spi-light" style={{ position: "absolute" }}></div>
        )}
        {outOfStock ? "OUT OF STOCK" : "ADD TO BAG"}
      </button>
    );
  }

  const onThumbImageClick = (index: number) => {
    slider?.current?.slickGoTo(index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSelection({ ...selection, [name]: value });
  };

  const onAddToCart = () => {
    if (!validation()) return;

    setOpenSideCart(true);
    addItemToCart({
      size: selection.size,
      quantity: 1,
      product,
      price: product.price,
      totalPrice: product.price * 1,
    });
  };

  const validation = () => {
    setCartError("");
    if (sizes[0] && !selection.size) {
      setCartError("Please select from the available size options");
      return false;
    }
    return true;
  };

  const setCartVisibility = (flag: boolean) => {
    setOpenSideCart(flag);
  };

  const onBlur = (e: any) => {
    if (!document?.getElementById("myMiniBag")?.contains(e.target))
      setCartVisibility(false);
  };

  return (
    <>
      <PageHead
        title={`${name} | ${APP.NAME} Offical Store`}
        description={description}
      ></PageHead>
      <Navbar />
      <div className="product-page container-l nav-offset">
        <div className="product-layout">
          <div className="gallery-content-wrapper">
            <div className="product-gallery">
              <ul className="thumbnails list-nostyle">
                {images.map(
                  (url, index) => (
                    <li className="image-thumbnail" key={id}>
                      <img
                        className="img-fluid"
                        src={url}
                        tabIndex={0}
                        onClick={() => onThumbImageClick(index)}
                      />
                    </li>
                  )
                )}
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
              <RenderProductPrice price={price} comparePrice={comparePrice} />
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
                      {size.size} {size.stock > 0 ? "" : "- Out of stock"}
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
              {/* <small
                className="alert p-l"
                style={{ backgroundColor: "#FAE7EC", fontSize: "0.7rem" }}
              >
                <i className="fas fa-info-circle"></i> We're still working on
                our e-store. To make an order please visit our{" "}
                <Link href="/experience-center">
                  <a style={{ textDecoration: "underline" }}>
                    experience center
                  </a>
                </Link>
                . We'll be thrilled to have you visit us!
              </small> */}
              <div>
                <Link href="/policies#delivery-returns">
                  <a className="btn-chromeless product-delivery">
                    <small>Delivery and returns info</small>
                  </a>
                </Link>
              </div>
              {cartError && (
                <small
                  className="alert p-l"
                  style={{ backgroundColor: "#FAE7EC", fontSize: "0.7rem" }}
                >
                  {cartError}
                </small>
              )}

              <div className="p-detail">
                <div>
                  <h2>Brand</h2>
                  {brand || "-"}
                </div>
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
        <Recommended
          collectionSlugs={collections.map((collection) => collection.slug)}
        />
      </div>
      <SideCart
        onBlur={onBlur}
        setCartVisibility={setCartVisibility}
        show={openSideCart}
      />
      <Footer theme="dark" />
    </>
  );
};

function ImageMagnify({
  slider,
  images,
}: {
  slider: any;
  images: string[];
}) {
  var settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider ref={slider} {...settings}>
      {images.map((url, index) => (
        <div key={index}>
          <ReactImageMagnify
            className="img-magnify"
            {...{
              smallImage: {
                isFluidWidth: true,
                src: url,
              },
              largeImage: {
                src: url,
                width: 870,
                height: 1110,
              },
              enlargedImagePosition: "over",
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

function Recommended({ collectionSlugs }: { collectionSlugs: string[] }) {
  const [products, setProducts] = useState<Product[] | null>(null);

  const query = qs.stringify({
    filters: {
      $or: collectionSlugs.map(slug => (
        {
          collections: {
            slug: {
              $eq: slug
            }
          },
        }
      ))
    },
  }, {
    encodeValuesOnly: true,
  });

  useEffect(() => {
    async function fetchData() {
      const products = await getProducts({}, `?${query}`);
      setProducts(products);
    }
    fetchData();
  }, []);

  if (!products) return <p>Loading...</p>;

  if (products.length < 3) return null;

  return (
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
          {products.map((product) => (
            <ItemCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const product = await getProductBySlug(context.params?.slug as string);
    return {
      props: { product: JSON.parse(JSON.stringify(product)) }
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}

export default ProductView;
