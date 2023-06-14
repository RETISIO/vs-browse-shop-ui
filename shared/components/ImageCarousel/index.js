import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import NextImage from '../template/components/nextImage';
import USDABadge from '../../../public/static/assets/usda-badge.png';
import SaleBadge from '../../../public/static/assets/sale-badge.png';
import MagnifyImage from '../template/components/magnifyImage';
import config from '../../helpers/getConfig';

function ImageCarousel({ data, additionalDetails, onSale }) {
  const damPath = config.IMGPATH;
  const defaultImg = data?.media ? [data?.media] : [];
  const alternateImg = data?.alternateImages ? data.alternateImages : [];
  const [selected, setSelected] = useState(defaultImg[0]);
  const imgData = [...defaultImg, ...alternateImg];
  const [show, setShow] = useState(false);
  const [openImg, setOpenImg] = useState();
  const [width, setWidth] = useState(992);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    infinite: false,
    className: 'pdpThumbnailSlick',
    onInit() {
      const querySelEl = document.querySelectorAll('.pdpThumbnailSlick .thumbnail-np, .pdpThumbnailSlick .slick-slide.slick-active');
      querySelEl.forEach((el) => {
        const isThumnailImg = el?.classList?.contains('thumbnail-np');
        if (isThumnailImg) el?.setAttribute('tabindex', '0');
        else el?.removeAttribute('tabindex');
      });
    }
  }

  const handleShow = img => {
    setOpenImg(img)
    setShow(true)
  }
  useEffect(() => {
    const dImg = data?.media ? [data?.media] : []
    setSelected(dImg[0])
  }, [data])

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
  }, [])

  const displayAlternateImages = (img, index) => {
    let srcImg = img.thumbnailImg
    let idImg = img.smallImg
    if (index > 0) {
      if (img?.thumbnailImg) {
        srcImg = img.thumbnailImg
        idImg = img.smallImg
      } else {
        srcImg = img.largeImg
        idImg = img.largeImg
      }
    }
    return (
      <NextImage
        alt={img.altText}
        src={`${damPath}${srcImg}`}
        height='80'
        width='80'
        id={`${idImg}-${index}`}
        className='thmbnl'
      />
    )
  }

  return (
    <>
      <Modal
        dialogAs='div'
        dialogClassName='mv-popup'
        show={show}
        fullscreen={true}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <NextImage
            alt={openImg?.altText}
            src={`${damPath}${openImg?.largeImg}`}
            fill
            className='thmbnl imgpos'
          />
        </Modal.Body>
      </Modal>
      <div className='image-carousel'>
        {imgData.length > 1 && (
          <div className='thumbnail-section'>
            <Slider {...settings}>
              {imgData?.map((img, index) => (
                <div
                  className={`${
                    imgData.length <= 3 ? 'thumbnail-np' : 'thumbnail-image'
                  } ${
                    img?.smallImg === selected?.smallImg ? 'selectedImg' : ''
                  }`}
                  onClick={() => setSelected(img)}
                  key={`${img.smallImg}_${index}`}
                  onKeyDown={(e) => { if (e.code === 'Enter') setSelected(img); } }
                  tabIndex="0"
                  role="button"
                >
                  {/* <NextImage
                  alt={img.altText}
                  src={`${damPath}${img?.thumbnailImg}`}
                  height='80'
                  width='80'
                  id={`${img.smallImg}-${index}`}
                  className='thmbnl'
                /> */}
                  {displayAlternateImages(img, index)}
                </div>
              ))}
            </Slider>
          </div>
        )}

        {selected && (
          <div className='picture-section'>
            {additionalDetails?.isPrimeProduct && (
              <NextImage
                alt='USDA Prime'
                src={USDABadge}
                height={45}
                width={45}
                id='usda-logo'
                className='usda-prime-logo'
              />
            )}
            {onSale && (
              <NextImage
                alt='Sale'
                src={SaleBadge}
                height={45}
                width={45}
                id='sale-logo'
                className='sale-logo'
              />
            )}
            {width > 991 ? (
              <MagnifyImage
                img={`${damPath}${selected?.largeImg}`}
                alt={selected?.altText}
                offset={{ vertical: 0, horizontal: 10 }}
                width={500}
                height={500}
                scale={0}
              />
            ) : (
              <MagnifyImage
                img={`${damPath}${selected?.largeImg}`}
                alt={selected?.altText}
                zoomPosition='original'
                width={500}
                height={500}
                scale={0}
              />
            )}
          </div>
        )}
      </div>
      <div className='image-carousel-mv'>
        <Carousel interval={null} fade>
          {imgData?.map((img, index) => (
            <Carousel.Item
              key={`${img?.smallImg}_${index}`}
              onClick={() => handleShow(img)}
            >
              {onSale && (
                <NextImage
                  alt='Sale'
                  src={SaleBadge}
                  height={45}
                  width={45}
                  id='sale-logo'
                  className='sale-logo'
                />
              )}
              {additionalDetails?.isPrimeProduct && (
                <NextImage
                  alt='USDA Prime'
                  src={USDABadge}
                  height={45}
                  width={45}
                  id='usda-logo'
                  className='usda-prime-logo'
                />
              )}
              <NextImage
                alt={img?.altText}
                src={`${damPath}${img?.largeImg}`}
                // height={400}
                // width={400}
                fill
                id={`${img?.smallImg}-${index}`}
                className='d-block w-100 imgpos'
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  )
}

export default ImageCarousel
