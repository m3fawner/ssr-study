import NextHead from 'next/head';
import PropTypes from 'prop-types';

const Head = ({
  title, description, url, keywords,
}) => {
  const finalTitle = `FIcarious | ${title}`;
  return (
    <NextHead key={title}>
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Evan Williams" />
      <meta name="og:title" content={finalTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`} />
      <meta name="og:image" content="/assets/icons/icon-48x48.png" />
      <link rel="icon" href="/assets/icons/icon-48x48.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#C1E7EB" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#23656C" />
      <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
    </NextHead>
  );
};
Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};
Head.defaultProps = {
  keywords: [],
};
export default Head;
