import React from 'react';

export default function ShopOurGallery() {
  return (
    <div id="main" className="static-main-container shopOurGalleryContainer">
      <div className="row">
        <div className="redBox">
          <div data-bind="css: widthClass, attr: {id: 'region-'+name()}" className="col-sm-12" id="region-re1600002">
            <div id="ALLN-Article-Page-Breadcrumb_v1-wi2700002">
              <nav className="breadcrumbs-block hidden-print">
              <ol className="breadcrumb">
                <li>
                  <a href="/" data-bind="ccLink: {route: '/'},widgetLocaleText: 'breadcrumbHome'">Home</a>
                </li>
                <li className="active" data-bind="text: breadcrumbName">shop our gallery</li>
              </ol>
            </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re1600003">
            <div id="webContent_v2-wi2700003">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span data-bind="element: 'rich-text',id: '230001'" id="wi2700003-rich-text-230001">
                    <div className="cc-rich-text"><h1>Shop tasty @absteaks ambassador and customer favorites to create your own #myabsteaks masterpieces at home!</h1>
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
