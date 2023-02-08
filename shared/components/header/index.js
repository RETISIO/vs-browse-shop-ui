/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Template from '../footer/template';
// import { Template } from '@retisio/sf-ui';

function NewHeader(props) {
  return (
    <>
      {props.headerContent ? <Template templateData={props.headerContent} /> : null}
    </>
  );
}

export default NewHeader;
