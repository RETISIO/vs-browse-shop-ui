import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function PDPBreadcrumb(props) {
  const { payLoad } = props;
  const [pageContentData, setPageContent] = useState(payLoad);

  useEffect(() => {
    setPageContent(props?.payLoad);
  }, [props]);
  
  return (
    <nav className="breadcrumbs-block hidden-print">
      <ol className="breadcrumb">
        <li key={1}>
          <Link href="/">Home</Link>
        </li>
        {pageContentData?.navigationPath?.map((item, _key) => (
          <li className={!item?.isRootCategory ? 'active' : ''} key={_key}>
            {pageContentData?.navigationPath?.length - 1 !== _key ? (
              <Link href={`/category/${item.id}?N=${item.id}`}>{item?.name}</Link>
            ) : (
              <span>{item?.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default PDPBreadcrumb;
