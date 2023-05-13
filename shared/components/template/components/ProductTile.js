/* eslint-disable linebreak-style */
/* eslint-disable space-before-blocks */
/* eslint-disable max-len */
import React from 'react'
import { useRouter } from 'next/navigation'
import NextImage from './nextImage'
import { usePLPDataContext } from '../../../context/plpDatacontext'
import { ClickProduct } from '../../ThirdPartyScripts/Events'
import { useAppContext } from '../../../context/appContext'

export default function ProductTile ({ value, recommondationData }) {
  const { searchResultData } = usePLPDataContext()
  const { state } = useAppContext()

  const router = useRouter()

  const navigatePDP = (data, href, e) => {
    e.preventDefault()
    if (searchResultData) {
      ClickProduct({
        data,
        searchData: searchResultData.payLoad,
        userData: state?.userData,
        channelData: state?.channelData
      })
    }
    if (recommondationData) {
      ClickProduct({
        data,
        recommendation: {
          ...recommondationData.recommendationAttributionDetails
        },
        userData: state?.userData,
        channelData: state?.channelData
      })
    }
    router.push(href)
  }

  const calcDisc = (listPrice, salePrice) => {
    const listP = (listPrice && Math.ceil(parseFloat(listPrice))) || 0
    const saleP = (salePrice && Math.ceil(parseFloat(salePrice))) || 0
    return Math.ceil(listP - saleP)
  }

  const displayPrice = () => {
    // value.productPrice.minSalePrice = 50.9 //test data

    if (value && value?.productPrice?.minSalePrice) {
      return (
        <b>
          <span className='priceb'>{` $${value?.productPrice?.minSalePrice}`}</span>
          <span className='pricebstik'>
            {` $${value?.productPrice?.minListPrice}`}
          </span>
          {/* <span className='pricenred'>
            {`You save: $${calcDisc(
              value?.productPrice?.minListPrice,
              value?.productPrice?.minSalePrice
            )}.00`}
          </span> */}
        </b>
      )
    }
    if (value && value?.productPrice?.minListPrice) {
      if (value?.productPrice?.minSalePrice) {
        return (
          <b>
            <span className='pricebstik'>
              {` $${value?.productPrice?.minListPrice}`}
            </span>
            <span className='pricenred'>
              {`You save: $${calcDisc(
                value?.productPrice?.minListPrice,
                value?.productPrice?.minSalePrice
              )}.00`}
            </span>
          </b>
        )
      }
      return (
        <b>
          <span className='priceb'>{` $${value?.productPrice?.minListPrice}`}</span>
        </b>
      )
    }
  }

  return (
    <div className='product-card' data-mh='product-card'>
      {value?.productPrice?.onSale ? (
        <div className='product-badge sale'>
          <div id='cc_img__resize_wrapper-sale-badge' className=''>
            <NextImage
              alt='sale'
              className='ccLazyLoaded'
              src='/static/assets/sale-badge.png'
              height={50}
              width={50}
            />
          </div>
        </div>
      ) : null}
      {value?.additionalDetails?.isPrimeProduct ? (
        <div className='product-badge usda'>
          <div id='cc_img__resize_wrapper-usda-badge' className=''>
            <NextImage
              alt='usda'
              className='ccLazyLoaded'
              src='/static/assets/usda-badge.png'
              height={55}
              width={55}
            />
          </div>
        </div>
      ) : null}
      <a
        className='product-image'
        href={`/products/${value?.displayName
          ?.toLowerCase()
          ?.replace(/ /g, '-')}/${value?.productId}`}
        onClick={e =>
          navigatePDP(
            value,
            `/products/${value?.displayName
              ?.toLowerCase()
              ?.replace(/ /g, '-')}/${value?.productId}`,
            e
          )
        }
      >
        <div className='image-pos'>
          <NextImage
            alt={value?.skus?.[value?.defaultSkuId]?.media?.altText}
            className='item-thumb img-responsive'
            src={`${process.env.NEXT_PUBLIC_IMAGEPATH}${
              value?.skus?.[value?.defaultSkuId]?.media?.smallImg
            }`}
            height={262}
            width={262}
          />
        </div>
      </a>
      <div className='product-card-inner'>
        <div className='product-card-desc'>
          <a
            href={`/products/${value?.displayName
              ?.toLowerCase()
              ?.replace(/ /g, '-')}/${value?.productId}`}
            onClick={e =>
              navigatePDP(
                value,
                `/products/${value?.displayName
                  ?.toLowerCase()
                  ?.replace(/ /g, '-')}/${value?.productId}`,
                e
              )
            }
          >
            {value.displayName}
          </a>
          {value?.additionalDetails?.isNewProduct ||
          value?.additionalDetails?.isNeverFrozen ? (
            <div
              id='cc_img__resize_wrapper-new-badge'
              className=''
              style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
            >
              <NextImage
                alt={
                  (value?.additionalDetails?.isNewProduct &&
                    value?.additionalDetails?.isNeverFrozen) ||
                  value?.additionalDetails?.isNeverFrozen
                    ? 'fresh'
                    : 'new'
                }
                className='image-badge ccLazyLoaded'
                src={
                  (value?.additionalDetails?.isNewProduct &&
                    value?.additionalDetails?.isNeverFrozen) ||
                  value?.additionalDetails?.isNeverFrozen
                    ? '/static/assets/Fresh.png'
                    : '/static/assets/new.png'
                }
                height={50}
                width={23}
              />
            </div>
          ) : null}
        </div>
        <div
          className='yotpo bottomLine yotpo-small'
          data-yotpo-product-id={value?.productId}
          data-currency='USD'
        ></div>
        <div className='product-card-price'>
          {(value?.productPrice?.minSalePrice ||
            value?.productPrice?.minListPrice) === 0 ? null : (
            <>
              <span>Starting At:</span>
              <b>
                {/* $
                {value?.productPrice?.minSalePrice
                  ? value?.productPrice?.minSalePrice
                  : value?.productPrice?.minListPrice} */}
              </b>
              {displayPrice()}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
