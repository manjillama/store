import { GetServerSidePropsContext } from "next";
import Footer from "../../components/footer";
import ItemCard from "../../components/item-card";
import Navbar from "../../components/navbar";
import PageHead from "../../components/page-head";
import { searchProducts } from "../../service/productService";
import Product from "../../models/Product";
import { APP } from "../../constants";

const Search = ({
  params,
  products,
}: {
  params: any;
  products: Product[];
}) => {
  const renderProductList = () => {
    if (products.length > 0)
      return products.map((product) => (
        <div key={product.id} className="item-card">
          <ItemCard product={product} />
        </div>
      ));
    else
      return (
        <div style={{ padding: "0 0.5rem" }}>
          <p className="text-muted">Sorry, nothing matches your search! :(</p>
          <p>
            <small>
              But don&apos;t give up – check the spelling or try less specific
              search terms.
            </small>
          </p>
        </div>
      );
  };

  return (
    <>
      <PageHead
        title={`${params.q} | ${APP.NAME} Official Store`}
        description={APP.DESCRIPTION}
      ></PageHead>
      <Navbar />
      <div className="collection-page container-l nav-offset">
        <section>
          <h2 className="section-title">
            Searched result for &apos;{params.q}&apos;
          </h2>
          <div className="collection">{renderProductList()}</div>
        </section>
      </div>
      <Footer theme="dark" />
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { q } = context.query;
    if (!q) throw new Error("No search term present");

    const products = await searchProducts(q as string);

    return {
      props: { params: context.query, products: JSON.parse(JSON.stringify(products)) },
    };
  } catch (error) {
    console.error(error)
    return {
      notFound: true,
    };
  }
}

export default Search;
