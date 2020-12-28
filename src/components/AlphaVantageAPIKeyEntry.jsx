import {
  PinInput, PinInputField, FormControl, FormLabel, FormHelperText, Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { context } from '../hooks/useGlobalState';

const AlphaVantageAPIKeyEntry = ({ count }) => {
  const { setAlphaVantageAPIKey, alphaVantageAPIKey } = useContext(context) ?? {};
  return (
    alphaVantageAPIKey ? null : (
      <FormControl id="apiKey">
        <FormLabel>Alpha Vantage API Key</FormLabel>
        <PinInput
          defaultValue={alphaVantageAPIKey}
          id="apiKey"
          onComplete={(val) => {
            if (val) setAlphaVantageAPIKey(val);
          }}
          mask
          type="alphanumeric"
        >
          {new Array(count).fill(null).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <PinInputField key={i} />
          ))}
        </PinInput>
        <FormHelperText>
          For more information, please learn more at the
          {' '}
          <Link as={NextLink} href="/alpha-vantage-info">Alpha Vantage Info</Link>
          {' '}
          page.
        </FormHelperText>
      </FormControl>
    )
  );
};
AlphaVantageAPIKeyEntry.propTypes = {
  count: PropTypes.number,
};
AlphaVantageAPIKeyEntry.defaultProps = {
  count: 16,
};
export default AlphaVantageAPIKeyEntry;
