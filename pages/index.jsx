import Head from 'next/head';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR Study home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AlphaVantageAPIKeyEntry />
    </>
  );
}
