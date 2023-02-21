/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePageDataContext } from '../../context/pageData-context';

export function Breadcrumb(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(pageData);
  }, [pageData]);

  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      {pageContentData?.payLoad?.navigationPath?.map((item, index) => (
        <li className={!item?.isRootCategory ? 'active' : ''}>
          {pageContentData?.payLoad?.navigationPath?.length - 1 !== index ? (
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
