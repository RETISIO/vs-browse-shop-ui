/* eslint-disable import/named */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Template from '../template';

function NewHeader(props) {
  return (
    <>
      {props.headerContent
        ? (
          <Template
            templateData={props.headerContent}
            isHomePage={props.isHomePage}
            transformText={props.transformText}
            rootCatagories={props.rootCatagories}
          />
        ) : null}
    </>
  );
}

export default NewHeader;
