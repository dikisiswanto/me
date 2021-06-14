import { ChakraProvider, Stack } from '@chakra-ui/react';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import NavBar from '../components/navbar';
import theme from '../theme';
import meta from '../data/meta.json';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Source+Serif+Pro:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="/style.css" rel="stylesheet" />
      </Head>
      <Stack minH="100vh" w="full" alignItems="center">
        <NextNProgress
          color={theme.colors.primary}
          startPosition={0.1}
          stopDelayMs={200}
          height={2}
          showOnShallow
        />
        <NavBar />
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  );
}

export default MyApp;
