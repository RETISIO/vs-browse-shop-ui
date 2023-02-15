/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { usePageDataContext } from "../context/pageData-context";

function Facet() {
  const { pageData } = usePageDataContext();
  const navigate = useRouter();
  // const [urlIds, setUrlIds] = useState("");

  // const handleFacet = (id, checked) => {
  //   let urlArr = [];
  //   if (checked) {
  //     urlArr = [...urlIds, id];
  //   } else {
  //   }
  //   setUrlIds(urlArr);
  // };

  console.log("urlIds", navigate.asPath);

  return (
    <div className="panel-group">
      {pageData?.payLoad?.facets?.map((value, _key) => (
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="panel-title">
              <a
                role="button"
                data-toggle="collapse"
                href="#collapse_0"
                d="heading_0"
              >
                {value.displayName}
                <i className="icon fas fa-chevron-down"></i>
              </a>
            </div>
          </div>
          <div
            className="panel-collapse in"
            data-collapse="xs"
            id="collapse_0"
          >
            <div className="panel-body">
              <ul className="catalog-filter__category-list list-unstyled">
                {value?.facetValues?.map((val, index) => (
                  <li>
                    <Link
                      // href={`${navigate.asPath}+${val.facetLabel}`}
                      // eslint-disable-next-line max-len
                      href={`/plp/${pageData?.payLoad?.incomingUrl}?id=${pageData?.payLoad?.incomingUrl}+${val.facetLabel}`}
                    >
                      {val.facetLabel}
                      {' '}
                      (
                      {val.facetValueCount}
                      )
                    </Link>
                  </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facet;
