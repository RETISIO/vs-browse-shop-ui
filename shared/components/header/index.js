/* eslint-disable import/named */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import Template from '../footer/template';
// import { Template } from '@retisio/sf-ui';
import { requestContructor } from '../../helpers/api';

function NewHeader(props) {
  const [rootCatagories, setRootCatagories] = useState([]);
  const getData = async() => {
    const res = await requestContructor('getCategoryList', '', {}, false);
    setRootCatagories(res?.payLoad?.categories);
    return res?.payLoad?.categories;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {props.headerContent
        ? (
          <Template
            templateData={props.headerContent}
            isHomePage={props.isHomePage}
            transformText={props.transformText}
            rootCatagories={rootCatagories}
          />
        ) : null}
    </>
  );
}

export default NewHeader;
