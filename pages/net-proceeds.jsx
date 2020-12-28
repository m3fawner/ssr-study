import Head from 'next/head';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';
import EstimatedNetGrant from '../src/components/EstimatedNetGrant';

const NetProceeds = () => (
  <>
    <Head>
      <title>FIcarious | Net RSU grant proceeds</title>
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <AlphaVantageAPIKeyEntry />
    <EstimatedNetGrant />
  </>
);
export default NetProceeds;
