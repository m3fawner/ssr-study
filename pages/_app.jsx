import PropTypes from 'prop-types';
import { Box, Flex, Divider } from '@chakra-ui/react';
import ThemeProvider from '../src/components/ThemeProvider';
import Header from '../src/components/Header';
import SocialShare, { SocialScripts } from '../src/components/SocialShare';
import Trello from '../src/components/Trello';
import GoogleAnalytics from '../src/components/GoogleAnalytics';
import Footer from '../src/components/Footer';

const App = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Header />
    <Flex bg="gray.100" justify="center">
      <Box flexBasis={['100%', null, null, '80em']} minH="100vh" maxW="100%">
        <Box as="main" bg="white" px="4">
          <Component {...pageProps} />
          <Divider my={6} />
          <SocialShare {...pageProps} />
          <Divider my={6} />
          <Trello />
          <Divider my={6} />
          <Footer pb={4} />
        </Box>
      </Box>
    </Flex>
    <SocialScripts />
    <GoogleAnalytics />
  </ThemeProvider>
);
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
export default App;
