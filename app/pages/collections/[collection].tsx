import { GetServerSidePropsContext } from "next";
// import { getProducts } from "../../api/products";
import Footer from "../../components/footer";
import ItemCard from "../../components/item-card";
import Navbar from "../../components/navbar";
import PageHead from "../../components/page-head";
import { slugToString } from "../../utils";
import Product from "../../models/Product";
import { getProducts } from "../../service/productService";

const Collection = ({
  params,
  products,
}: {
  params: any;
  products: Product[];
}) => {
  const collection = slugToString(params.collection);

  const renderProductList = () => {
    if (products.length > 0)
      return products.map((product) => (
        <div key={product.id} className="item-card">
          <ItemCard product={product} />
        </div>
      ));
    else
      return (
        <p className="text-muted">
          Sorry, no products in this collection yet! :(
        </p>
      );
  };

  return (
    <>
      <PageHead
        title={`${collection} | Yatri Motorcycles Official Store`}
        description={collection}
      ></PageHead>
      <Navbar />
      <div className="collection-page container-l nav-offset">
        <section>
          <h2 className="section-title">{collection}</h2>
          <div className="collection">{renderProductList()}</div>
        </section>
      </div>

      <Footer theme="dark" />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryParams = {
    ...context.query,
    "filters[collections][slug][$eq]": context?.params?.collection
  } as any;

  const products = await getProducts(queryParams);
  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { params: context.params, products: JSON.parse(JSON.stringify(products)) },
  };
}

export default Collection;
