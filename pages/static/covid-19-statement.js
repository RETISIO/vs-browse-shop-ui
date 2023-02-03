import React from 'react';

export default function Covid19Statement() {
  return (
    <div id="main" className="static-main-container covid19Statement">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re1100002">
            <div id="ALLN-Article-Page-Breadcrumb_v1-wi2200001">
              <nav className="breadcrumbs-block hidden-print">
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active" data-bind="text: breadcrumbName">Covid-19 Statement</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re1100003">
            <div id="webContent_v2-wi2200002">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span data-bind="element: 'rich-text',id: '160001'" id="wi2200002-rich-text-160001">
                    <div className="cc-rich-text">
                      <h1 className="text-center mb-20" data-renderer-start-pos="204">Covid-19 Statement</h1>
                      <p data-renderer-start-pos="250" className="covidDesc">The Chefs’ Warehouse family of companies is committed to the health and safety of our employees, customers, vendors, and stakeholders. We endeavor to meet all CDC guidelines, as well as federal, state, and local legal and regulatory requirements. For a complete list of the current applicable COVID safety protocols at a particular location, please speak with your Chefs’ contact, or with the local Human Resources office.</p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div data-bind="template: { name: 'region-template', foreach: regions }" className="redBox">
        </div>
      </div>
    </div>
  );
}
