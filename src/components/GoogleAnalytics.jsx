import Script from 'next/script';

const GoogleAnalytics = () => (
  <Script
    strategy="lazyOnload"
    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    onLoad={() => {
      window.dataLayer = window.dataLayer || [];
      // eslint-disable-next-line prefer-rest-params
      window.gtag = function gtag() { window.dataLayer.push(arguments); };
      window.gtag('js', new Date());
      window.gtag('config', `${process.env.NEXT_PUBLIC_GA_ID}`);
    }}
  />
);

export default GoogleAnalytics;
