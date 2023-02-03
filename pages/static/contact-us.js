import React from "react";

export default function ContactUs() {
  return (
    <div id="main" className="static-main-container">
      <div className="row">
        <div
          data-bind="template: { name: 'region-template', foreach: regions }"
          className="redBox"
        >
          <div
            data-bind="css: widthClass, attr: {id: 'region-'+name()}"
            className="col-sm-12"
            id="region-12colcontactUs"
          >
            <div id="allnContactUs_v1-wi400014">
              <div className="container">
                <nav className="breadcrumbs-block hidden-print">
                  <ol className="breadcrumb">
                    <li>
                      <a
                        data-bind="ccLink: {route: '/'}, widgetLocaleText: 'HOME_BREADCRUMB_LINK_NAME'"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="active"
                      data-bind="widgetLocaleText: 'PAGE_BREADCRUMB_LINK_NAME'"
                    >
                      Contact Us
                    </li>
                  </ol>
                </nav>
                <div className="hidden">
                  <div
                    className="alert alert-dismissible hidden-print alert-success undefined"
                    role="alert"
                  >
                    <button
                      className="close"
                      type="button"
                      data-dismiss="alert"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <h1
                      className="page-title"
                      data-bind="widgetLocaleText: 'PAGE_TITLE'"
                    >
                      Contact Us
                    </h1>
                    <div className="row">
                      <div className="oc-panel col-md-7" data-oc-id="panel-0-0">
                        <span
                          data-bind="element: 'rich-text',id: '30005'"
                          id="wi400014-rich-text-30005"
                        >
                          <div
                            className="cc-rich-text"
                            data-bind="style: {paddingTop: config.padding.paddingTop + 'px', paddingBottom: config.padding.paddingBottom + 'px', paddingLeft: config.padding.paddingLeft + 'px', paddingRight: config.padding.paddingRight + 'px'}, html: config.richText.content"
                            style={{ padding: "0px" }}
                          >
                            <p>
                              We would like to hear from you! Whether you have a
                              general question, want to know more about Allen
                              Brothers or have specific questions regarding an
                              order that you placed, please complete the
                              following inquiry form. Contact Us form messages
                              are typically answered within 24-48 hrs. You may
                              also contact us via phone.
                            </p>
                          </div>
                        </span>

                        <span
                          data-bind="element: 'allnContact-us-form'"
                          id="wi400014-allnContact-us-form-id"
                        >
                          <form autocomplete="off">
                            <div className="form-fields-container">
                              <div
                                className="form-group"
                                data-bind="css: {'has-error': firstName.isModified() &amp;&amp; !firstName.isValid() &amp;&amp; $parent.showErrorMessages()}"
                              >
                                <input
                                  data-bind="value: firstName"
                                  className="form-control formControl-input"
                                  placeholder="First Name"
                                  value=""
                                  type="text"
                                  maxlength="40"
                                  required=""
                                />
                                <label
                                  className="formGroup-label"
                                  data-bind="widgetLocaleText: 'FIRST_NAME_LABEL', css: {'label-visible': firstName}"
                                >
                                  First Name
                                </label>
                              </div>
                              <div
                                className="form-group"
                                data-bind="css: {'has-error': lastName.isModified() &amp;&amp; !lastName.isValid() &amp;&amp; $parent.showErrorMessages()}"
                              >
                                <input
                                  data-bind="value: lastName"
                                  className="form-control formControl-input"
                                  placeholder="Last Name"
                                  value=""
                                  type="text"
                                  maxlength="40"
                                  required=""
                                />
                                <label
                                  className="formGroup-label"
                                  data-bind="widgetLocaleText: 'LAST_NAME_LABEL', css: {'label-visible': lastName}"
                                >
                                  Last Name
                                </label>
                              </div>
                              <div
                                className="form-group"
                                data-bind="css: {'has-error': userEmail.isModified() &amp;&amp; !userEmail.isValid() &amp;&amp; $parent.showErrorMessages()}"
                              >
                                <input
                                  data-bind="value: userEmail"
                                  className="form-control formControl-input"
                                  placeholder="Email Address *"
                                  pattern="/^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
                                  value=""
                                  type="email"
                                  maxlength="128"
                                  required=""
                                />
                                <label
                                  className="formGroup-label"
                                  data-bind="widgetLocaleText: 'EMAIL_ADDRESS_LABEL', css: {'label-visible': userEmail}"
                                >
                                  Email Address
                                </label>
                              </div>
                              <div className="form-group">
                                <textarea
                                  data-bind="textInput: userComment"
                                  className="form-control formControl-input"
                                  placeholder="Enter your question/comment here"
                                  value=""
                                  rows="5"
                                  type="text"
                                  maxlength="1000"
                                ></textarea>
                                <label
                                  className="formGroup-label"
                                  data-bind="widgetLocaleText: 'COMMENTS_LABEL', css: {'label-visible': userComment}"
                                >
                                  Comments
                                </label>
                              </div>
                            </div>
                            <div className="page-actions d-flex justify-content-end">
                              <button
                                data-bind="click: sendComment, widgetLocaleText: 'SUBMIT_BUTTON_TEXT'"
                                className="btn btn-action btn-action-md btn-action-primary"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </span>
                      </div>

                      <div
                        className="oc-panel col-md-1"
                        data-oc-id="panel-0-1"
                      ></div>

                      <div className="oc-panel col-md-4" data-oc-id="panel-0-2">
                        <span
                          data-bind="element: 'rich-text',id: '30006'"
                          id="wi400014-rich-text-30006"
                        >
                          <div
                            className="cc-rich-text"
                            data-bind="style: {paddingTop: config.padding.paddingTop + 'px', paddingBottom: config.padding.paddingBottom + 'px', paddingLeft: config.padding.paddingLeft + 'px', paddingRight: config.padding.paddingRight + 'px'}, html: config.richText.content"
                            style={{ padding: "0px" }}
                          >
                            <h2 className="page-subtitle">Phone Orders</h2>

                            <p>1.800.957.0111</p>

                            <p>
                              24 hours a day, 7 days a week
                              <br />
                              credit card only
                            </p>

                            <h2 className="page-subtitle">Customer Service</h2>

                            <p>
                              1.800.548.7777
                              <br />
                              Monday-Friday
                              <br />8 AM to 5 PM CST
                            </p>

                            <h2>Fax Orders</h2>

                            <p>
                              1.800.890.9146
                              <br />
                              24 hours a day, 7 days a week
                            </p>

                            <h2>Corporate Office</h2>

                            <p>
                              Allen Brothers 1893, LLC
                              <br />
                              100 East Ridge Road
                              <br />
                              Ridgefield, CT 06877
                            </p>

                            <h2>Careers</h2>

                            <p>
                              Visit:{" "}
                              <a
                                className="link-underline"
                                href="https://recruiting.adp.com/srccar/public/RTI.home?c=1124341&amp;d=ExternalCareerSite"
                                target="_blank"
                              >
                                Chefs' Warehouse Careers Page
                              </a>
                            </p>
                          </div>
                        </span>
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
