import NextDocument, { Head, Main, NextScript, Html } from "next/document";
import { useAmp } from 'next/amp';
import { GA_TRACKING_ID } from '@/lib/analytics'

function AmpWrap({ ampOnly, nonAmp }) {
  const isAmp = useAmp();
  if (ampOnly) return isAmp && ampOnly;
  return !isAmp && nonAmp;
}

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-teal-900">
          <Main />
          <NextScript />
          <AmpWrap
            ampOnly={
              <amp-analytics type="googleanalytics" id="analytics1" data-credentials="include">
                <script
                  type="application/json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      vars: {
                        account: GA_TRACKING_ID,
                        gtag_id: GA_TRACKING_ID,
                        config: {
                          GA_TRACKING_ID: { groups: 'default' }
                        }
                      },
                      triggers: {
                        trackPageview: {
                          on: 'visible',
                          request: 'pageview'
                        }
                      }
                    })
                  }}
                />
              </amp-analytics>
            }
          />
          <AmpWrap
            nonAmp={
              <>
                <script
                  async
                  src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}');
                  `
                  }}
                />
              </>
            }
          />
        </body>
      </Html>
    );
  }
}