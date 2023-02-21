/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Template } from './template';
import { usePageDataContext } from '../context/pageData-context';
import SortVO from './sortVO';

export default function PageBuilder(props) {
  const { data } = props;
  const [pageContentData, setPageContent] = useState(data?.page);
  const { pageData } = usePageDataContext();
  useEffect(() => {
    setPageContent(pageData?.payLoad?.page);
  }, [pageData]);
  
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
                          {pageContentData?.segmentsMap?.middle ? (
                            <Template
                              templateData={pageContentData?.segmentsMap?.middle}
                              type="resultCount"
                              {...props}
                            />
                          ) : (
                            ''
                          )}
                          <button
                            className="btn btn-block btn-primary btn-filter js-mobile-menu-toggle visible-xs"
                            data-target="#mobileFilter"
                          >
                            Filter
                          </button>
                          <SortVO {...props} />
                        </div>
                        <div className="page-description">
                          {pageContentData?.segmentsMap?.middle ? (
                            <Template
                              templateData={pageContentData?.segmentsMap?.middle}
                              type="categoryDescription"
                              {...props}
                            />
                          ) : (
                            ''
                          )}
                        </div>
                        <div id="product-grid">
                          <div className="row row-gutter-sm-15">
                            {pageContentData?.segmentsMap?.middle ? (
                              <Template
                                templateData={pageContentData?.segmentsMap?.middle}
                                type="resultList"
                                {...props}
                              />
                            ) : (
                              ''
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9 col-md-offset-3">
                        {pageContentData?.segmentsMap?.middle ? (
                          <Template
                            templateData={pageContentData?.segmentsMap?.middle}
                            type="categoryLongDescription"
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
  );
}
