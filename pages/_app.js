/* eslint-disable import/no-unresolved */
import { I18nProvider } from 'next-localization';
import { useRouter } from 'next/router';
import { AppWrapper } from '../shared/context/appContext';
import Layout from '../shared/components/layout';
import '../styles/style.css';
import '../styles/fontawsome.css';
import '../styles/fonts/montserratFont.css';
import '../styles/styles.scss';
import { PageDataContextWrapper } from '../shared/context/pageData-context';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { lngDict } = pageProps;
  return (
    <I18nProvider lngDict={lngDict} locale={router.locale}>
      <AppWrapper>
        <PageDataContextWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageDataContextWrapper>
      </AppWrapper>
    </I18nProvider>
  );
}
