import { GetServerSidePropsContext } from 'next';
import { getProducts } from '../../api/products';
import Footer from '../../components/footer';
import ItemCard from '../../components/item-card';
import PageHead from '../../components/page-head';
import { IProduct } from '../../interface';
import { slugToString } from '../../utils';

const Product = ({
  params,
  products,
}: {
  params: any;
  products: IProduct[];
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
        title={`${collection} | Yatri Motorcycles Store`}
        description={collection}
      ></PageHead>
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
    'collections.slug': context?.params?.collection,
  } as any;

  delete queryParams.collection;

  const { data } = await getProducts(queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { params: context.params, products: data }, // will be passed to the page component as props
  };
}

export default Product;
