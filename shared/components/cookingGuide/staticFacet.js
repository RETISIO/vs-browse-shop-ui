/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FacetsMobile from './facetsMobile';

export default function CookingGuideFacet(props) {
  const [isMobile, setIsMobile] = useState(false);

  const configValue = props?.configValue;
  const staticLinksContent = configValue && JSON.parse(configValue)?.staticLinks;
  const staticLinksArr = staticLinksContent && JSON.parse(staticLinksContent)?.menu;
  const filteredStaticLinksArr = staticLinksArr?.filter((item) => item?.subMenu?.length > 0);
  const { asPath } = useRouter();

  const renderSubMenu = (val, index) => (
    <li key={index} className={asPath === val?.link ? 'facet-active' : ''}>
      <Link
        href={val?.link ? val.link : ''}
      >
        {val.name}
      </Link>
    </li>
  );

  const renderStaticHeading = (item, i) => (
    <div className="panel panel-default" key={i}>
      <div className="panel-heading">
        <div className="panel-title"><span>{item?.name}</span></div>
      </div>
      <div className="panel-collapse">
        <div className="panel-body general-guides-panel">
          <ul className="general-guides-list list-unstyled">
            {item?.subMenu?.map((val, index) => renderSubMenu(val, index))}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="htmlContent col-md-12 col-12">
        <section>
          <aside className="hidden-xs">
            <div className="panel-group general-guides">
              {filteredStaticLinksArr?.length > 0 && filteredStaticLinksArr?.map((item, i) => renderStaticHeading(item, i))}
            </div>
          </aside>
          {/* <style>.general-guides-list.list-unstyled .active{ color: #1e4783; font-weight: 600;}</style>
        <script> if(location && location.pathname) {var els = document.querySelectorAll(".general-guides-list a[href='"+location.pathname+"']"); els.length > 0 && els[0].classList.add("active"); }</script> */}
        </section>
      </div>
      <div className="visible-xs">
        <button className="btn btn-block btn-primary btn-filter js-mobile-menu-toggle visible-xs" type="button" onClick={() => setIsMobile(true)}>Menu</button>
        {isMobile && <FacetsMobile closeToggle={() => setIsMobile(false)} staticLinksArr={filteredStaticLinksArr} /> }
      </div>
    </>
  );
}
