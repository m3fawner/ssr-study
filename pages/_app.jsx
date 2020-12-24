import PropTypes from 'prop-types';
import { Grid, GridItem } from '@chakra-ui/react';
import ThemeProvider from '../src/components/ThemeProvider';
import GlobalStateManager from '../src/components/GlobalStateManager';
import Header from '../src/components/Header';

const App = ({ Component, pageProps }) => (
  <GlobalStateManager>
    <ThemeProvider>
      <Header />
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
    </ThemeProvider>
  </GlobalStateManager>
);
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
export default App;
