/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { HtmlContent } from '@retisio/sf-ui';

export default function CookingGuide(props) {
  const contentData = JSON.parse(props.content);
  const description = { content: JSON.stringify([contentData.description]) };
  return (
    <>
      <div className="page-title-container">
        <h1>{contentData.name}</h1>
      </div>
      <HtmlContent contentItemObj={description} isNextJs={ true } />
      {contentData.imageTile.map((data, i) => (
        <div className="col-md-4 col-sm-6 col-xs-6" key={i}>
          <div className="product-card cooking-guide-card" style={{ height: '380.492px' }}>
            <a className="product-image" href={data.destinationUrl} style={{ backgroundImage: `url(${data.imageUrl})` }}>{data.imageName}</a>
            <div className="product-card-inner">
              <p className="product-card-desc">
                <a href={data.destinationUrl}>{data.imageName}</a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
