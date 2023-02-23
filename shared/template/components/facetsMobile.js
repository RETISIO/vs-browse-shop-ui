/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import React from "react";
import Facet from './facet';

export default function FacetsMobile(props) {
 const { closeToggle } = props;
  
  return (
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
            Filter
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
          <Facet {...props} mobileView={true} />
        </div>

        <div className="navbar-footer d-flex flex-column">
          <button
            className="btn btn-action btn-action-default js-mobile-menu-toggle"
            type="button"
            data-target="#mobileFilter"
            data-bind="widgetLocaleText: 'cancelBtn', click: filtersToggle"
            onClick={() => closeToggle()}
          >
            Cancel
          </button>
        </div>
      </nav>
    </div>
  );
}
