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
import NextImage from '../template/components/nextImage'
import { requestContructor } from '../../helpers/api'
import ProductTile from '../template/components/ProductTile'

export default function ProductCarousel(props) {
  const Props = props
  const [load, setLoad] = useState(false)
  const [productsData, setProductsData] = useState({})
  useEffect(() => {
    const configValues = Props.configValue
      ? JSON.parse(Props.configValue)
      : { noOfRecords: 6 }
    const noOfRecords = configValues?.defaultProductSelector?.noOfRecords || 4
    const settings = {
      dots: false,
      slidesToShow: noOfRecords,
      slidesToScroll: noOfRecords,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: noOfRecords,
            slidesToScroll: noOfRecords,
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
  }, [])
  return (
    <>
      {load && (
        <>
          <h1 className='row align-left'>{props.name}</h1>
          <Slider {...productsData.settings}>
            {productsData?.configValues?.defaultProductSelector?.products.map(
              (value, index) => (
                <div key={index}>
                  <div style={{ margin: '15px' }}>
                    <ProductTile value={value} />
                  </div>
                </div>
              )
            )}
          </Slider>
        </>
      )}
    </>
  )
}
