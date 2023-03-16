/* eslint-disable react/destructuring-assignment */
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
import Accordion from 'react-bootstrap/Accordion';
import { usePageDataContext } from "../../../context/pageData-context";
import URLHandler from '../../../helpers/urlHandler';

function Facet(props) {
  const { mobileView, closeToggle, pageType } = props;
  const [pageContentData, setPageContent] = useState(props.data);
  const { pageData } = usePageDataContext();
  const [isClick, setIsClicked] = useState(false);
  
  useEffect(() => {
    setPageContent(props?.data);
    if(isClick && mobileView) {
       closeToggle();
       setIsClicked(false);
    }
  }, [props]);

  const navigate = useRouter();
  // const [selectedCategories, setSelectedCategories] = useState(navigate?.query?.id?.join("+") || "");
  const [selectedCategories, setSelectedCategories] = useState(navigate?.query?.id?.concat("+") || "");
  const [selectedFacets, setSelectedFacets] = useState(navigate?.query?.t?.concat("+") || "");
  const [searchKey, setSearchKey] = useState(navigate?.query?.['submit-search']?.concat("+") || "");

  const path = navigate.asPath.split("?")[0];

  const categoryIds = URLHandler('id', navigate.asPath) || "";
  const facetIds = URLHandler('t', navigate.asPath) || "";
  const searchTerm = URLHandler('submit-search', navigate.asPath) || '';

  useEffect(() => {
    setSelectedCategories(categoryIds);
    setSelectedFacets(facetIds);
    setSearchKey(searchTerm);
  }, [categoryIds, facetIds, searchTerm]);

  const clickFilter = () => {
    setTimeout(() => {
      setIsClicked(true);
    }, 100);
  };

  return (
    <>
      <div className="catalog-filter__top">
        {(pageContentData?.payLoad?.categories && pageContentData?.payLoad?.categories?.length > 0
        && pageType !== "search")
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
                          query: {
                            'submit-search': encodeURI(`${searchKey}`),
                            id: encodeURI(`${selectedCategories !== "" ? `${selectedCategories}+` : ""}${item.id}`),
                            t: encodeURI(`${selectedFacets}`),
                          },
                        }}
                        onClick={() => clickFilter()}
                      >
                        {item.name}
                        {' '}
                        (
                        {item.productCount}
                        )
                      </Link>
                    </li>
                  ))}
                  
                </ul>
              </div>
            </div>
          </div>
      ) : null}
        <div className="catalog-filter__clear">
          <b>Your Selections: </b>
          {pageType !== "search" && pageContentData?.payLoad?.selectedFacets?.length > 0 && (
          <Link
            className="link-underline"
            href={{
                pathname: path,
                query: {
                  id: encodeURI(`${selectedCategories}`),
                },
              }}
            onClick={() => clickFilter()}
          >
            Clear All
          </Link>
          )}
          {pageType === "search" && (pageContentData?.payLoad?.categoriesSelected?.length > 0 ||
          pageContentData?.payLoad?.selectedFacets?.length > 0) && (
          <Link
            className="link-underline"
            href={{
                pathname: path,
                query: {
                  'submit-search': encodeURI(`${searchKey}`),
                },
              }}
            onClick={() => clickFilter()}
          >
            Clear All
          </Link>
          )}
          
        </div>
        <ul className="catalog-filter__selected list-unstyled">
          {pageType === "search" && pageContentData?.payLoad?.categoriesSelected?.map((val) => (
            <>
              {
                val.facetValues.map((item, _key) => (
                  <li
                    className="js-detach-row"
                    key={_key}
                  >
                    <Link
                      className="js-detach-row-btn"
                      href={{
                        pathname: path,
                        query: {
                          t: encodeURI(`${selectedFacets}`),
                          'submit-search': encodeURI(`${searchKey}`),
                          // eslint-disable-next-line max-len
                          id: encodeURI(`${selectedCategories.split("+").filter((ele) => ele !== item.facetId).join('+')}`),
                        },
                      }}
                      title="removeRefinement"
                      onClick={() => clickFilter()}
                    >
                      {item.facetLabel}
                      <i className="icon fas fa-times-circle"></i>
                    </Link>
                  </li>
                  ))
              }
            </>
          ))}
          {pageContentData?.payLoad?.selectedFacets?.map((val) => (
            <>
              {
                val.facetValues.map((item, _key) => (
                  <li
                    className="js-detach-row"
                    key={_key}
                  >
                    <Link
                      className="js-detach-row-btn"
                      href={{
                        pathname: path,
                        query: {
                          id: encodeURI(`${selectedCategories}`),
                          'submit-search': encodeURI(`${searchKey}`),
                          // eslint-disable-next-line max-len
                          t: encodeURI(`${selectedFacets.split("+").filter((ele) => ele !== item.facetId).join('+')}`),
                        },
                      }}
                      title="removeRefinement"
                      onClick={() => clickFilter()}
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
      <div className="catalog-filter__block ab-accordion-container">
        <div className="panel-group">
          {pageType === "search"
          && (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Categories
                <i className="icon fas fa-chevron-down"></i>
              </Accordion.Header>
              {pageContentData?.payLoad?.categories?.map((val, index) => (
                <Accordion.Body>
                  <Link
                    href={{
                          pathname: path,
                          query: {
                          'submit-search': encodeURI(`${searchTerm}`),
                            t: encodeURI(`${selectedFacets}`),
                            id: encodeURI(`${selectedCategories !== "" ? `${selectedCategories}+` : ""}${val.id}`),
                          },
                        }}
                    onClick={() => clickFilter()}
                  >
                    {val.name}
                    {' '}
                    (
                    {val.productCount}
                    )
                  </Link>
                </Accordion.Body>
                        ))}
            </Accordion.Item>
          </Accordion>
          )}
         
          {pageContentData?.payLoad?.facets?.map((value, _key) => (
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey={_key < (mobileView ? 2 : 3) ? "0" : "1"}>
                <Accordion.Header>
                  {value.displayName}
                  <i className="icon fas fa-chevron-down"></i>
                </Accordion.Header>
                {value?.facetValues?.map((val, index) => (
                  <Accordion.Body>
                    <Link
                      href={{
                        pathname: path,
                        query: {
                          'submit-search': encodeURI(`${searchTerm}`),
                          id: encodeURI(`${selectedCategories}`),
                          t: encodeURI(`${selectedFacets !== "" ? `${selectedFacets}+` : ""}${val.facetId}`),
                        },
                      }}
                      onClick={() => clickFilter()}
                    >
                      {val.facetLabel}
                      {' '}
                      (
                      {val.facetValueCount}
                      )
                    </Link>
                  </Accordion.Body>
                      ))}
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export default Facet;
