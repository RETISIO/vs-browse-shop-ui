/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import URLHandler from '../../../helpers/urlHandler';
import { searchTermHandler } from '../../../helpers/utils';
// import { usePageDataContext } from '../../context/pageData-context';

export function CategoryDescription(props) {
  const { data, pageType } = props;
  const { payLoad } = props;
  const [pageContentData, setPageContent] = useState(data);
  const [closeFlyout, setCloseFlyout] = useState(false);
  const router = useRouter();

  const searchTerm = searchTermHandler('submit-search', router.asPath) || '';
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  const navigatePage = () => {
    Router.push(`/noresult?submit-search=${searchTerm}`);
  };

  return (
    <>
      {props?.payLoad?.pageType === 'search' ? (
        <>
          {props?.payLoad?.autoCorrectTerm ? (
            <>
              {!closeFlyout && (
                <div
                  className="alert alert-dismissible hidden-print alert-info"
                  role="alert"
                >
                  <button className="close" type="button" aria-label="Close">
                    <span
                      aria-hidden="true"
                      onClick={() => setCloseFlyout(true)}
                    >
                      ×
                    </span>
                  </button>
                  <strong>
                    <span>
                      Search instead for
                      {' '}
                      <span
                        className="auto-suggest-word"
                        onClick={() => navigatePage()}
                      >
                        {searchTerm?.toLocaleLowerCase()}
                      </span>
                    </span>
                  </strong>
                </div>
              )}
            </>
          ) : null}
        </>
      ) : (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: payLoad?.categoryData?.[0]?.description,
            }}
          >
          </div>
          <br />
        </>
      )}
    </>
  );
}

export function CategoryLongDescription(props) {
  const { data } = props;
  const { payLoad } = props;
  const [pageContentData, setPageContent] = useState(data);
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <>
      <div
        className="hidden-xs"
        // eslint-disable-next-line max-len
        dangerouslySetInnerHTML={{
          __html: payLoad?.categoryData?.[0]?.longDescription,
        }}
      >
      </div>
      <br />
    </>
  );
}

export default { CategoryDescription, CategoryLongDescription };
