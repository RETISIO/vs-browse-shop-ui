import React from 'react';
import { Template } from '@retisio/sf-ui';

export default function PageBuilder(props) {
  return (
    <>
      {props && props.pageContent && props.pageContent.top
        ? <Template templateData={props.pageContent.top} /> : ''}
      {props && props.pageContent && props.pageContent.middle
        ? <Template templateData={props.pageContent.middle} /> : ''}
      {props && props.pageContent && props.pageContent.bottom
        ? <Template templateData={props.pageContent.bottom} /> : ''}
    </>
  );
}
