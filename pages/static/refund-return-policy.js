import React from 'react';
import HighlightedProducts from './highlighted-products';

export default function RefundReturnPolicy() {
  return (
    <div id="main" className="static-main-container refund-policy">
      <div className="row">
        <div
          data-bind="template: { name: 'region-template', foreach: regions }"
          className="redBox"
        >
          <div
            data-bind="css: widthClass, attr: {id: 'region-'+name()}"
            className="col-sm-12"
            id="region-re200116"
          >
            <div id="ALLN-Article-Page-Breadcrumb_v1-wi400042">
              <nav className="breadcrumbs-block hidden-print">
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active" data-bind="text: breadcrumbName">
                    Refund &amp; Return Policy
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          data-bind="template: { name: 'region-template', foreach: regions }"
          className="redBox"
        >
          <div className="col-sm-12" id="region-re200117">
            <div id="webContent_v2-wi200004">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span id="wi200004-image-10004">
                    <div className="cc-image">
                      <img
                        className="panel-main-image"
                        src="https://www.allenbrothers.com/file/v7446668681148294884/general/Truth%20in%20Menu.jpg"
                        title="Allen Brothers Supports Truth-In-Menu"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re200118">
            <div id="webContent_v2-wi200049">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span id="wi200049-rich-text-10024">
                    <div className="cc-rich-text">
                      <h1>OUR GUARANTEE, REFUND &amp; RETURN POLICY</h1>

                      <p>
                        We guarantee the quality and grade of our
                        meats.&nbsp;Our USDA Prime beef and other selections are
                        of the highest quality. When you order Prime from us,
                        you will only get genuine wet-aged or dry-aged USDA
                        Prime.
                      </p>

                      <p>
                        While most deliveries will arrive with your product
                        remaining frozen, weather and delivery delays may result
                        in your product becoming thawed while in-transit.&nbsp;
                        <strong>
                          Product that arrives thawed but still cold can be
                          re-frozen or used within 3-5 days
                        </strong>
                        . Please contact us directly at 800.548.7777 (Mon-Fri: 8
                        AM – 5 PM CST) if you have any concerns or questions
                        about the condition of your order.
                      </p>

                      <p>
                        Please note - Allen Brothers is not responsible for
                        delays as a result of being provided with an incorrect
                        or incomplete address as&nbsp;
                        <strong>
                          customers are required to provide accurate shipping
                          addresses for Allen Brothers to guarantee delivery
                        </strong>
                        . Failure to provide correct shipping addresses voids
                        our guarantee and&nbsp;will require additional payment
                        (including the cost of shipping) if a replacement order
                        is to be sent.
                      </p>

                      <p>
                        Allen Brothers provides clearly identified and uniquely
                        coded boxes containing our products. We weigh each
                        steak, roast, and box on electronic digital scales
                        to&nbsp;
                        <strong>
                          ensure you will always receive at least the weight of
                          product you ordered
                        </strong>
                        . However, it is important to note that the thicknesses
                        listed are an approximation based on the size of the
                        steak chosen as&nbsp;our primary requirement is to
                        provide you with an accurate weight of the steak you
                        have selected.
                      </p>

                      <p>Refund &amp; Return Policy</p>

                      <p>
                        If for any reason, you have concerns with your recent
                        delivery, please call Customer Support at 800.548.7777
                        (Mon-Fri 8am - 5pm CST)
                        <strong>
                          &nbsp;by the next business day after receipt of your
                          order
                        </strong>
                        &nbsp;so we can address your concerns and achieve an
                        appropriate resolution, if necessary.&nbsp;
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <HighlightedProducts />
      <div className="row">
        <div
          data-bind="template: { name: 'region-template', foreach: regions }"
          className="redBox"
        >
        </div>
      </div>
    </div>
  );
}
