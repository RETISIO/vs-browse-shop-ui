/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-named-as-default */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable operator-linebreak */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react'
import { requestContructor } from '../../helpers/api'

export default function ArticleListing({ props }) {
  // const [load, setLoad] = useState(false)
  const [productsData, setProductsData] = useState({})

  useEffect(() => {
    const configValues = props.configValue
      ? JSON.parse(props.configValue)
      : { noOfRecords: 6 }
    const productId = configValues?.buyProduct

    requestContructor('getProductsData', '', {
      method: 'POST',
      data: { productIds: [productId] }
    }).then(res => {
      if (configValues.buyProduct && res.payLoad && res.payLoad.products) {
        configValues.products = res.payLoad.products
        setProductsData({
          configValues
        })
        // setLoad(true)
      }
    })
  }, [])

  return (
    <>
      {productsData?.configValues?.products.map((product, i) => (
        <div className='col-md-4 col-sm-6 col-xs-6' key={i}>
          <div
            className='product-card cooking-guide-card'
            style={{ height: '380.492px' }}
          >
            <a
              className='product-image'
              href={productsData?.configValues.navigationUrl}
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGEPATH}${
                  product?.skus?.[product?.defaultSkuId]?.media?.largeImg
                })`
              }}
            >
              {product.displayName}
            </a>
            <div className='product-card-inner'>
              <p className='product-card-desc'>
                <a href={productsData?.configValues.navigationUrl}>
                  {product.displayName}
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
