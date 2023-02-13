/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import Footer from '../footer';
import Header from '../header/index';

export default function Layout({ data, children, appData, transformText, rootCatagories }) {
  const pageDataContent = data;
  const applicationData = appData;
  const headerContent = pageDataContent?.page?.globalTemplate?.siteHeader;
  const footerContent = pageDataContent && pageDataContent.page && pageDataContent.page.globalTemplate
    && pageDataContent.page.globalTemplate.siteFooter;

  const transformTexttoi18 = (text) => {
    const translatedText = typeof transformText === 'function' ? transformText(text) : text;
    return translatedText;
  }
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
            rootCatagories={rootCatagories}
            transformText={transformTexttoi18}
          />
        </div>
        <div className="main-content-">
          <main className="page-row page-row-expanded">{children}</main>
        </div>
        <Footer footerContent={footerContent} transformText={transformTexttoi18} />
      </div>
    </>
  );
}
