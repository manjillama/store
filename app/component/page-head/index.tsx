import Head from 'next/head';

const PageHead = ({
  title,
  description,
  image = 'https://s3.ap-south-1.amazonaws.com/yatri.static/ec.jpg',
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
