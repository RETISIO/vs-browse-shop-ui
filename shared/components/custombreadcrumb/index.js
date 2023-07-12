/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Loader } from '../loader';
import { searchTermHandler } from '../../helpers/utils';
import { constructBNSSEOURL } from '../urlUtils';

function CustomBreadcrumb(props) {
  const router = useRouter();
  const searchTerm = searchTermHandler('submit-search', router.asPath) || '';
  const [pageContentData, setPageContent] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if(props?.payLoad?.pageType === 'PDP') {
      const prdObj = [
        {
          isRootCategory: false,
          id: props?.payLoad?.products[0]?.productId,
          name: props?.payLoad?.products[0]?.displayName,
        },
      ];
      const navPath = props?.payLoad?.navigationPath || [];
      setPageContent([...navPath, ...prdObj]);
    }
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
    const handleBeforeUnload = () => {
      // Clear the cache when the user navigates away from the page
      setLoading(false);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <nav className="breadcrumbs-block hidden-print" aria-label="Breadcrumb">
        <ol className="breadcrumb">
          <li key={1}>
            <Link href="/">Home</Link>
          </li>

          {props?.payLoad?.pageType === 'PDP'
            ? (
              <>
                {pageContentData?.map((item, _key) => (
                  <li className={!item?.isRootCategory ? 'active' : ''} key={_key} aria-current={pageContentData?.length - 1 === _key ? 'page' : null}>
                    {pageContentData?.length - 1 !== _key ? (
                      <Link href={constructBNSSEOURL(item, 'plp')} alt={item?.name}>
                        {item?.name}
                      </Link>
                    ) : (
                      <span>{item?.name}</span>
                    )}
                  </li>
                ))}
              </>
            )
            : (
              <>
                {props?.payLoad?.pageType === 'search'
                  ? (
                    <li>
                      <span>
                        {`YOUR SEARCH RESULTS FOR "${props?.payLoad?.autoCorrectTerm ? props?.payLoad?.autoCorrectTerm : searchTerm}"`}
                      </span>
                    </li>
                  ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {props?.payLoad?.navigationPath?.map((item, _key) => (
                        <li className={!item?.isRootCategory ? 'active' : ''} key={_key} aria-current={props?.payLoad?.navigationPath?.length - 1 === _key ? 'page' : null}>
                          {props?.payLoad?.navigationPath?.length - 1 !== _key ? (
                            <Link href={constructBNSSEOURL(item, 'plp')} alt={item?.name}>{item?.name}</Link>
                          ) : (
                            <span>{item?.name}</span>
                          )}
                        </li>
                      ))}
                    </>
                  )}
              </>
            )}
        </ol>
      </nav>
    </>
  );
}

export default CustomBreadcrumb;
