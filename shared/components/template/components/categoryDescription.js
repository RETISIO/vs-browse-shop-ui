/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import { searchTermHandler } from '../../../helpers/utils';

export function CategoryDescription(props) {
  const { payLoad } = props;
  const [closeFlyout, setCloseFlyout] = useState(false);
  const router = useRouter();

  const searchTerm = searchTermHandler('submit-search', router.asPath) || '';

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
                        aria-label="Search Term"
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
            role="region"
            aria-live="polite"
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
  const { payLoad } = props;

  return (
    <>
      <div
        className="hidden-xs"
        role="region"
        aria-live="polite"
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
