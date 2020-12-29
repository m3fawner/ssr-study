import { Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { context } from '../src/hooks/useGlobalState';
import AlphaVantageAPIKeyEntry from '../src/components/AlphaVantageAPIKeyEntry';
import Head from '../src/components/Head';
import MarkdownConverter from '../src/components/MarkdownConverter';
import getMarkdown from '../markdown/getMarkdown';

const AlphaVantageInfo = ({ intro }) => {
  const { setAlphaVantageAPIKey } = useContext(context);
  return (
    <>
      <Head title="Alpha Vantage info" description="Learn about how FIcarious leverages Alpha Vantage's API and how to access the site's data." url="alpha-vantage-info" />
      <MarkdownConverter markdown={intro} />
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
AlphaVantageInfo.propTypes = {
  intro: PropTypes.string.isRequired,
};
export const getStaticProps = async () => ({
  props: {
    intro: await getMarkdown('alpha-vantage-info-intro'),
  },
});
export default AlphaVantageInfo;
