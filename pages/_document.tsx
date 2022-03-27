import NextDocument, { Head, Main, NextScript, Html } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-US" className="dark h-full">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=optional"
            rel="stylesheet"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                  } else {
                    document.documentElement.classList.remove('dark')
                  }
                } catch (_) {}
              `,
            }}
          />
        </Head>
        <body className="loading h-full bg-white text-slate-600 antialiased dark:bg-gray-900 dark:text-slate-200">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}