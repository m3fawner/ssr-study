import {
  FormControl, Input, FormLabel, Button, Flex, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import Head from 'next/head';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';
import useAlphaVantageAPI from '../src/hooks/useAlphaVantageAPI';

export default function Home() {
  const [symbol, setSymbol] = useState('');
  const { getData } = useAlphaVantageAPI();
  return (
    <>
      <Head>
        <title>SSR Study home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack spacing="4">
        <AlphaVantageAPIKeyEntry />
        <FormControl>
          <FormLabel>Ticker symbol</FormLabel>
          <Flex>
            <Input onChange={({ target: { value } }) => setSymbol(value)} value={symbol} />
            <Button ml="2" onClick={() => getData(symbol)}>Get data</Button>
          </Flex>
        </FormControl>
      </VStack>
    </>
  );
}
