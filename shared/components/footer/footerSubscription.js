/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function FooterSubscriptionForm() {
  const initialValues = {
    emailAddressVal: '',
  };
  const [values, setValues] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
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
                          <Form
                            noValidate
                            onSubmit={handleSubmit}
                            autoComplete="off"
                            className="footer-subscribe-form d-flex align-items-base"
                          >
                            <Form.Group className="form-group">
                              <Form.Control
                                className="form-control formControl-input"
                                value={values.emailAddressVal}
                                type="email"
                                name="emailAddressVal"
                                maxLength="128"
                                onChange={handleChange}
                                // isInvalid={!!formerrors.firstName}
                                id="footerEmailSignup"
                                required="required"
                                placeholder="Email Address"
                              />
                              <Form.Label className="formGroup-label"><span>Email Address</span></Form.Label>
                              {/* <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.emailAddressVal}</Form.Control.Feedback> */}
                            </Form.Group>
                            <Button id="footerSignupButton" className="btn btn-action btn-action-primary" type="submit">
                              SIGN UP
                            </Button>
                          </Form>
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
