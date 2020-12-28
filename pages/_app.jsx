import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';
import ThemeProvider from '../src/components/ThemeProvider';
import GlobalStateManager from '../src/components/GlobalStateManager';
import Header from '../src/components/Header';

const App = ({ Component, pageProps }) => (
  <GlobalStateManager>
    <ThemeProvider>
      <Header />
      <Flex bg="gray.100" justify="center">
        <Box flexBasis={['100%', null, null, '80em']} minH="100vh">
          <Box bg="white" px="4">
            <Component {...pageProps} />
          </Box>
        </Box>
      </Flex>
    </ThemeProvider>
  </GlobalStateManager>
);
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
export default App;
