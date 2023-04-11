import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function MiniStaticCarousel() {
  const params = {
    indicators: false,
    slide: true,
  };
  const renderFirstSetItem = () => (
    <>
      <div className="widgets_div col-md-4 col-xs-12 col-sm-6 expert-select">
        <div className="icon_div">
          <span>
            <img
              alt="img_1"
              className="img1"
              src="https://www.allenbrothers.com/file/general/Expert selection.svg"
            />
          </span>
        </div>
        <div className="text_div">
          <span>Expert selection of the top 1% of products</span>
        </div>
      </div>
      <div className="widgets_div col-md-4 col-xs-12 col-sm-6">
        <div className="icon_div">
          <span>
            <img
              alt="img_1"
              className="img1"
              src="https://www.allenbrothers.com/file/general/The%20highest%20standard%20packaging%20%20and%20delivery%20experience.svg"
            />
          </span>
        </div>
        <div className="text_div">
          <span>The highest standard packaging and delivery experience</span>
        </div>
      </div>
      <div className="widgets_div col-md-4 col-xs-12 col-sm-6">
        <div className="icon_div">
          <span>
            <img
              alt="img_1"
              className="img1"
              src="https://www.allenbrothers.com/file/general/satisfaction guaranteed_V2.svg"
            />
          </span>
        </div>
        <div className="text_div">
          <span>100% satisfaction guaranteed</span>
        </div>
      </div>
    </>
  );
  const renderSecondSetItem = () => (
    <>
      <div className="widgets_div col-md-6 col-xs-12 col-sm-6 precision-cutting">
        <div className="icon_div">
          <span>
            <img
              alt="img_1"
              className="img1"
              src="https://www.allenbrothers.com/file/general/Precision%20hand-cutting%20%20and%20aging.svg"
            />
          </span>
        </div>
        <div className="text_div"><span>Precision hand-cutting and aging</span></div>
      </div>
      <div className="widgets_div col-md-6 col-xs-12 col-sm-6">
        <div className="icon_div">
          <span>
            <img
              alt="img_1"
              className="img1"
              src="https://www.allenbrothers.com/file/general/Exclusive%20access%20to%20new%20%20and%20unique%20products.svg"
            />
          </span>
        </div>
        <div className="text_div">
          <span>Exclusive access to new and unique products</span>
        </div>
      </div>
    </>
  );
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="content-ab miniStaticCarousel">
          <div className="hidden-sm visible-md visible-lg hidden-xs">
            <div className="ab-carousel">
              <Carousel {...params}>
                <Carousel.Item>
                  {renderFirstSetItem()}
                </Carousel.Item>
                <Carousel.Item>
                  {renderSecondSetItem()}
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="visible-xs visible-sm">
            {renderFirstSetItem()}
            {renderSecondSetItem()}
          </div>
        </div>
      </div>
    </div>
  );
}