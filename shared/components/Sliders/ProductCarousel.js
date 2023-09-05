/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-empty */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-useless-fragment */
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import NextImage from '../customComponents/nextImage'
import { requestContructor } from '../../helpers/api'
import ProductTile from '../customComponents/ProductTile'

export default function ProductCarousel(props) {
  const Props = props
  const [load, setLoad] = useState(false)
  const [productsData, setProductsData] = useState({});
  const [ noofRecords, setNoOfRecords ] = useState(100);
  useEffect(() => {
    const configValues = Props.configValue
      ? JSON.parse(Props.configValue)
      : { noOfRecords: 4 }
    setNoOfRecords(configValues?.defaultProductSelector?.noOfRecords || 100);
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }
    const productIds = configValues?.defaultProductSelector?.products.map(
      item => item.productId
    )
    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productIds }
    }).then(res => {
      if (
        configValues.defaultProductSelector &&
        res.payLoad &&
        res.payLoad.products
      ) {
        configValues.defaultProductSelector.products = res.payLoad.products
        setProductsData({
          configValues,
          settings
        })
        setLoad(true)
      }
    })
  }, []);

  return (
    <>
      {load && (
        <>
         <h2 tabIndex={0} className='row align-left' style={{ marginLeft: '15px', fontSize: '24px', lineHeight: '32px', flexWrap: 'wrap', alignItems: 'center', display: 'flex' }} aria-label='Highlighted Products, list with 4 products.'>
            {props.displayNameOnStoreFront ? <span>{JSON.parse(props?.content)?.defaultProductSelector?.title}</span> : <></>}
            <small className='ml-10'>{productsData?.configValues.defaultProductSelector.viewAllLink && <a href={productsData?.configValues.defaultProductSelector.viewAllLink}>View All</a>}</small>
          </h2>
          <Slider {...productsData.settings}>
            {productsData?.configValues?.defaultProductSelector?.products.map(
              (value, index) => {
                if(index < noofRecords) {
                  return (
                    <div key={index}>
                      <div style={{ margin: '15px' }}>
                        <ProductTile value={value} />
                      </div>
                    </div>
                  )
                }
              }
            )}
          </Slider>
        </>
      )}
    </>
  )
}
