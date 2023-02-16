/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Template } from '../../shared/template/template';
import { usePageDataContext } from '../../shared/context/pageData-context';
import { SortVO } from '../../shared/template/sortVO';

export default function PageBuilder(props) {
 const { pageContent, data } = props;
  const [pageContentData, setPageContent] = useState(data.page);
  const { pageData } = usePageDataContext();
  console.log("propsss",data);
  useEffect(()=>{
    setPageContent(pageData?.payLoad?.page);
  },[pageData]);
  //const pageContentData = pageData?.payLoad?.page;
  
  return (
    <div id="main" className="static-main-container holidayContainer">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-megaMenuRegionCatPage">
            <div id="allnProductLisitingPage_v10-wi1400005">
              <div className="page-overlay js-overlay"></div>
              <div className="page-main-inner">
                <div className="container">
                  {pageContentData?.segmentsMap?.top ? (
                    <Template
                      templateData={pageContentData?.segmentsMap?.top}
                      {...props}
                    />
                  ) : (
                    ''
                  )}
                  <div className="product-listing-container">
                    <div className="row">
                      <aside className="col-md-3 col-sm-4 hidden-xs">
                        {pageContentData?.segmentsMap?.left ? (
                          <Template
                            templateData={pageContentData?.segmentsMap?.left}
                            {...props}
                          />
                        ) : (
                          ''
                        )}
                      </aside>
                      <div className="col-md-9 col-sm-8">
                        <div className="page-title-container d-flex justify-space-between align-items-top">
                          <h1>
                            <span className="result-title-count">
                              Holiday Food Gifts
                            </span>

                            <small className="results-count countOne">
                              (
                              {pageData?.payLoad?.productCount}
                            </small>
                            <small className="results-count">Results)</small>
                          </h1>
                          <button
                            className="btn btn-block btn-primary btn-filter js-mobile-menu-toggle visible-xs"
                            data-target="#mobileFilter"
                          >
                            Filter
                          </button>
                          <SortVO />
                          {/* <form className="form-inline sort-by">
                            <div className="form-group">
                              <label htmlFor="cc-sort">Sort By:</label>
                              <select id="cc-sort" className="form-control">
                                {}
                                <option value="">Recommended</option>
                                <option value="">Price: Low to High</option>
                                <option value="">Price: High to low</option>
                                <option value="">Name</option>
                              </select>
                              <span
                                className="text-danger"
                                role="alert"
                              >
                              </span>
                            </div>
                          </form> */}
                        </div>
                        <p className="page-description">
                          Are you looking for the best gift idea that will
                          stand out this holiday season? Get your friends and
                          loved ones a gourmet food gift from Allen Brothers.
                          Our selection of high-quality meats makes the
                          perfect gift for the foodie in your life!
                        </p>
                        <div id="product-grid">
                          <div className="row row-gutter-sm-15">
                            {pageContentData?.segmentsMap?.middle ? (
                              <Template
                                templateData={pageContentData?.segmentsMap?.middle}
                                {...props}
                              />
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
