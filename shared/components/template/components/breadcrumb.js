/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import URLHandler from '../../../helpers/urlHandler';
// import { usePageDataContext } from '../../context/pageData-context';

export function Breadcrumb(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  const router = useRouter();
  const searchTerm = URLHandler('st', router.asPath) || '';
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <>
      <li key={1}>
        <Link href="/">Home</Link>
      </li>
      
      {pageContentData?.page?.pageType?.id === 'search:default'
        ? (
          <li>
            <span>{`YOUR SEARCH RESULTS FOR "${pageContentData?.payLoad?.autoCorrectTerm ? pageContentData?.payLoad?.autoCorrectTerm : searchTerm}"`}</span>
          </li>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {pageContentData?.payLoad?.navigationPath?.map((item, _key) => (
              <li className={!item?.isRootCategory ? 'active' : ''} key={_key}>
                {pageContentData?.payLoad?.navigationPath?.length - 1 !== _key ? (
                  <Link href={`${item.id}?id=${item.id}`}>{item?.name}</Link>
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
