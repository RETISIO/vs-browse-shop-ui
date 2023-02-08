/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default function FooterSubscriptionForm() {
  return (
    <div className="page-row footerContainer">
      <div className="row">
        <div className="redBox">
          <div className="col-sm-12 hpFooter" id="region-re1700016">
            <div id="allnFooterV1_v1-wi2700011">
              <div className="container hidden-print">
                <div className="row">
                  <div className="footer-subscribe row-full row_full_adj">
                    <div className="container footer-container">
                      <div className="row">
                        <div className="hidden-sm visible-md visible-lg hidden-xs col-sm-2">
                          <div className="triangle-right"></div>
                        </div>
                        <div className="col-sm-5 content_1">
                          <h2 className="footer-subscribe-title">
                            <span>Get Deals &amp; Special Offers</span>
                          </h2>
                          <p className="footer-subscribe-text">
                            <span>
                              Join now for exclusive special offers,
                              product reviews, restaurant partner recipes and much more!
                            </span>
                          </p>
                        </div>
                        <div className="col-sm-5 content_2">
                          <form className="footer-subscribe-form d-flex align-items-base">
                            <div className="form-group">
                              <input
                                className="form-control formControl-input"
                                value=""
                                type="email"
                                maxLength="128"
                                id="footerEmailSignup"
                                required="required"
                                placeholder="Email Address"
                              />

                              <label className="formGroup-label" htmlFor="footerEmailSignup">
                                <span>Email Address</span>
                              </label>
                            </div>
                            <button
                              type="button"
                              className="btn btn-action btn-action-primary"
                              id="footerSignupButton"
                            >
                              SIGN UP
                            </button>
                          </form>
                          <p className="footer-note small">
                            <span>We value your privacy and do not share your email with third parties.</span>
                          </p>
                          <div id="contact-recaptcha hidden"></div>
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
