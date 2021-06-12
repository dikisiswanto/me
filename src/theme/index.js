import { extendTheme } from '@chakra-ui/react';

const configs = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
    primary: '#ffc700',
    secondary: '#2ecc71',
  },
  fonts: {
    heading: 'Montserrat',
    body: 'Source Serif Pro',
  },
};

const theme = extendTheme(configs);

export default theme;
