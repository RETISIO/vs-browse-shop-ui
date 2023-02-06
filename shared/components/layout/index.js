/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import Footer from '../footer';
import Header from '../header/index';
import { usePageDataContext } from '../../context/pageData-context';
import { requestContructor } from '../../helpers/api';

export default function Layout({ children }) {
  const [sticky, setSticky] = useState('');
  const { pageData, setPageData } = usePageDataContext();
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
  const getChannelData = async() => {
    const res = await requestContructor('getChannelDetails', '', {}, false);
    return res;
  };
  // on render, set listener
  useEffect(() => {
    const channelData = getChannelData();
    setPageData({ ...pageData, channelData });

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);


  return (
    <>
      {/* <PageLoader /> */}
      <div className="">
        <div>
          <Header
            headerContent={headerContent}
          />
        </div>
        <div className={`main-content-${sticky}`}>
          <main className="page-row page-row-expanded">{children}</main>
        </div>
        <Footer footerContent={footerContent} />
      </div>
    </>
  );
}
