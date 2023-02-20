/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { usePageDataContext } from "../context/pageData-context";
import URLHandler from '../helpers/urlHandler';

function Facet(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data);
  const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(pageData);
  }, [pageData]);

  const navigate = useRouter();
  const [selectedCategories, setSelectedCategories] = useState(navigate.query.id.join("+"));
  const [selectedFacets, setSelectedFacets] = useState(navigate?.query?.fs?.concat("+") || "");

  const path = navigate.asPath.split("?")[0];

  const categoryIds = URLHandler('id', navigate.asPath);
  const facetIds = URLHandler('fs', navigate.asPath) || "";

  useEffect(() => {
    setSelectedCategories(categoryIds);
    setSelectedFacets(facetIds);
  }, [categoryIds, facetIds]);

  return (
    <div className="catalog-aside">
      <div className="catalog-filter__top">
        {(pageContentData?.payLoad?.categories && pageContentData?.payLoad?.categories?.length > 0)
        ? (
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <a>Categories</a>
              </div>
            </div>
            <div className="panel-collapse">
              <div className="panel-body">
                <ul className="catalog-filter__category-list list-unstyled">
                  {pageContentData?.payLoad?.categories?.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={{
                          pathname: path,
                          query: { id: encodeURI(`${selectedCategories}+${item.id}`) },
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
          </div>
      ) : null}
        <div className="catalog-filter__clear">
          <b>Filters: </b>
          {pageContentData?.payLoad?.selectedFacets?.length > 0 && (
            <Link
              className="link-underline"
              href={{
                pathname: path,
                query: {
                  id: encodeURI(`${selectedCategories}`),
                },
              }}
            >
              Clear All
            </Link>
          )}
          
        </div>
        <ul className="catalog-filter__selected list-unstyled">
          {pageContentData?.payLoad?.selectedFacets?.map((val) => (
            <>
              {
                val.facetValues.map((item) => (
                  <li
                    className="js-detach-row"
                  >
                    <Link
                      className="js-detach-row-btn"
                      href={{
                        pathname: path,
                        query: {
                          id: encodeURI(`${selectedCategories}`),
                          // eslint-disable-next-line max-len
                          fs: encodeURI(`${selectedFacets.split("+").filter((ele) => ele !== item.facetId).join('+')}`),
                        },
                      }}
                      title="removeRefinement"
                    >
                      {item.facetLabel}
                      <i className="icon fas fa-times-circle"></i>
                    </Link>
                  </li>
                  ))
              }
            </>
          ))}
        </ul>
      </div>
      <div className="catalog-filter__block">
        <div className="panel-group">
          {pageContentData?.payLoad?.facets?.map((value, _key) => (
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
                          href={{
                          pathname: path,
                          query:
                          {
                            id: encodeURI(`${selectedCategories}`),
                            fs: encodeURI(`${selectedFacets !== "" ? `${selectedFacets}+` : ""}${val.facetId}`),
                          },
                        }}
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
      </div>
    </div>
  );
}

export default Facet;
