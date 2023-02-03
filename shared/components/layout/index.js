/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-unresolved
import { useI18n } from 'next-localization';
import Footer from '../footer';
import Header from '../header/index';
// import PageLoader from '../common/pageLoader';
import { usePageDataContext } from '../../context/pageData-context';

export default function Layout({ children }) {
  const i18n = useI18n();
  const [sticky, setSticky] = useState('');
  const { pageData } = usePageDataContext();
  const pageDataContent = pageData;
  const headerContent = pageDataContent?.page?.globalTemplate?.siteHeader;
  const footerContent = pageDataContent && pageDataContent.page && pageDataContent.page.globalTemplate
    && pageDataContent.page.globalTemplate.siteFooter;

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 140 ? 'is-sticky' : '';
    setSticky(stickyClass);
  };

  // on render, set listener
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const router = useRouter();
  const showHeader = !(router.pathname === '/clubuserregistration' || router.pathname === '/MyAllenBrothersClub');
  const showFooter = !(router.pathname === '/clubuserregistration' || router.pathname === '/MyAllenBrothersClub');
  const currentRouterPath = router.pathname;

  useEffect(() => {
    async function changeLocale() {
      if (router.locale === 'en-US') {
        i18n.set('en-US', await import('../../../locales/en.json'));
        i18n.locale('en-US');
      } else if (router.locale === 'de') {
        i18n.set('de', await import('../../../locales/de.json'));
        i18n.locale('de');
      }
    }
    changeLocale();
  }, [router.locale]);

  return (
    <>
      {/* <PageLoader /> */}
      <div className="">
        {showHeader && (
          <div>
            <Header
              currentRouterPath={currentRouterPath}
              headerContent={headerContent}
            />
          </div>
        )}
        <div className={`main-content-${sticky}`}>
          <main className="page-row page-row-expanded">{children}</main>
        </div>

        {showFooter && <Footer footerContent={footerContent} />}
      </div>
    </>
  );
}
