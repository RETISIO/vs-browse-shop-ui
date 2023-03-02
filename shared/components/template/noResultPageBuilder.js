/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Template } from './template';

export default function PageBuilder(props) {
  const { page } = props;
  const [pageContentData, setPageContent] = useState(page);
  useEffect(() => {
    setPageContent(props?.page);
  }, [props]);
  
  return (
    <div id="main" className="container">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-megaMenuRegionNoSearchResults">
            <div id="allnNoSearchResults_v1-wi400015">
              <div className="page-main-inner">
                <div className="container">
                  {pageContentData?.segmentsMap?.top ? (
                    <Template
                      templateData={pageContentData?.segmentsMap?.top}
                      type="breadcrumb"
                      {...props}
                    />
                  ) : (
                    ''
                  )}
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
    
      <div className="row">
        <div className="redBox">
        </div>
      </div>
    </div>
  );
}
