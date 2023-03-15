import React from 'react';
import Breadcrumb from '../template/components/breadcrumb';
import GcDetailsPage from './gcDetailsPage';

export default function GiftCard(props) {
  return (
    <div className="container giftCardConainer">
      <nav className="breadcrumbs-block hidden-print">
        <ol className="breadcrumb">
          <Breadcrumb data={props.pdpData} />
        </ol>
      </nav>
      <div>
        <div className="hidden-lg hidden-md visible-sm visible-xs">
          <div className="alert alert-dismissible hidden-print alert-success hidden" role="alert">
            <button className="close" type="button" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
        </div>
      </div>
      <div className="gift-card-section">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <div className="product-gallery__main">
              <a className="MagicZoom js-product-gallery-zoom" id="zoom" href="/ccstore/v1/images/?source=/file/v1303352350604370651/products/ABI-GiftCard_sm_2.jpg" data-options="zoomDistance: 30; hint: off;">
                <figure className="mz-figure mz-hover-zoom mz-ready">
                  <img
                    className="gift-card-image"
                    alt="Gift Card"
                    src="https://www.allenbrothers.com/ccstore/v1/images/?source=/file/v1303352350604370651/products/ABI-GiftCard_sm_2.jpg&amp;height=475&amp;width=475"
                  />
                </figure>
              </a>
            </div>

            <div>
              <p>
                <strong>E-GIFT CARD</strong>
                &nbsp;
                Great for last minute giving! Your electronic Gift Card will arrive immediately after placing your order - your e-gift card recipient will be notified by an email welcome letter.
              </p>
              <p><strong>IMPORTANT NOTE: Please place only one e-gift card order per cart. If placing multiple e-gift card orders please complete the 1st order through payment then begin a new cart for an additonal e-gift card recipient.</strong></p>

              <p>
                <strong>PHYSICAL GIFT CARD</strong>
                &nbsp;
                Your card will arrive in a handsome folder along with a catalog and welcome letter. AB Prime Delivery of a Classic Gift Card is $5 per address. Expedited delivery will require an additional charge.
              </p>
            </div>
          </div>
          <GcDetailsPage {...props} />
        </div>
      </div>
    </div>

  );
}
