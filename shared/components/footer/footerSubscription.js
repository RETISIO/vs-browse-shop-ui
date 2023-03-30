/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validator } from '../validator';

class FooterSubscriptionForm extends Component {
  constructor() {
    super();
    const initialValues = {
      email: '',
    };
    this.state = {
      values: initialValues,
      formerrors: {},
      isSubmit: false,
      isFormSubmitted: false
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ values: { [name]: value } });
  };

  handleBlur = () => {
    const { isSubmit, values } = this.state;
    if (isSubmit) {
      this.validate({ ...values });
    }
  };

  validate = (values) => {
    const errors = validator(values);
    this.setState({ formerrors: errors });
    if ('email' in errors) {
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isSubmit: true });
    const { values } = this.state;
    const isValidForm = this.validate(values);
    if (isValidForm) {
      this.submitData();
    }
  };

  submitData = () => {
    if(window.lstImplement){
      window.lstImplement.emailSignUP({
        formId: 'EmailSignup',
        inputId: 'footerEmailSignup',
        buttonId: 'footerSignupButton'
    });
    this.setState({isFormSubmitted: true})
    }
  };

  render() {
    const { email, formerrors, isFormSubmitted } = this.state;
    const { transformText } = this.props;
    let errorClassName = 'text-danger';
    if ('email' in formerrors) {
      errorClassName = 'text-danger alert alert-dismissible hidden-print alert-danger';
    }
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
                            {!isFormSubmitted ? 
                            <>
                            <Form
                              noValidate
                              onSubmit={this.handleSubmit}
                              autoComplete="off"
                              className="footer-subscribe-form d-flex align-items-base"
                            >
                              <Form.Group className="form-group">
                                <Form.Control
                                  className="form-control formControl-input"
                                  value={email}
                                  type="email"
                                  name="email"
                                  maxLength="128"
                                  onBlur={this.handleBlur}
                                  onChange={this.handleChange}
                                  isInvalid={!!formerrors.email}
                                  id="footerEmailSignup"
                                  required="required"
                                  placeholder="Email Address"
                                />
                                <Form.Label className="formGroup-label">
                                  <span>{transformText('Email Address')}</span>
                                </Form.Label>
                                <Form.Control.Feedback
                                  className={errorClassName}
                                  type="invalid"
                                  role="alert"
                                >
                                  {formerrors.email}
                                </Form.Control.Feedback>
                              </Form.Group>
                              <Button
                                id="footerSignupButton"
                                className="btn btn-action btn-action-primary"
                                type="submit"
                              >
                                SIGN UP
                              </Button>
                            </Form>
                              
                            <p className="footer-note small">
                              <span>We value your privacy and do not share your email with third parties.</span>
                            </p>
                            </>
                            : <div class="newsletter-msg">Thank you for subscribing.</div>
                            }
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
}
export default FooterSubscriptionForm;
