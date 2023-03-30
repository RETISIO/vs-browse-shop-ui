import React from 'react';
import Template from '../template';

export default function PageBuilder(props) {
  return (
    <>
      {props && props.pageContent && props.pageContent.top
        ? <Template templateData={props.pageContent.top} ComponentMap={props.ComponentMap}/> : ''}
      {props && props.pageContent && props.pageContent.middle
        ? <Template templateData={props.pageContent.middle} ComponentMap={props.ComponentMap}/> : ''}
      {props && props.pageContent && props.pageContent.bottom
        ? <Template templateData={props.pageContent.bottom} ComponentMap={props.ComponentMap}/> : ''}
    </>
  );
}
