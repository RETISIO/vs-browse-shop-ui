/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
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

export default function Article(props) {
  console.log('from Article.....props...', props)
  const Props = props
  const [load, setLoad] = useState(false)
  const [productsData, setProductsData] = useState({})

  useEffect(() => {
    const configValues = Props.configValue
      ? JSON.parse(Props.configValue)
      : { noOfRecords: 6 }
    const productId = configValues?.buyProduct

    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productIds: [productId] }
    }).then(res => {
      console.log('productId..,res.', productId, res)

      if (configValues.buyProduct && res.payLoad && res.payLoad.products) {
        configValues.products = res.payLoad.products
        setProductsData({
          configValues
          //   settings
        })
        setLoad(true)
      }
    })

    // console.log(configValues)
  }, [])
  return (
    <>
      {load && (
        <>
          {productsData?.configValues?.products.map((value, index) => (
            <div className='cooking-instruction-buttons'>
              <NextImage
                alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
                className='item-thumb img-responsive'
                src={`${process.env.NEXT_PUBLIC_IMAGEPATH}${
                  value?.skus?.[value?.defaultSkuId]?.media?.smallImg
                }`}
                height={262}
                width={262}
              />

              <a
                className='btn btn-primary btn-block btn-buy'
                id='btnBuyNow'
                href='/products/quail-bacon-appetizers/10203'
              >
                Buy Now
              </a>
              <button className='btn btn-primary btn-inverse btn-print'>
                <i className='icon icon-left fas fa-print'></i>
              </button>
              <div className='btn-group'>
                <a
                  className='btn btn-primary btn-inverse btn-share dropdown-toggle'
                  href='mailto:?subject=Bacon Wrapped Quail Appetizers&amp;body=Check out these cooking instructions from Allen Brothers: https://www.allenbrothers.com/article/bacon-wrapped-quail-appetizers/9'
                >
                  <i className='icon icon-left fas fa-share-square'></i>
                </a>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  )
}
