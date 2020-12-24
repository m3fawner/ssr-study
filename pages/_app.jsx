import PropTypes from 'prop-types';
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react';
import GlobalStateManager from '../src/components/GlobalStateManager';

const App = ({ Component, pageProps }) => (
  <GlobalStateManager>
    <ChakraProvider>
      <Grid
        templateRows="repeat(1, 100vh)"
        templateColumns={['repeat(4, 1fr)', null, null, 'repeat(6, 1fr)']}
      >
        <GridItem colSpan={1} bg="gray.100" />
        <GridItem colSpan={4} m="4">
          <Component {...pageProps} />
        </GridItem>
        <GridItem colSpan={1} bg="gray.100" />
      </Grid>
    </ChakraProvider>
  </GlobalStateManager>
);
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
export default App;
