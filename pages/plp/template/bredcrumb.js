import React from "react";
import { usePageDataContext } from "../../../shared/context/pageData-context";
import Link from 'next/link';

export function Bredcrumb() {    
  const { pageData } = usePageDataContext();

  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      {pageData?.payLoad?.navigationPath?.map((item, index) => {
        return (
          <li className={!item?.isRootCategory ? "active" : ""}>
            {pageData?.payLoad?.navigationPath?.length-1 !== index ? (
              <Link href={item.id}>{item?.name}</Link>
            ) : (
              <span>{item?.name}</span>
            )}
          </li>
        );
      })}
    </>
  );
}
