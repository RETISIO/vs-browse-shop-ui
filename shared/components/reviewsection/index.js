import React from 'react';
import config from '../../helpers/getConfig';

function ReviewSection(props) {
  const pdpData = props?.payLoad;
  const damPath = config.IMGPATH;
  return (
    <div className="container" id="reviewsection">
      <div
        className="yotpo yotpo-main-widget"
        data-product-id={pdpData?.products[0]?.productId}
        data-price={pdpData?.products[0]?.productId}
        data-currency="USD"
        data-name={pdpData?.products[0]?.displayName}
        // data-url={window?.location?.href}
        data-image-url={`${damPath}${
              pdpData?.products[0]?.skus[pdpData?.products[0]?.defaultSkuId]
                ?.media?.thumbnailImg
            }`}
      >
      </div>
    </div>
  );
}

export default ReviewSection;
