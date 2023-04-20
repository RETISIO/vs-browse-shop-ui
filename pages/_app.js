/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useEffect } from 'react';
import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';
import { SSRProvider } from 'react-bootstrap';
import Script from 'next/script';
import { AppWrapper } from '../shared/context/appContext';
// import Layout from '../shared/components/layout';
import '../styles/style.css';
import '../styles/fontawsome.css';
import '../styles/fonts/montserratFont.css';
import '../styles/styles.scss';
// eslint-disable-next-line import/named
import { PageDataContextWrapper } from '../shared/context/pageData-context';
import { PLPDataContextWrapper } from '../shared/context/plpDatacontext';
import GoogleAnalytics from '../shared/components/ThirdPartyScripts/GoogleAnalytics';
import Listract from '../shared/components/ThirdPartyScripts/Listract';
import RetisioSDK from '../shared/components/ThirdPartyScripts/RetisioSDK';
import { MiniCartContextWrapper } from '../shared/context/miniCartcontext';
import { FormDataContextWrapper } from '../shared/context/formDataContext';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { lngDict } = pageProps;
  return (
    <SSRProvider>
      <I18nProvider lngDict={lngDict} locale={router.locale}>
        <AppWrapper>
          <PageDataContextWrapper>
            <PLPDataContextWrapper>
              <FormDataContextWrapper>
                <MiniCartContextWrapper>
                  {/* <Layout> */}
                  <Component {...pageProps} />
                  {/* </Layout> */}
                </MiniCartContextWrapper>
              </FormDataContextWrapper>
            </PLPDataContextWrapper>
          </PageDataContextWrapper>
        </AppWrapper>
      </I18nProvider>
      <Script src="/js/listrack.js" strategy="beforeInteractive" />
      <GoogleAnalytics />
      <Listract />
      <RetisioSDK />
    </SSRProvider>
  );
}
