import React from 'react';
import { Template } from '@retisio/sf-ui';

export default function HomePage(props) {
  return (
    <>
      {props && props.homePageContent && props.homePageContent.top
        ? <Template templateData={props.homePageContent.top} /> : ''}
      {props && props.homePageContent && props.homePageContent.middle
        ? <Template templateData={props.homePageContent.middle} /> : ''}
      {props && props.homePageContent && props.homePageContent.bottom
        ? <Template templateData={props.homePageContent.bottom} /> : ''}
    </>
  );
}
