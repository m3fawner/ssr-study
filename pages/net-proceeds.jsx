import Head from 'next/head';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';
import EstimatedNetGrant from '../src/components/EstimatedNetGrant';

const NetProceeds = () => (
  <>
    <Head>
      <title>Net RSU grant proceeds</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AlphaVantageAPIKeyEntry />
    <EstimatedNetGrant />
  </>
);
export default NetProceeds;
