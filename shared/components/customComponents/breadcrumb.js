/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import URLHandler from '../../helpers/urlHandler';
import { Loader } from '../loader';
import { constructBNSSEOURL } from '../urlUtils';
// import { usePageDataContext } from '../../context/pageData-context';

export function Breadcrumb(props) {
  const { data, pageType } = props;
  const [pageContentData, setPageContent] = useState(data);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchTerm = URLHandler('submit-search', router.asPath) || '';
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  useEffect(() => {
    router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    });
    router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
    });
    router.events.on('routeChangeError', (url) => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loader /> }
      <li key={1}>
        <Link href="/">Home</Link>
      </li>
      
      {pageType === 'search'
        ? (
          <li>
            <span>
              {`YOUR SEARCH RESULTS FOR "${pageContentData?.payLoad?.autoCorrectTerm ? pageContentData?.payLoad?.autoCorrectTerm : pageContentData?.payLoad?.searchTerm || searchTerm}"`}

            </span>
          </li>
        ) : pageType === 'nosearch'
          ? (
            <li class="active">
              <span>
                {`Your search results for "${pageContentData?.payLoad?.autoCorrectTerm ? pageContentData?.payLoad?.autoCorrectTerm : pageContentData?.payLoad?.searchTerm || searchTerm}"`}

              </span>
            </li>
          ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
            <>
              {pageContentData?.payLoad?.navigationPath?.map((item, _key) => (
                <li className={!item?.isRootCategory ? 'active' : ''} key={_key}>
                  {pageContentData?.payLoad?.navigationPath?.length - 1 !== _key ? (
                    <Link href={constructBNSSEOURL(item, 'plp')}>{item?.name}</Link>
                  ) : (
                    <span>{item?.name}</span>
                  )}
                </li>
              ))}
            </>
          )}
    </>
  );
}
export default Breadcrumb;
