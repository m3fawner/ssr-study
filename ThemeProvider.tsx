import {
  ChakraProvider, extendTheme, withDefaultColorScheme,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const components = {
  Icon: {
    baseStyle: {
      height: '1em',
      width: '1em',
    },
  },
};
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
const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: 'brand' }),
  { colors, components },
);
type ThemeProviderProps = {
  children: ReactNode
}
const ThemeProvider = ({ children }: ThemeProviderProps) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;

export default ThemeProvider;
