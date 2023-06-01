/* eslint-disable max-len */
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
// import { usePageDataContext } from "../../../context/pageData-context";
import URLHandler from '../../../helpers/urlHandler';
import { searchTermHandler } from "../../../helpers/utils";

function Facet(props) {
  const { mobileView, closeToggle } = props;
  // const [pageContentData, setPageContent] = useState(props.data);
  // const { pageData } = usePageDataContext();
  const [isClick, setIsClicked] = useState(false);
  
  useEffect(() => {
    // setPageContent(props?.data);
    if(isClick && mobileView) {
       closeToggle();
       setIsClicked(false);
    }
  }, [props]);

  const navigate = useRouter();
  // const [selectedCategories, setSelectedCategories] = useState(navigate?.query?.id?.join("+") || "");
  const [selectedCategories, setSelectedCategories] = useState(navigate?.query?.N?.concat("+") || "");
  const [selectedFacets, setSelectedFacets] = useState(navigate?.query?.t?.concat("+") || "");
  const [searchKey, setSearchKey] = useState(navigate?.query?.['submit-search']?.concat("+") || "");

  const path = navigate.asPath.split("?")[0];

  const categoryIds = URLHandler('N', navigate.asPath) || "";
  const facetIds = URLHandler('t', navigate.asPath) || "";
  const searchTerm = searchTermHandler('submit-search', navigate.asPath) || '';

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
    <aside className={!mobileView ? "hidden-xs" : ""}>
      <div className="catalog-aside">
        <div className="catalog-filter__top">
          {(props?.payLoad?.categoryFacetEnabled && props?.payLoad?.categories
        && props?.payLoad?.categories?.length > 0
        && props?.payLoad?.pageType !== "search")
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
                  {props?.payLoad?.categories?.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={{
                          pathname: path,
                          query: {
                            'submit-search': encodeURI(`${searchKey}`),
                            N: encodeURI(`${selectedCategories !== "" ? `${selectedCategories}+` : ""}${item.id}`),
                            t: encodeURI(`${selectedFacets}`),
                          },
                        }}
                        onClick={() => clickFilter()}
                      >
                        {item?.name}
                        {' '}
                        {item?.productCount && `(
                        ${item?.productCount}
                        )`}
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
            {props?.payLoad?.pageType !== "search" && props?.payLoad?.selectedFacets?.length > 0 && (
            <Link
              className="link-underline"
              href={{
                pathname: path,
                query: {
                  N: encodeURI(`${selectedCategories}`),
                },
              }}
              onClick={() => clickFilter()}
            >
              Clear All
            </Link>
          )}
            {props?.payLoad?.pageType === "search" && (props?.payLoad?.categoriesSelected?.length > 0
          || props?.payLoad?.selectedFacets?.length > 0) && (
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
            {props?.payLoad?.pageType === "search" && props?.payLoad?.categoriesSelected?.map((val, i) => (
              <React.Fragment key={i}>
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
                          N: encodeURI(`${selectedCategories.split("+").filter((ele) => ele !== item.facetId).join('+')}`),
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
              </React.Fragment>
          ))}
            {props?.payLoad?.selectedFacets?.map((val, i) => (
              <React.Fragment key={i}>
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
                          N: encodeURI(`${selectedCategories}`),
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
              </React.Fragment>
          ))}
          </ul>
        </div>
        <div className="catalog-filter__block ab-accordion-container">
          <div className="panel-group">
            {(props?.payLoad?.pageType === "search") && (props?.payLoad?.categories?.length > 0)
          && (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Categories
                <i className="icon fas fa-chevron-down"></i>
              </Accordion.Header>
              {props?.payLoad?.categories?.map((val, index) => (
                <React.Fragment key={index}>
                  <Accordion.Body>
                    <Link
                      href={{
                            pathname: path,
                            query: {
                            'submit-search': encodeURI(`${searchTerm}`),
                              t: encodeURI(`${selectedFacets}`),
                              N: encodeURI(`${selectedCategories !== "" ? `${selectedCategories}+` : ""}${val.id}`),
                            },
                          }}
                      onClick={() => clickFilter()}
                    >
                      {val?.name}
                      {' '}
                      {val?.productCount && `(
                      ${val?.productCount}
                      )`}
                      
                    </Link>
                  </Accordion.Body>
                </React.Fragment>
                        ))}
            </Accordion.Item>
          </Accordion>
          )}
         
            {props?.payLoad?.facets?.map((value, _key) => (
              <React.Fragment key={_key}>
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
                            N: encodeURI(`${selectedCategories}`),
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
              </React.Fragment>
          ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Facet;
