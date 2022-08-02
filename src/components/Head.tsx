import NextHead from 'next/head';

export type HeadProps = {
  title: string,
  description: string,
  url: string,
  keywords?: string[],
}
const Head = ({
  title, description, url, keywords,
}: HeadProps) => {
  const finalTitle = `FIcarious | ${title}`;
  return (
    <NextHead key={title}>
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://platform.twitter.com" />
      <link rel="preconnect" href="https://platform.linkedin.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <title>{finalTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="author" content="Evan Williams" />
      <meta name="og:title" content={finalTitle} />
      <meta name="og:description" content={description} />
      <meta name="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}${url}`} />
      <meta name="og:image" content="/assets/icons/icon-48x48.png" />
      <link rel="icon" href="/assets/icons/icon-48x48.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#C1E7EB" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#23656C" />
      <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
    </NextHead>
  );
};
export default Head;
