/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Template from '../template';

function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {props.footerContent ? <Template templateData={props.footerContent} transformText={props.transformText} /> : null}
    </>
  );
}

export default Footer;
