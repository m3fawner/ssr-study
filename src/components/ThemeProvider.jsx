import PropTypes from 'prop-types';
import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';

const components = {
  Icon: {
    baseStyle: {
      height: '1em',
      width: '1em',
    },
  },
};
// Currently isn't used, but I do want to brand all the things
const colors = {
  brand: {
    100: '#E0F3F5',
    200: '#C1E7EB',
    300: '#A3DBE1',
    400: '#84CFD7',
    500: '#65C3CD',
    600: '#46B7C3',
    700: '#379EA9',
    800: '#2D818B',
    900: '#23656C',
  },
};
const theme = extendTheme({ colors, components });
const ThemeProvider = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
