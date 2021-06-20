import {
  Box, ChakraProvider, EASINGS, Stack,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import NavBar from '../components/navbar';
import theme from '../theme';
import meta from '../data/meta.json';

const MotionBox = motion(Box);

const TRANSITION_SLIDE_FADE_VARIANTS = {
  initial: {
    opacity: 0,
    x: 0,
    y: -15,
  },
  enter: {
    duration: 0.2,
    ease: EASINGS.easeOut,
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    duration: 0.1,
    ease: EASINGS.easeIn,
    opacity: 0,
    x: 0,
    y: 15,
  },
};

function MyApp({ Component, pageProps, router }) {
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
        <AnimatePresence exitBeforeEnter>
          <MotionBox
            w="full"
            key={router.route}
            animate="enter"
            exit="exit"
            initial="initial"
            variants={TRANSITION_SLIDE_FADE_VARIANTS}
          >
            <Component {...pageProps} />
          </MotionBox>
        </AnimatePresence>
      </Stack>
    </ChakraProvider>
  );
}

export default MyApp;
