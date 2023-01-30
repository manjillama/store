import { GetServerSidePropsContext } from "next";
import { searchProducts } from "../../api/products";
import Footer from "../../components/footer";
import ItemCard from "../../components/item-card";
import Navbar from "../../components/navbar";
import PageHead from "../../components/page-head";
import { IProduct } from "../../interface";

const Search = ({
  params,
  products,
}: {
  params: any;
  products: IProduct[];
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
        <div>
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
        title={`${params.q} | Yatri Motorcycles Official Store`}
        description="Yatri Motorcycles online store: clothing, helmets, accessories and merchandising by Yatri Motorcycles."
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

    const { data } = await searchProducts(q as string);

    return {
      props: { params: context.query, products: data }, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default Search;
