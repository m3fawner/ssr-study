import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';
import 'react-vis/dist/style.css';
import ThemeProvider from '../src/components/ThemeProvider';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Header />
    <Flex bg="gray.100" justify="center">
      <Box flexBasis={['100%', null, null, '80em']} minH="100vh" maxW="100%">
        <Box as="main" bg="white" px="4">
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </Flex>
  </ThemeProvider>
);
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
export default App;
