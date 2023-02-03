import React from "react";
import HighlightedProducts from "./highlighted-products";

export default function PrivacyPolicy() {
  return (
    <div id="main" className="static-main-container guarantee">
      <div className="row">
        <div
          data-bind="template: { name: 'region-template', foreach: regions }"
          className="redBox"
        >
          <div
            data-bind="css: widthClass, attr: {id: 'region-'+name()}"
            className="col-sm-12"
            id="region-megaMenuPrivacyPage"
          >
            <div
              data-bind='template: {name: templateUrl(),templateSrc: templateSrc()}, attr: {id: typeId()+"-"+id()}, visible:($masterViewModel.storeConfiguration.enablePrioritizedLoading) ? (occPrioritizedDisplay ? occPrioritizedDisplay : true):true'
              id="ALLN-Article-Page-Breadcrumb_v1-wi400040"
            >
              <nav className="breadcrumbs-block hidden-print">
                <ol className="breadcrumb">
                  <li>
                    <a
                      href="/"
                      data-bind="ccLink: {route: '/'},widgetLocaleText: 'breadcrumbHome'"
                    >
                      Home
                    </a>
                  </li>
                  <li className="active" data-bind="text: breadcrumbName">
                    Privacy Policy
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
        ></div>
      </div>

      <div className="row">
        <div
          data-bind="template: { name: 'region-template', foreach: regions }"
          className="redBox"
        >
          <div
            data-bind="css: widthClass, attr: {id: 'region-'+name()}"
            className="col-sm-12"
            id="region-re200027"
          >
            <div
              data-bind='template: {name: templateUrl(),templateSrc: templateSrc()}, attr: {id: typeId()+"-"+id()}, visible:($masterViewModel.storeConfiguration.enablePrioritizedLoading) ? (occPrioritizedDisplay ? occPrioritizedDisplay : true):true'
              id="webContent_v2-wi200008"
            >
              <div className="row">
                <div className="oc-panel col-md-12" data-oc-id="panel-0-0">
                  <span
                    data-bind="element: 'rich-text',id: '10007'"
                    id="wi200008-rich-text-10007"
                  >
                    <div
                      className="cc-rich-text"
                      data-bind="style: {paddingTop: config.padding.paddingTop + 'px', paddingBottom: config.padding.paddingBottom + 'px', paddingLeft: config.padding.paddingLeft + 'px', paddingRight: config.padding.paddingRight + 'px'}, html: config.richText.content"
                      style={{ padding: "0px" }}
                    >
                      <p align="left" style={{ textAlign: "left" }}>
                        &nbsp;
                      </p>

                      <p align="center" style={{ textAlign: "center" }}>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "18.0pt" }}>
                                    <span style={{ color: "black" }}>
                                      Allen Brothers 1893, LLC Privacy Policy
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Last Revised: December 24, 2019
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p style={{ textAlign: "justify" }}>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "black" }}>
                                    At Allen Brothers 1893, LLC (together with
                                    its subsidiaries and affiliates,
                                    collectively “ALLEN BROTHERS”, “we,” “our”
                                    or “us”), we respect every individual's
                                    right to privacy. We provide information
                                    related to products and services offered by
                                    ALLEN BROTHERS through websites that are
                                    owned and/or operated by us or our
                                    affiliates (“Website(s)”). Your use of our
                                    Websites implies your acceptance of this
                                    privacy policy (“Privacy Policy”).{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      What Does This Privacy Policy Include?
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "black" }}>
                                    This Privacy Policy outlines the type of
                                    personal information we may be collecting
                                    from you; the reasons for collecting, using,
                                    and sharing it; the methods of protecting
                                    your personal information; and your rights
                                    as related to your personal information.{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      What is Personal Information?{" "}
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "black" }}>
                                    Personal information is any information that
                                    identifies, relates to, describes,
                                    references, is capable of being associated
                                    with, or could reasonably be linked,
                                    directly or indirectly, with a particular
                                    consumer or device (“Personal Information”).{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "black" }}>
                                    Examples of Personal Information include:
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li style={{ marginLeft: "8px" }}>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ background: "white" }}>
                              <span style={{ lineHeight: "normal" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Contact information (e.g., name, home or
                                      physical address, email address, telephone
                                      number, and mobile phone number);
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li style={{ marginLeft: "8px" }}>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ background: "white" }}>
                              <span style={{ lineHeight: "normal" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Billing and shipping information (e.g.,
                                      credit/debit card number, expiration date,
                                      CVV code, billing and shipping addresses
                                      and contact information);
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li style={{ marginLeft: "8px" }}>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ background: "white" }}>
                              <span style={{ lineHeight: "normal" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Username and passwords used to access
                                      Website(s), including verification through
                                      social media platforms;
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li style={{ marginLeft: "8px" }}>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ background: "white" }}>
                              <span style={{ lineHeight: "normal" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Social media account information (e.g.,
                                      username and passwords, profile images,
                                      and other images that you make available
                                      such as user-generated content);
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li style={{ marginLeft: "8px" }}>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ background: "white" }}>
                              <span style={{ lineHeight: "normal" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Government identification numbers (which
                                      may include, Social Security Number); and
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li style={{ marginLeft: "8px" }}>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ background: "white" }}>
                              <span style={{ lineHeight: "normal" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      Other Personal Information as deemed
                                      necessary and/or provided voluntarily.
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      What Type of Personal Information Do We
                                      Collect and for Which Purposes?
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                In order to provide and promote our products and
                                services, we may collect Personal Information
                                from you, such as your name, email address and
                                payment card information, comments or questions
                                submitted by you, and other Personal
                                Information.{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We may collect the following categories of
                                Personal Information either directly from you or
                                your agents or indirectly through your usage of
                                the Website(s).&nbsp; Such Personal Information
                                may be collected directly from you or your
                                agents during the Website(s) profile
                                registration process, email communications,
                                technical and consumer support, order placement
                                process; and any feedback or comments you submit
                                or disclose in connection with products or
                                services (“Submission or Disclosure From
                                You”).&nbsp; Through your usage of the
                                Website(s), Personal Information may also be
                                collected by automated means that are part of
                                the technology that underlies the Website(s) or
                                other platforms that are needed to provide you
                                with products or services, communications, or
                                technical and consumer support (“Automated
                                Means”).&nbsp;{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>&nbsp;</p>

                      <table
                        className="Table"
                        style={{
                          width: "108.76%",
                          borderCollapse: "collapse",
                          width: "108%",
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: "19%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <strong>
                                        <span style={{ fontSize: "11.5pt" }}>
                                          Category
                                        </span>
                                      </strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <strong>
                                        <span style={{ fontSize: "11.5pt" }}>
                                          Source, Context, and Examples
                                        </span>
                                      </strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "30%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <strong>
                                        <span style={{ fontSize: "11.5pt" }}>
                                          Primary Purpose for Collection
                                        </span>
                                      </strong>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "19%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        A. Identifiers
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        Through Submission or Disclosure From
                                        You and/or Automated Means, we may
                                        collect one or more of the following
                                        identifiers: &nbsp;your real name,
                                        alias, postal address, unique personal
                                        identifier, online identifier, Internet
                                        Protocol address, email address, account
                                        name, Social Security number, driver's
                                        license number, passport number, or
                                        other similar identifiers.
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "30%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        We use this information to verify your
                                        identity, protect against fraud or other
                                        illegal activity, fulfill your requests,
                                        provide you with products or services,
                                        communicate with you, and send you
                                        information about our products,
                                        services, contests, and
                                        promotions.&nbsp; We may also use this
                                        information to customize your Website(s)
                                        experience and display content that we
                                        think you might be interested in
                                        according to your preferences.&nbsp;{" "}
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "19%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        B. Personal information categories
                                        listed in the California Customer
                                        Records statute (Cal. Civ. Code §
                                        1798.80(e))
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        Through Submission or Disclosure From
                                        You, we may collect one or more of the
                                        following:&nbsp; your name, signature,
                                        Social Security number, physical
                                        characteristics or description, address,
                                        telephone number, passport number,
                                        driver's license or state identification
                                        card number, insurance policy number,
                                        education, employment, employment
                                        history, bank account number, credit
                                        card number, debit card number, or any
                                        other financial information, medical
                                        information, or health insurance
                                        information.{" "}
                                        <strong>
                                          Some Personal Information included in
                                          this category may overlap with other
                                          categories.
                                        </strong>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "30%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        We use your information to verify your
                                        identity, protect against fraud or other
                                        illegal activity, fulfill your requests,
                                        provide you with products or services,
                                        communicate with you, and send you
                                        information about our products,
                                        services, contests, and
                                        promotions.&nbsp; This information may
                                        also be used to process your payments.
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "19%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        C. Commercial information
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        Through Submission or Disclosure From
                                        You and/or Automated Means, we may
                                        collect one or more of the following:
                                        &nbsp;Records of personal property,
                                        products or services purchased,
                                        obtained, or considered, or other
                                        purchasing or consuming histories or
                                        tendencies.
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "30%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        We use your information to conduct
                                        research and help us learn more about
                                        your preferences and enhance your
                                        experience as a consumer.&nbsp; We may
                                        also use this information to customize
                                        your Website(s) experience and display
                                        content that we think you might be
                                        interested in according to your
                                        preferences.&nbsp;{" "}
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "19%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        &nbsp;D. Cookies and Similar
                                        Technologies
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        To personalize your experience on our
                                        Website(s) or with one of our
                                        promotions, and to enhance security, we
                                        may assign your computer browser a
                                        unique random number, called a "cookie"
                                        or similar technologies. “Cookies”
                                        enhance the Website(s)’ performance in
                                        several important ways: they provide a
                                        secure way for us to verify your
                                        identity; they personalize your
                                        experience; and they make your visit
                                        more convenient. Certain areas
                                        of&nbsp;the Website(s) require that you
                                        accept cookies to enhance your browsing
                                        experience.
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "30%",
                                padding: "0in 0in 0in 0in",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        We use the information to make our
                                        Website(s) operate efficiently. &nbsp;We
                                        may also use this information to
                                        customize your Website(s) experience and
                                        display content that we think you might
                                        be interested in according to your
                                        preferences.&nbsp;{" "}
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "19%",
                                padding: "0in 0in 0in 0in; height:173px",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        E. Professional or employment-related
                                        information
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "50%",
                                padding: "0in 0in 0in 0in; height:173px",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "normal" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        If you apply for a job posting or become
                                        an employee or contractor of Allen
                                        Brothers 1893, LLC, we will collect
                                        Personal Information necessary to
                                        process your application through
                                        Submission or Disclosure From You.&nbsp;
                                        Such Personal Information may include
                                        one or more of the following: current or
                                        past job history or performance
                                        evaluations, social security number,
                                        educational records and transcripts.
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                            <td
                              style={{
                                width: "30%",
                                padding: "0in 0in 0in 0in; height:173px",
                              }}
                            >
                              <p>
                                <span style={{ fontSize: "11pt" }}>
                                  <span style={{ lineHeight: "107%" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        <span style={{ lineHeight: "107%" }}>
                                          We use this information for the
                                          performance of and compliance with
                                          your employment contract or other
                                          applicable engagement contract with
                                          us; or in order to take steps prior to
                                          entering into that employment contract
                                          or another engagement contract with
                                          you.
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <p>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      How Do We Use Your Personal Information?
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                In addition to the uses described above, we may
                                use your Personal Information for one or more of
                                the following business purposes:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To fulfill or meet the reason(s) for which
                                    the information is provided. For example, to
                                    fulfil an order, complete a commercial
                                    transaction, to establish and verify the
                                    identity of a client-consumer.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To provide you with product updates or
                                    service news and information, promotional
                                    notices, events and offers that may be of
                                    interest to you.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To carry out our obligations and enforce our
                                    rights under contracts entered by you and
                                    ALLEN BROTHERS, including for billing and
                                    collections.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To improve our Website(s) and present its
                                    contents to you.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To conduct tests research, analysis and
                                    product development.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To respond to law enforcement requests,
                                    court order, governmental regulations, or as
                                    otherwise may be required by applicable law.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To evaluate or conduct a merger,
                                    divestiture, restructuring, reorganization,
                                    dissolution, or other sale or transfer of
                                    some or all of our assets, whether as a
                                    going concern or as part of bankruptcy,
                                    liquidation, or similar proceeding, in which
                                    Personal Information held by us is among the
                                    assets transferred.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    To address employment related issues.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  To meet other legal, security, processing, and
                                  regulatory obligations.
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p style={{ marginLeft: "19px" }}>&nbsp;</p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We also note the Website(s) may include links
                                and plug-ins to third-party social media
                                platforms.&nbsp; These third-party features may
                                collect information about your Internet Protocol
                                address and your visits to the Website(s), and
                                they may set cookies for the purposes the
                                third-party social media platforms have
                                described in their privacy policies.&nbsp; Your
                                interactions with these features are governed by
                                the privacy policies of the third-party social
                                media platforms that provide them, and not by
                                this Privacy Policy.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <i>
                                <span style={{ fontSize: "11.5pt" }}>
                                  We will not collect additional categories of
                                  Personal Information or use Personal
                                  Information for materially different or
                                  unrelated purposes without providing you with
                                  a specific notice.
                                </span>
                              </i>
                              <i> </i>
                              <i>
                                <span style={{ fontSize: "11.5pt" }}>
                                  We limit the collection and use of Personal
                                  Information to what is necessary to manage our
                                  business and to deliver superior service to
                                  you.
                                </span>
                              </i>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  Who do we share your Personal Information
                                  with?
                                </span>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <i>
                                <span style={{ fontSize: "11.5pt" }}>
                                  Except as described in this Privacy Policy, we
                                  do not sell any Personal Information or
                                  knowingly disclose any Personal Information
                                  for a business or commercial purpose to
                                  anyone.
                                </span>
                              </i>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We may disclose all categories of your Personal
                                Information described above to a third party for
                                a business purpose.&nbsp; These third parties
                                include (i) our affiliates, (ii) service
                                providers, and (iii) third parties to whom you
                                (or your agents) authorize the disclosure of
                                your Personal Information.&nbsp; Business
                                purposes may include: products or services we
                                provide to you; advertising/promotional
                                materials; communications; technical and
                                consumer support; payment processing; market
                                research; and sweepstakes, contests, and other
                                promotions.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                These third parties may combine your Personal
                                Information with other information available to
                                them from other sources in order to further the
                                business purpose. Examples may include,
                                combining your email address with your mailing
                                address to serve you with a marketing offer via
                                direct mail. If you would like to opt out from
                                having your personal information collected,
                                please contact us at the following email
                                address:{" "}
                              </span>
                              <u>
                                <span style={{ fontSize: "11.5pt" }}>
                                  info@chefswarehouse.com.
                                </span>
                              </u>
                              &nbsp;{" "}
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                Prior to such disclosure to a third party, we
                                will direct the third party to use your Personal
                                Information only for the purposes required to
                                perform their functions as directed by us, to
                                keep the Personal Information confidential, and
                                to comply with applicable law.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              &nbsp;
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  How is Your Personal Information Protected?
                                </span>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                ALLEN BROTHERS maintains physical, technical and
                                procedural safeguards to protect your Personal
                                Information as required by law. These safeguards
                                are designed to protect your Personal
                                Information from loss and unauthorized access,
                                copying, use, modification or disclosure. When
                                we share Personal Information with an agent or
                                affiliate, we impose confidentiality obligations
                                on the recipients.&nbsp;{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                ALLEN BROTHERS’s corporate policies prohibit
                                employees with access to confidential customer
                                information to use or disclose such information
                                except for business purpose or use. All
                                employees are required to safeguard confidential
                                information, as specified in their
                                confidentiality agreements with ALLEN BROTHERS.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <br />
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                <i>Browsers and Internet Security</i>
                                <br />
                                ALLEN BROTHERS uses Secure Socket Layer (SSL)
                                technology on it websites. SSL protects
                                information as it crosses the Internet. To
                                support this technology, you need an SSL-capable
                                browser. ALLEN BROTHERS recommends using the
                                latest version of any of the following browsers
                                (Google Chrome, Mozilla Firefox, or Microsoft's
                                Internet Explorer). These browsers will activate
                                SSL automatically.
                                <br />
                                You can tell if you are visiting a secure area
                                within a Web site by looking for the padlock
                                symbol on your browsers address bar. When the
                                padlock is in the locked position, your session
                                connection is taking place via a secure server.
                                We do not recommend the use of beta browser
                                versions.
                                <br />
                                <br />
                                <i>Your Password and Other Security Issues</i>
                                <br />
                                Your password for ALLEN BROTHERS site is your
                                private entry key into your account. You should
                                never share it with anyone. If you forget your
                                password, please click the forgot password link
                                or call ALLEN BROTHERS at 1-718-842-8700, and we
                                will be glad to help you.
                                <br />
                                <br />
                                <i>Logging Off</i>
                                <br />
                                After you've finished accessing your account,
                                don't forget to log off. This prevents someone
                                else from accessing your account.{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                        <br />
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                <i>
                                  Security Risk of Using Non-Approved Automated
                                  Software Applications
                                </i>
                                <br />
                                For security reasons and to guard the safety of
                                your data, access to this site is limited to
                                SSL-capable browsers. Under no circumstances
                                should you use any software, program,
                                application, or any other device to access or
                                log-in to&nbsp;ALLEN BROTHERS Web site, or to
                                automate the process of obtaining, downloading,
                                transferring, or transmitting any content to or
                                from ALLEN BROTHERS’ computer systems, Web site,
                                or proprietary software.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  Children’s Privacy
                                </span>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    This Website is not intended for children
                                    under 16 years of age. No one under age 16
                                    may provide any Personal Information on this
                                    Website. If you are under 16, do not use or
                                    provide any information on this Website. We
                                    do not knowingly collect Personal
                                    Information from children under 16. As such,
                                    we do not sell Personal Information from a
                                    child under 16 without affirmative
                                    authorization. If we learn we have collected
                                    or received Personal Information from a
                                    child under 16 without verification of
                                    parental consent, we will delete that
                                    information. If you believe we might have
                                    any information from or about a child under
                                    16, please contact us at the following email
                                    address:{" "}
                                  </span>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      info@chefswarehouse.com
                                    </span>
                                  </u>
                                  &nbsp;{" "}
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      What are your rights?{" "}
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <i>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ lineHeight: "107%" }}>
                                    Right to Correct and Update Your Information
                                  </span>
                                </span>
                              </i>
                              &nbsp;
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  The accuracy of your Personal Information is
                                  important to us. If you are a customer and
                                  have a concern about your personal or account
                                  information maintained at ALLEN BROTHERS, or
                                  want to correct, update, or confirm your
                                  information, please send an e-mail to&nbsp;
                                  <u>info@chefswarehouse.com</u>&nbsp;or call us
                                  at 1-718-842-8700. We will be happy to review
                                  and update our records.
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <strong>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      California Residents and California
                                      Privacy Rights{" "}
                                    </span>
                                  </span>
                                </strong>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ color: "black" }}>
                                    Pursuant to Sections 1798.100 to 1798.199 of
                                    the California Civil Code (“CCPA”),
                                    residents of California have specific rights
                                    regarding their Personal Information. This
                                    section describes your CCPA rights, solely
                                    as California resident, and explains how to
                                    exercise those rights. We adopt this notice
                                    to comply with the CCPA and any terms
                                    defined in the CCPA have the same meaning
                                    when used in this section.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <span style={{ fontSize: "11.5pt" }}>
                                    <span style={{ color: "black" }}>
                                      As further described below, if you are a
                                      California resident, you have the right
                                      to: (i) know about your Personal
                                      Information collected, disclosed, or sold
                                      by us; (ii) request deletion of your
                                      Personal Information; and (iii) opt-out of
                                      sale of your Personal Information.
                                    </span>
                                  </span>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Right to Know{" "}
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                You have the right to request disclosure of
                                certain information about our collection and use
                                of your Personal Information over the past 12
                                months. Once we receive and confirm your
                                verifiable consumer request, we will disclose to
                                you:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    The categories of Personal Information we
                                    collected about you.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    The categories of sources for the Personal
                                    Information we collected about you.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Our business or commercial purpose for
                                    collecting or selling that Personal
                                    Information.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    The categories of third parties with whom we
                                    share that Personal Information.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    The specific pieces of Personal Information
                                    we collected about you.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    If we sold or disclosed your Personal
                                    Information for a business purpose, two
                                    separate lists disclosing:{" "}
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                          <ul style={{ listStyleType: "circle" }}>
                            <li>
                              <span style={{ fontSize: "11pt" }}>
                                <span style={{ lineHeight: "normal" }}>
                                  <span style={{ tabStops: "list 1.0in" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        sales, identifying the Personal
                                        Information categories that each
                                        category of recipient purchased; and
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </li>
                            <li>
                              <span style={{ fontSize: "11pt" }}>
                                <span style={{ lineHeight: "normal" }}>
                                  <span style={{ tabStops: "list 1.0in" }}>
                                    <span
                                      style={{
                                        fontFamily: "Calibri,sans-serif",
                                      }}
                                    >
                                      <span style={{ fontSize: "11.5pt" }}>
                                        disclosures for a business purpose,
                                        identifying the Personal Information
                                        categories that each category of
                                        recipient obtained.
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </li>
                          </ul>
                        </li>
                      </ul>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                You may only make a verifiable consumer request
                                to know twice within a 12-month period.{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Right to Request Deletion of your
                                        Personal Information{" "}
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                You have the right to request that we delete any
                                of your Personal Information that we collected
                                from you and retained, subject to certain
                                exceptions. Once we receive and confirm your
                                verifiable consumer request, we will honor your
                                request (and direct our service providers as
                                well) as required by law.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We may deny your deletion request if retaining
                                the information is necessary for us or our
                                service providers to:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ol>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Complete the transaction for which we
                                    collected the Personal Information, provide
                                    a good or service that you requested, take
                                    actions reasonably anticipated within the
                                    context of our ongoing business relationship
                                    with you, or otherwise perform our
                                    contractual obligations to you.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Detect security incidents, protect against
                                    malicious, deceptive, fraudulent, or illegal
                                    activity, or prosecute those responsible for
                                    such activities.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Debug products to identify and repair errors
                                    that impair the existing intended
                                    functionality.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Exercise free speech, ensure the right of
                                    another consumer to exercise their free
                                    speech rights, or exercise another right
                                    provided for by law.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Comply with the California Electronic
                                    Communications Privacy Act (Cal. Penal Code
                                    § 1546 <i>seq.</i>).
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Engage in public or peer-reviewed
                                    scientific, historical, or statistical
                                    research in the public interest that adheres
                                    to all other applicable ethics and privacy
                                    laws, with your previously obtained informed
                                    consent, when the information's deletion may
                                    likely render impossible or seriously impair
                                    the research's achievement.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Enable solely internal uses that are
                                    reasonably aligned with consumer
                                    expectations based on your relationship with
                                    us.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Comply with a legal obligation.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Make other internal and lawful uses
                                    compatible with the context in which you
                                    provided it.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ol>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Exercising Rights to Know and Delete and
                                        Verifiable Consumer Requests
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                To exercise your rights to know and delete as
                                described above, please submit a verifiable
                                consumer request to us by either:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11.5pt" }}>
                            <span style={{ lineHeight: "107%" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                Calling us at 1-718-842-8700
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Sending an email to the following email
                                    address:{" "}
                                  </span>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      info@chefswarehouse.com
                                    </span>
                                  </u>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                You can also designate an authorized agent (a
                                person registered with the California Secretary
                                of State that you authorize to act on your
                                behalf) to make any of the above-described
                                requests.&nbsp; Only you or your authorized
                                agent may make a verifiable consumer request
                                related to your Personal Information. You may
                                also make a verifiable consumer request on
                                behalf of your minor child.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                The verifiable consumer request must:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Provide sufficient information that allows
                                    us to reasonably verify you are the person
                                    about whom we collected Personal Information
                                    or an authorized representative.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Describe your request with sufficient detail
                                    that allows us to properly understand,
                                    evaluate, and respond to it.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We will verify your request by matching the
                                identifying information that you provided to the
                                Personal Information already maintained in our
                                records for you. If you have a
                                password-protected account with our Website, you
                                can verify your identity through the existing
                                authentication practices, namely by logging in
                                to your account using your unique username and
                                password within 24 hours after the submission of
                                your request. If you do not have a
                                password-protected account with our Website, you
                                can verify your identity by providing us the
                                e-mail address and the phone number that you
                                used when you transacted with us last. We cannot
                                respond to your request or provide you with
                                Personal Information if we cannot verify your
                                identity or authority to make the request and
                                confirm the Personal Information relates to
                                you.&nbsp; Making a verifiable consumer request
                                does not require you to create an account with
                                us.&nbsp; We will only use Personal Information
                                provided in a verifiable consumer request to
                                verify the requestor's identity or authority to
                                make the request.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Response Timing and Format
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We endeavor to respond to a verifiable consumer
                                request within 45 days of its receipt.&nbsp; If
                                we require more time (up to 90 days), we will
                                inform you of the reason and extension period in
                                writing.&nbsp; If you have an account with us,
                                we will deliver our written response to that
                                account.&nbsp; If you do not have an account
                                with us, we will deliver our written response by
                                mail or electronically, at your option.&nbsp;
                                Any disclosures we provide will only cover the
                                12-month period preceding the verifiable
                                consumer request's receipt.&nbsp; The response
                                we provide will also explain the reasons we
                                cannot comply with a request, if
                                applicable.&nbsp; For data portability requests,
                                we will select a format to provide your Personal
                                Information that is readily useable and should
                                allow you to transmit the information from one
                                entity to another entity without hindrance.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                We do not charge a fee to process or respond to
                                your verifiable consumer request unless it is
                                excessive, repetitive, or manifestly
                                unfounded.&nbsp; If we determine that the
                                request warrants a fee, we will tell you why we
                                made that decision and provide you with a cost
                                estimate before completing your request.
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Right to Opt-Out of Sale of Personal
                                        Information
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                You have the right to opt-out of the sale of
                                your Personal Information, and you may do so by
                                clicking on the “Do Not Sell My Personal
                                Information”. You can also find this link in our
                                homepage or you can call us{" "}
                              </span>
                              <span style={{ fontSize: "11.5pt" }}>
                                at 1-718-842-8700.{" "}
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Right to Non-Discrimination
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                You have the right not to receive discriminatory
                                treatment by us for the exercise of your CCPA
                                rights. Unless permitted by the CCPA, we will
                                not:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Deny you products or services.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Charge you different prices or rates for
                                    goods or services, including through
                                    granting discounts or other benefits, or
                                    imposing penalties.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Provide you a different level or quality of
                                    goods or services.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Suggest that you may receive a different
                                    price or rate for goods or services or a
                                    different level or quality of goods or
                                    services.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ background: "white" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span
                                style={{ fontFamily: "Calibri,sans-serif" }}
                              >
                                <i>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      <span style={{ color: "black" }}>
                                        Alternative Version
                                      </span>
                                    </span>
                                  </u>
                                </i>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  If you have a disability or would like or an
                                  alternative version of the privacy policy,
                                  then please click here for the audio version
                                  of the current Privacy Policy or call us
                                </span>
                              </span>
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  {" "}
                                  at 1-718-842-8700.
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ lineHeight: "107%" }}>
                                    Nevada Residents
                                  </span>
                                </span>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "normal" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                If you are a Nevada resident, you have the right
                                to submit a verified request directing us not to
                                sell your Personal Information for monetary
                                consideration.&nbsp; If you are a Nevada
                                resident and would like to submit such a
                                request, you may do this by
                              </span>
                              <span style={{ fontSize: "11.5pt" }}>
                                {" "}
                                either:
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <ul>
                        <li>
                          <span style={{ fontSize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Calling us at 1-718-842-8700.
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                        <li>
                          <span style={{ fontsize: "11pt" }}>
                            <span style={{ lineHeight: "normal" }}>
                              <span style={{ tabStops: "list .5in" }}>
                                <span
                                  style={{ fontFamily: "Calibri,sans-serif" }}
                                >
                                  <span style={{ fontSize: "11.5pt" }}>
                                    Sending an email to the following email
                                    address:{" "}
                                  </span>
                                  <u>
                                    <span style={{ fontSize: "11.5pt" }}>
                                      info@chefswarehouse.com
                                    </span>
                                  </u>
                                  &nbsp;{" "}
                                </span>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ lineHeight: "107%" }}>
                                    Revisions to this Privacy Policy
                                  </span>
                                </span>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  ALLEN BROTHERS does reserve the right to
                                  change and update its policies hereunder in
                                  its sole discretion.&nbsp; If our policy
                                  should change in a way that would materially
                                  lessen your privacy rights under this policy,
                                  we will provide notice and otherwise obtain
                                  your consent as legally required.
                                </span>
                              </span>{" "}
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  Please review this Privacy Policy periodically
                                  to see if there have been any amendments and
                                  especially before you provide any information.
                                  This Privacy Policy was made effective on the
                                  date indicated above. The most current version
                                  of this Privacy Policy will govern ALLEN
                                  BROTHERS’s processing of your information and
                                  data and will always be at
                                  https://www.chefswarehouse.com/contents/privacy-policy.
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <strong>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ lineHeight: "107%" }}>
                                    Contact Information
                                  </span>
                                </span>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </p>

                      <p>
                        <span style={{ fontSize: "11pt" }}>
                          <span style={{ lineHeight: "107%" }}>
                            <span style={{ fontFamily: "Calibri,sans-serif" }}>
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  If you have any questions or concerns about
                                  our privacy policies and practices, then you
                                  can reach us at{" "}
                                </span>
                              </span>
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>
                                  1-718-842-8700 or{" "}
                                </span>
                              </span>
                              <u>
                                <span style={{ fontSize: "11.5pt" }}>
                                  <span style={{ lineHeight: "107%" }}>
                                    info@chefswarehouse.com
                                  </span>
                                </span>
                              </u>
                              &nbsp;
                              <span style={{ fontSize: "11.5pt" }}>
                                <span style={{ lineHeight: "107%" }}>.</span>
                              </span>
                            </span>
                          </span>
                        </span>
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
        ></div>
      </div>
    </div>
  );
}
