import NextDocument, { Head, Main, NextScript, Html } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-US" className="dark">
        <Head />
        <body className="loading bg-white text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
