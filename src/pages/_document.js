import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="stylesheet" href="/fonts/cocogothic/stylesheet.css" type="text/css" charSet="utf-8" />
      <link rel="stylesheet" href="/fonts/amsterdamone/stylesheet.css" type="text/css" charSet="utf-8" />
      <link rel="stylesheet" href="/fonts/catchymager/stylesheet.css" type="text/css" charSet="utf-8" />
      <script src="https://kit.fontawesome.com/ebc8b6ff08.js" crossOrigin="anonymous"></script>
      <title>Events by Juna</title>
        <meta name="description" content="At Events by Juna we strive to deliver an unforgettable event from planning, decor. We organize events of all sizes in Seattle, Washington and the surrounding areas, including weddings, corporate events, birthday parties, holiday parties, and anniversaries."/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
