import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{width: '100vw'}}>
      <Head>
        <meta property="og:image" content="https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?b=1&s=612x612&w=0&k=20&c=ujRPoiaJlm5U3WDWcVVa1YVlFIt6Gcjr-RstzOEPbIU=" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
