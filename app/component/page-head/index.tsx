import Head from 'next/head';

const PageHead = ({
  title,
  description,
  image = 'https://d3j42yg2io56tq.cloudfront.net/mustang1.jpg',
  noIndex,
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
  );
};

export default PageHead;
