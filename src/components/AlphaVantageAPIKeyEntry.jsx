import {
  PinInput, PinInputField, FormControl, FormLabel, FormHelperText, Link, Alert, AlertIcon,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { context } from '../hooks/useGlobalState';

const AlphaVantageAPIKeyEntry = ({ count }) => {
  const { setAlphaVantageAPIKey, alphaVantageAPIKey } = useContext(context);
  return (
    alphaVantageAPIKey ? null : (
      <>
        <Alert status="info">
          <AlertIcon />
          This page uses local storage for this API key to prevent unnecessary entry.
          Please disable local storage if you are uncomfortable with that.
        </Alert>
        <FormControl id="apiKey">
          <FormLabel>Alpha Vantage API Key</FormLabel>
          <PinInput defaultValue={alphaVantageAPIKey} id="apiKey" onComplete={setAlphaVantageAPIKey} mask type="alphanumeric">
            {new Array(count).fill(null).map((_, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <PinInputField key={i} />
            ))}
          </PinInput>
          <FormHelperText>
            To begin using this site, get a free Alpha Vantage API key
            {' '}
            <Link target="_blank" href="https://www.alphavantage.co/support/#api-key">here.</Link>
          </FormHelperText>
        </FormControl>
      </>
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
