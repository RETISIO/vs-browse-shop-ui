import React, { Component } from 'react';
import { validator } from './validator';
export default class loginModel extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    this.state = {
      values: {
        email: "",
        password: ""
      },
      showPassword: false,
      errorMessage: false,
      formerrors: {},
      isSubmit: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.validate = this.validate.bind(this);
    this.openReg = this.openReg.bind(this);
  }
  
  openReg = () => {
    this.props.modelState(false);
    window.location.href="/account/registration";
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      isSubmit: true
    });
    let validate = this.validate({ ...this.state.values });
    if(validate) {
      const { email, password } = this.state.values;
      let data = {userName: email, password: password}
      this.props.handleSubmitForm(data);
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      values: {
          ...prevState.values,
          [name]: value
      }
  }))
  };

  handleBlur = () => {
    if (this.state.isSubmit) {
      this.validate({ ...this.state.values });
    }
  };

  validate = (values) => {
    let errors = validator(values, null, this.props.passwordRegex, this.props.passwordErrors);
    this.setState({
     formerrors: errors
    });
    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  resetPassword = () => {
    this.props.modelState(false);
    this.props.openReset(true);
  };

  render() {
    const { showPassword, formerrors } = this.state;
    const { email, password } = {...this.state.values};
    return (
      <>
      <form autoComplete="off" noValidate="" id="loginModal">
          <div>
            <button
              className="close close-popup"
              type="button"
              aria-label="Close"
              onClick={() => {
                this.props.modelState(false);
              }}
            >
              <i className="fa fa-times-circle" aria-hidden="true" />
            </button>
            <div className="row no-gutter">
              <div
                className="alert alert-dismissible hidden-print alert-success undefined header-alert-top"
                role="alert"
              >
                <strong>First time logging into our new site?</strong>
                <br />
                <a className="link-underline" onClick={() => this.resetPassword()}>
                  Click here to reset your password.
                </a>
              </div>
              <div className="col-sm-6 modal-login-left">
                <div className="modal-body">
                  <span className="span-title">Login</span>
                  <p>If you have an account with us, please login.</p>

                 { this.props.errorBanner ? <div className="alert alert-dismissible hidden-print alert-danger undefined" aria-describedby="loginModalErrors-desc" tabIndex="0" role="alert">
                  <button className="close" type="button" aria-label="Close" style={{
                    opacity: "1.2",
                    fontSize: "31px",
                    lineHeight: "0px",
                    marginTop: "10px"
                  }}
                  onClick={() => {
                    this.props.setErrorBanner(false);
                  }}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <b id="loginModalErrors-desc">We're sorry, we do not recognize the email and/or password you have entered. Please revise and try again.</b>
                </div> : null }

                  <div className="form-group">
                    <input
                      className="form-control formControl-input"
                      value={email}
                      type="email"
                      maxLength="128"
                      id="login_email"
                      autoComplete="username email"
                      required="required"
                      placeholder="Email Address *"
                      onChange={this.handleChange}
                      name="email"
                      onBlur={this.handleBlur}
                    />
                    <label
                      className="formGroup-label"
                      htmlFor="login_email"
                    >
                      Email Address *
                    </label>
                    { formerrors.email && <span className="text-danger" type="invalid" role="alert">{formerrors.email}</span> }
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        className="form-control formControl-input"
                        type={ showPassword ? "text" : "password"}
                        value={ password }
                        id="login_current_password"
                        autoComplete="new-password"
                        placeholder="Password *"
                        onChange={this.handleChange}
                        name="password"
                        onBlur={this.handleBlur}
                        />
                      <label
                        className="formGroup-label"
                        htmlFor="login_current_password"
                      >
                        Password *
                      </label>
                      <div className="input-group-btn">
                        <button
                          className="btn showHidePasswordTrigger"
                          type="button"
                          onClick={this.togglePassword}
                        >
                        { !showPassword ? <i className="fa field-icon fa-eye" aria-hidden="true"></i> :  <i className="fa field-icon fa-eye-slash" aria-hidden="true"></i> }
                        </button>
                      </div>
                    </div>
                    { formerrors.password && <span className="text-danger" type="invalid" role="alert">{formerrors.password}</span> }
                  </div>
                  <a className="link-underline" role="button" onClick={() => this.resetPassword()}>
                    Reset Password
                  </a>
                </div>
                <div className="modal-footer">
                  <div className="modal-footer-inner">
                    <button
                      className="btn btn-action btn-action-md btn-action-default"
                      type="button"
                      onClick={() => {
                        this.props.modelState(false);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="btn btn-action btn-action-md btn-action-primary"
                      type="button"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="modal-body">
                  <span className="modal-login-heading span-title">
                    New Customers
                  </span>
                  <p>
                    By creating an account with our store,you will be able to
                    move through checkout process faster, store multiple
                    shipping addresses, view and track your orders in your
                    account and more.
                  </p>
                  <a
                    className="btn btn-modal btn-default btn-default-light btn-create-account"
                    onClick={() => this.openReg()}
                  >
                    Create an Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
        </>
    )
  }
}
