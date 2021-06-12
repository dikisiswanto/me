import { ChakraProvider, extendTheme, Stack } from "@chakra-ui/react";
import Nav from "../components/nav";
import theme from "../theme";
import "@fontsource/montserrat/700.css";
import "@fontsource/source-serif-pro/400.css";
import "@fontsource/source-serif-pro/600.css";
import "@fontsource/source-serif-pro/700.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack minH="100vh" w="full" alignItems="center">
        <Nav/>
        <Component {...pageProps} />
      </Stack>
    </ChakraProvider>
  )
}

export default MyApp
