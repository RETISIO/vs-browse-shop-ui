/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import Footer from '../footer';
import Header from '../header/index';
import { usePageDataContext } from '../../context/pageData-context';
import { useAppContext } from '../../context/appContext';

export default function Layout({ data, children, appData }) {
  const { pageData } = usePageDataContext();
  const { state } = useAppContext();
  const pageDataContent = data || pageData;
  const applicationData = appData || state;
  const headerContent = pageDataContent?.page?.globalTemplate?.siteHeader;
  const footerContent = pageDataContent && pageDataContent.page && pageDataContent.page.globalTemplate
    && pageDataContent.page.globalTemplate.siteFooter;

  const isHomePage = pageDataContent?.page?.pageName === 'Home' ? pageDataContent.page.pageName : '';
  return (
    <>
      {/* <PageLoader /> */}
      <div className="">
        <div>
          <Header
            headerContent={headerContent}
            appData={applicationData}
            isHomePage={isHomePage}
          />
        </div>
        <div className="main-content-">
          <main className="page-row page-row-expanded">{children}</main>
        </div>
        <Footer footerContent={footerContent} />
      </div>
    </>
  );
}
