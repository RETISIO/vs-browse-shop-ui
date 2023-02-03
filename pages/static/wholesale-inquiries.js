import React from 'react';
import HighlightedProducts from './highlighted-products';

export default function WholesaleInquiries() {
  return (
    <div id="main" className="static-main-container wholesaleInquiriesContainer">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re200144">
            <div id="ALLN-Article-Page-Breadcrumb_v1-wi400046">
              <nav className="breadcrumbs-block hidden-print">
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active" data-bind="text: breadcrumbName">Wholesale Inquiries</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re200145">
            <div id="webContent_v2-wi200004">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span data-bind="element: 'image',id: '10004'" id="wi200004-image-10004">
                    <div className="cc-image">
                      <img
                        className="panel-main-image"
                        src="https://www.allenbrothers.com/file/v7446668681148294884/general/Truth in Menu.jpg"
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
          <div className="col-sm-12" id="region-re200146">
            <div id="webContent_v2-wi200076">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span id="wi200076-rich-text-10055">
                    <div className="cc-rich-text">
                      <h2>AMERICA'S FINEST CHEFS AND RESTAURATEURS RELY ON ALLEN BROTHERS</h2>
                      <p>There's good reason why Allen Brothers is one of the leading meat purveyors in North America: outstanding products, industry-leading practices and unrivaled service. It's a work ethic that has driven our company since its founding in 1893, and a commitment on which America's finest restaurants confidently stake their reputations every day. From the hand-selection of our meats to our meticulous aging methods and hand-cut custom portioning, every step of the process is precise, time consuming, and performed to your exact specifications. No shortcuts, no compromises. And the reward is real‚ the finest meat products available, with the flavor and consistency that the legendary restaurants, hotels and country clubs that are Allen Brothers customers are famous for. We've always believed that you get what you pay for, and once you order from Allen Brothers you'll understand our value difference.</p>
                      <h2>WITH ALLEN BROTHERS, A GREAT CUT OF MEAT IS JUST THE BEGINNING</h2>
                      <p>Allen Brothers understands the special concerns of chefs and restaurateurs ‚ and you can count on us to provide the quality products and responsive service that are so critical to your continued success.</p>
                      <ul>
                        <li>Strong industry relationships, which enable us to have consistent product sourcing of exceptional quality.</li>
                        <li>Market insight, to help you anticipate consumer trends. We can offer you both short- and long-term fixed pricing.</li>
                        <li>Wet or dry aging, to accommodate any menu or flavor profile.</li>
                        <li>Hand-selected products, for consistent quality all of the time.</li>
                        <li>Hand-cut products, custom-cut by skilled butchers to your portion-control specifications for uniform appearance, appealing presentation, and consistent food cost control.</li>
                        <li>Ordering flexibility. We can also provide aged, hand-selected sub-primal cuts.</li>
                        <li>Delivery on demand, bringing you exactly what you want, when you want, and how you want it.</li>
                        <li>Highest standards. We maintain the highest food safety standards, far exceeding government requirements.</li>
                        <li>Guaranteed quality. We never compromise quality, and we stand behind every cut of beef, veal, lamb, and pork we sell.</li>
                        <li>Legendary taste, which becomes synonymous with your signature dishes and strengthens customer loyalty and repeat patronage.</li>
                        <li>Open invitation. We invite you to tour our USDA federally inspected facility and meet our exceptional staff. We look forward to welcoming you.</li>
                      </ul>
                      <p>If you would like more information on how Allen Brothers can make a difference for your business call our experts:</p>
                      <p>Call:&nbsp;1.800.548.7777</p>
                      <p>E-mail:<a href="mailto:foodservice@allenbrothers.com">foodservice@allenbrothers.com</a></p>
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
        <div data-bind="template: { name: 'region-template', foreach: regions }" className="redBox">
        </div>
      </div>
    </div>
  );
}
