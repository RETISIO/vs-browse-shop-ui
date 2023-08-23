/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import config from '../../helpers/getConfig';

export default function HeroBanner(props) {
  const configValues = props.configValue
    ? JSON.parse(props.configValue)
    : { noOfRecords: 4 };
  const content = props.content ? JSON.parse(props.content) : {};
  const settings = {
    className: '',
    dots: !!(configValues.heroBanner.navigationIcon == 'Arrows & Dots' || configValues.heroBanner.navigationIcon == 'Dots'),
    arrows: !!(configValues.heroBanner.navigationIcon == 'Arrows & Dots' || configValues.heroBanner.navigationIcon == 'Arrows'),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: configValues.heroBanner.autoPlay == 'Enabled', //
    speed: 500,
    autoplaySpeed: parseInt(configValues.heroBanner.autoPlaySpeed) || 1000,
    cssEase: 'linear',
  };
  //   console.log('content',content);
  return (
    <Slider {...settings}>
      {configValues.heroBanner && configValues.heroBanner.slides && configValues.heroBanner.slides.map((slide) => (
        <div id="allenmainherobanner">
          <div className="allenmainherobanner mainHeroBanner">
            <div
              id="banner_main"
              style={{ backgroundImage: `url(${`${config.IMGPATH + slide.relativeUrl}/${slide.name}`});` }}
            >
              <div id="overlay" className="row-full"></div>
              <div>
                <div className={slide.informationPosition.toLowerCase() == 'right' ? 'text-right banner-content' : 'text-left banner-content'}>
                  <h2 className="mobile-banner">
                    {content?.heroBanner && content?.heroBanner.slides[slide.id] && (
                      <>
                        <span className="col-md-12 col-sm-8 banner-title">{content?.heroBanner.slides[slide.id]?.primaryText}</span>
                        <span className="col-md-12 col-sm-8 banner-title">{content?.heroBanner.slides[slide.id]?.secondaryText}</span>
                      </>
                    )}
                  </h2>
                  {content?.heroBanner && content?.heroBanner.slides[slide.id] && content?.heroBanner.slides[slide.id]?.buttonCaption && (
                    <div className="banner-actions col-md-12 col-sm-8">
                      <a
                        id="banner-button"
                        href={content?.heroBanner.slides[slide.id]?.buttonUrl}
                        tabIndex="-1"
                        className="btn btn-secondary btn-lg link-text"
                        title={content?.heroBanner && content?.heroBanner.slides[slide.id]?.buttonCaption}
                      >
                        {content?.heroBanner?.slides[slide?.id]?.buttonCaption}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
