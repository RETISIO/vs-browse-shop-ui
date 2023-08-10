/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import config from '../../helpers/getConfig';

export default function HeroBanner(props) {
    const configValues = props.configValue
    ? JSON.parse(props.configValue)
    : { noOfRecords: 4 };
    const content = props.content?JSON.parse(props.content):{};
    var settings = {
        className: "",
        dots: configValues.heroBanner.navigationIcon == 'Arrows & Dots' || configValues.heroBanner.navigationIcon == 'Dots'?true:false,
        arrows: configValues.heroBanner.navigationIcon == 'Arrows & Dots' || configValues.heroBanner.navigationIcon == 'Arrows'?true:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: configValues.heroBanner.autoPlay == "Enabled"?true:false, //
        speed: 500,
        autoplaySpeed: parseInt(configValues.heroBanner.autoPlaySpeed) || 1000,
        cssEase: "linear"
      };
      console.log('content',configValues);
  return (
    <Slider {...settings}>
        { configValues.heroBanner && configValues.heroBanner.slides && configValues.heroBanner.slides.map((slide)=>{
            return (<div  id="allenmainherobanner">
            <div className="allenmainherobanner">
                <div id="banner_main" style={{backgroundImage: `url(${config.IMGPATH + slide.relativeUrl+'/'+slide.displayName});`}}
                    >
                    <div id="overlay" className="row-full"></div>
                    <div className="">
                        {slide.informationPosition}
                        <div className={slide.informationPosition=='right'? "text-right banner-content":"text-left banner-content"}>
                            <h2 className="col-md-12 mobile-banner">
                               {content?.heroBanner && content?.heroBanner['slides'][slide.id] &&  (<><span className="col-md-12 col-sm-8 banner-title">{content?.heroBanner['slides'][slide.id]?.primaryText}</span><span className="col-md-12 col-sm-8 banner-title">{content?.heroBanner['slides'][slide.id]?.secondaryText}</span></>)}
                            </h2>
                            <div className="banner-actions col-md-12 col-sm-8">
                                {content?.heroBanner && content?.heroBanner['slides'][slide.id] && <a id="banner-button" href="/category/filet-mignon?N=filet-mignon" tabindex="-1"  className="btn btn-secondary btn-lg link-text" title="SHOP FILETS">
                                {content?.heroBanner && content?.heroBanner['slides'][slide.id]?.buttonCaption}
                                </a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        })}
    </Slider>
  )
}
