import { GetServerSidePropsContext } from 'next';
import { searchProducts } from '../../api/products';
import Footer from '../../component/footer';
import ItemCard from '../../component/item-card';
import { IProduct } from '../../interface';

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
        <p className="text-muted">Sorry, nothing matches your search! :(</p>
      );
  };

  return (
    <>
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
    if (!q) throw new Error('No search term present');

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
