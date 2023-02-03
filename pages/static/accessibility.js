import React from 'react';

export default function Accessibility() {
  return (
    <div id="main" className="static-main-container accessibilityContainer">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re600002">
            <div id="ALLN-Article-Page-Breadcrumb_v1-wi1300001">
              <nav className="breadcrumbs-block hidden-print">
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active" data-bind="text: breadcrumbName">Accessibility Statement</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="redBox">
          <div className="col-sm-12" id="region-re600003">
            <div id="webContent_v2-wi1300002">
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span data-bind="element: 'rich-text',id: '110001'" id="wi1300002-rich-text-110001">
                    <div className="cc-rich-text pb40">
                      <h1>Allen Brothers Accessibility Statement</h1>
                      <h2>Accessibility Assistance</h2>
                      <p>If you have difficulty using or accessing any element of our web or mobile site, please feel free to call Customer Service at 1.800.548.7777 or email us at info@allenbrothers.com and we will work with you to provide the information, item, or transaction you seek through a communication method that is accessible for you and consistent with applicable law (for example, through telephone support).</p>
                      <h3>Our Commitment</h3>
                      <p>At Allen Brothers, we are committed to ensuring accessibility and usability across all of our online properties. Whether you are using assistive technologies like a screen reader, a magnifier, voice recognition software, or captions for videos, our goal is to make your use of the Allen Brothers web and mobile site a successful and enjoyable experience.</p>
                      <h3>Actions &amp; Ongoing Efforts</h3>
                      <p>Allen Brothers is taking a variety of steps and devoting resources to further enhance the accessibility of our web and mobile site, including, engaging an experienced accessibility consultant, Accessible360, to conduct a website accessibility audit and provide recommendations to increase accessibility so that our website and mobile site meet or exceed applicable standards. We at Allen Brothers view accessibility as an ongoing effort and will continue making enhancements to our web and mobile sites in order to provide the best customer experience.</p>
                      <h3>Feedback</h3>
                      <p>Please contact us at info@allenbrothers.com if you have any feedback or suggestions as to how we could further improve the accessibility of this website.</p>
                    </div>
                  </span>
                </div>
              </div>
              <div className="accessible-badge">
                <a href="https://accessible360.com">
                  <img className="accessibleBadgeImg"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3609497/Badge-reviewedby-black-on-white.png" 
                  alt="Reviewed by Accessible360" 
                  width="200px" />
                </a>
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
