/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { usePageDataContext } from '../../context/pageData-context';

export function Breadcrumb(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  // const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(props?.data);
  }, [props]);

  return (
    <>
      <li key={1}>
        <Link href="/">Home</Link>
      </li>
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
  );
}
export default Breadcrumb;
