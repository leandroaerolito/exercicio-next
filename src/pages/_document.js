import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link
          rel="shortcut icon"
          href="imagens/favicon.png.png"
          type="imnage/png"
          sizes="250x250"
        />
        <meta name="author" content="Leandro Rocha" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
