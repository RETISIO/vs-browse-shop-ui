/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import config from '../../helpers/getConfig';
import NextImage from '../customComponents/nextImage';

export default function ImageCarousel(props) {
  const configValues = props.configValue ? JSON.parse(props.configValue).imageCarousel : { noOfRecords: 6 };
  const content = props.content ? JSON.parse(props.content).imageCarousel : [];
  const settings = {
    dots: false,
    slidesToShow: configValues.noOfRecords,
    slidesToScroll: configValues.noOfRecords,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: configValues.noOfRecords,
          slidesToScroll: configValues.noOfRecords,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h2 className="row category-container__title">{props.name}</h2>
      <Slider {...settings}>
        {content.map((item, i) => (
          <div key={i} >
            <div id='SkipToMain' tabIndex={-1} style={{ margin: '7px' }}>
              <a href={item.refinementPageLink} className="imageCarousel-container">
                <NextImage alt={item.name} className="img-responsive category-list__image" src={`${config.IMGPATH}${item.refinementImageUrl}`} width="184" height="184" />
                <div className="category-list__text">
                  <section>
                    <span className="category-list-text col-xs-8 col-md-12">{item.name}</span>
                  </section>
                </div>
               {item.badgeImageUrl && (
                  <span className="saleImage">
                    <NextImage alt="sale" src={`${config.IMGPATH}${item.badgeImageUrl}`} width="50" height="50"></NextImage>
                  </span>
                )}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
