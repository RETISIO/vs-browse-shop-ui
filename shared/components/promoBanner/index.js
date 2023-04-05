import React from 'react';
import PromoCarousel from './promoCarousel';

export default function PromoBanner() {
  return (
    <div className="container promo-banner">
      <div className="row">
        <div className="col-md-12 col-12">
          <section>
            <div className="row">
              <div className="redBox">
                <div className="col-sm-12" id="region-re1700007">
                  <div id="allnclubuserheaderpromo1_v1-wi2300006">
                    <div className="row">
                      <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                        <span id="wi2300006-rich-text-190001">
                          <div className="cc-rich-text" style={{ padding: '0px' }}>
                            <div className="row-full header-alert header-alert-main hidden-print promo-normal-header" style={{ zindex: '1020' }}>
                                <div className="col-md-4">
                                  <li className={`list-inline-item dropdown header-actions-account`} style={{ listStyleType: 'none' }}>
                                    <a
                                      className="outline-change aria-expand phone-num-new"
                                      id="phone-num"
                                      role="button"
                                      aria-label="phone"
                                      aria-haspopup="true"
                                      href="tel:1-800-957-0111"
                                    >
                                      <i className="icon-phone fas fa-phone fa-rotate-90" style={{ fontSize: '20px' }}></i>
                                      <span className="phone-number" style={{ marginLeft: '10px' }}>1-800-957-0111</span>
                                    </a>
                                  </li>
                                </div>
                                <PromoCarousel />
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}