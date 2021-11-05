import { GetStaticPropsContext } from 'next';
import Footer from '../../component/footer';
import ItemCard from '../../component/item-card';
import PageHead from '../../component/page-head';
import { slugToString } from '../../utils';

const Product = ({ params, products }: any) => {
  const collection = slugToString(params.collection);
  return (
    <>
      <PageHead
        title={`${collection} | Yatri Motorcycles Store`}
        description={collection}
      ></PageHead>
      <div className="collection-page container-l nav-offset">
        <section>
          <h2 className="section-title">{collection}</h2>
          <div className="collection">
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
            <div className="item-card">
              <ItemCard />
            </div>
          </div>
        </section>
      </div>

      <Footer theme="dark" />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await fetch(`http://localhost:3005/api/products`);
  const products = await res.json();

  if (!products) {
    return {
      notFound: true,
    };
  }

  return {
    props: { params: context.params, products }, // will be passed to the page component as props
  };
}

export default Product;
