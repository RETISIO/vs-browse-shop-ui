import React, { useState } from "react";
import { usePageDataContext } from "../context/pageData-context";
import { useParams, useNavigate } from "react-router-dom";
import { useRouter } from 'next/router';

export function Facet() {
  const { pageData } = usePageDataContext();
//   const { id } = useParams();
  let navigate = useRouter();
//console.log("object", navigate.query);
const [urlIds, setUrlIds] = useState("");

const handleFacet = (id , checked) => {
  let urlArr = [];
  if(checked){
    urlArr = [...urlIds, id]
  } else {
    
  }
  setUrlIds(urlArr);
}

console.log("urlIds",urlIds);

  return (
    <div className="panel-group">
      {pageData?.payLoad?.facets?.map((value, key) => {
        return (
          <div className="panel panel-default">
            <div className="panel-heading">
              <div className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  href="#collapse_0"
                  d="heading_0"
                >
                  {value.displayName}
                  <i className="icon fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
            <div
              className="panel-collapse in"
              data-collapse="xs"
              id="collapse_0"
            >
              <div className="panel-body">
                <ul className="catalog-filter__category-list list-unstyled">
                  {value?.facetValues?.map((val, index) => {
                    return (
                      <li>
                        <a href="#" onClick={()=> handleFacet(val.facetLabel, true)}>
                          {val.facetLabel} ({val.facetValueCount})
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
