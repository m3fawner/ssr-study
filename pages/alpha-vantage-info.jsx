import Head from 'next/head';
import {
  Text, Heading, Link, Button,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { context } from '../src/hooks/useGlobalState';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';

const AlphaVantageInfo = () => {
  const { setAlphaVantageAPIKey } = useContext(context);
  return (
    <>
      <Head>
        <title>FICarious | Alpha vantage info</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Heading mb="2">
        Alpha Vantage Info
      </Heading>
      <Text>
      &nbsp;&nbsp;
        <Link href="https://www.alphavantage.co/" color="brand.600" isExternal>Alpha Vantage</Link>
        {' '}
        is the data provider for stock quotes across this site.
        It has a limitation of 5 requests a minute, or 500 requests a day.
        As a result, I ask that you get a free API key from their site.
        It&apos;s really easy,
        {' '}
        <Link href="https://www.alphavantage.co/support/#api-key" color="brand.600" isExternal>click here.</Link>
        {' '}
        Fill out the 3 fields (I did Software/Personal/my email).
        I haven&apos;t received an email yet, so I am ok recommending it to you :).
      </Text>
      <Text my="2">
        &nbsp;&nbsp;
        After you have an API key, please enter it below. Don&apos;t see the input?
        That means you already have one entered!
      </Text>
      <AlphaVantageAPIKeyEntry />
      <Text my="2">
        &nbsp;&nbsp;
        If you want, you can clear it by clearing local storage, or the button below.
      </Text>
      <Button onClick={() => setAlphaVantageAPIKey('')}>Clear API key</Button>
      <Text mt="2">
        &nbsp;&nbsp;
        The API key is stored in local storage to allow you to not have to continually enter it.
        If you are uncomfortable with that, please disable local storage for this domain.
      </Text>
    </>
  );
};
export default AlphaVantageInfo;
