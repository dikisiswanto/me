import { ColorModeScript } from "@chakra-ui/color-mode";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import meta from '../data/meta.json';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}/>
        <body>
          <ColorModeScript initialColorMode="dark" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}