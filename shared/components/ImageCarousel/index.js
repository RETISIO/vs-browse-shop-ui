import React, { useState } from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import NextImage from '../template/components/nextImage';
import USDABadge from '../../../public/static/assets/usda-badge.png';
import SaleBadge from '../../../public/static/assets/sale-badge.png';
import MagnifyImage from '../template/components/magnifyImage';

function ImageCarousel({ data, additionalDetails, onSale }) {
  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH;
  const defaultImg = data?.media ? [data?.media] : [];
  const alternateImg = data?.alternateImages ? data.alternateImages : [];
  const [selected, setSelected] = useState(defaultImg[0]);
  const imgData = [...defaultImg, ...alternateImg];
  const [show, setShow] = useState(false);
  const [openImg, setOpenImg] = useState();

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
  };

  const handleShow = (img) => {
    setOpenImg(img);
    setShow(true);
  };

  return (
    <>
      <div className="popup">
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <NextImage
              alt={openImg?.altText}
              src={`${damPath}${openImg?.largeImg}`}
              fill
              className="thmbnl imgpos"
            />
          </Modal.Body>
        </Modal>
      </div>
      <div className="image-carousel">
        <div className="thumbnail-section">
          <Slider
            {...settings}
          >
            {
              imgData?.map((img, index) => (
                <div
                  className={`${imgData.length <= 3 ? 'thumbnail-np' : 'thumbnail-image'} ${img?.smallImg === selected?.smallImg ? 'selectedImg' : ''}`}
                  onClick={() => setSelected(img)}
                  key={`${img.smallImg}_${index}`}
                >
                  <NextImage
                    alt={img.altText}
                    src={`${damPath}${img?.thumbnailImg}`}
                    height="80"
                    width="80"
                    id={`${img.smallImg}-${index}`}
                    className="thmbnl"
                  />
                </div>
              ))
            }
          </Slider>
        </div>
        {selected && (
          <div className="picture-section">
            {additionalDetails?.productCategory === 'USDA PRIME' && (
              <NextImage
                alt="USDA Prime"
                src={USDABadge}
                height={45}
                width={45}
                id="usda-logo"
                className="usda-prime-logo"
              />
            )}
            {onSale && (
              <NextImage
                alt="Sale"
                src={SaleBadge}
                height={45}
                width={45}
                id="sale-logo"
                className="sale-logo"
              />
            )}
            <MagnifyImage
              src={`${damPath}${selected?.largeImg}`}
              alt={selected?.altText}
            />
          </div>
        )}
      </div>
      <div className="image-carousel-mv">
        <Carousel
          interval={null}
          fade
        >
          {
            imgData?.map((img, index) => (
              <Carousel.Item
                key={`${img?.smallImg}_${index}`}
                onClick={() => handleShow(img)}
              >
                {/* {onSale && ( */}
                <NextImage
                  alt="Sale"
                  src={SaleBadge}
                  height={45}
                  width={45}
                  id="sale-logo"
                  className="sale-logo"
                />
                {/* )} */}
                {additionalDetails?.productCategory === 'USDA PRIME' && (
                  <NextImage
                    alt="USDA Prime"
                    src={USDABadge}
                    height={45}
                    width={45}
                    id="usda-logo"
                    className="usda-prime-logo"
                  />
                )}
                <NextImage
                  alt={img?.altText}
                  src={`${damPath}${img?.largeImg}`}
                  // height={400}
                  // width={400}
                  fill
                  id={`${img?.smallImg}-${index}`}
                  className="d-block w-100 imgpos"
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </>
  );
}

export default ImageCarousel;
