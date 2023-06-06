/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Accordion } from "react-bootstrap";

export default function FacetsMobile(props) {
 const { closeToggle, staticLinksArr } = props;
 const { asPath } = useRouter();
  
  return (
    <div className="catalog-filter__block ab-accordion-container">
      <div
        className="mobile-menu mobile-menu-right mobile-menu-aside js-mobile-menu open"
        id="mobileFilter"
      >
        <nav className="navbar-mobile-menu d-flex flex-column">
          <div className="navbar-header">
            <span
              className="navbar-title text-elipsis"
              data-bind="widgetLocaleText: 'filterSlidingTitle'"
            >
              Menu
            </span>
            <button
              className="close js-mobile-menu-toggle"
              type="button"
              data-target="#mobileFilter"
              aria-label="Close"
              data-bind="click: filtersToggle"
              onClick={() => closeToggle()}
            >
              <i className="fa fa-times-circle" aria-hidden="true"></i>
            </button>
          </div>

          <div className="navbar-content">
            {staticLinksArr?.map((value, _key) => (
              <React.Fragment key={_key}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      {value.name}
                      <i className="icon fas fa-chevron-down"></i>
                    </Accordion.Header>
                    {value?.subMenu?.map((val, index) => (
                      <Accordion.Body>
                        <Link
                          href={val?.link ? val.link : ''}
                          className={asPath === val?.link ? 'facet-active' : ''}
                        >
                          {val.name}
                        </Link>
                      </Accordion.Body>
                        ))}
                  </Accordion.Item>
                </Accordion>
              </React.Fragment>
          ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
