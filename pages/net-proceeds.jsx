import {
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';
import EstimatedNetGrant from '../src/components/EstimatedNetGrant';

const NetProceeds = () => (
  <>
    <Head>
      <title>Net RSU grant proceeds</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <VStack spacing="4">
      <AlphaVantageAPIKeyEntry />
      <EstimatedNetGrant />
    </VStack>
  </>
);
export default NetProceeds;
