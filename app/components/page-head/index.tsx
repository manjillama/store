import Head from 'next/head';
import { APP } from '../../constants';

const PageHead = ({
  title,
  description,
  image = APP.IMAGE,
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
