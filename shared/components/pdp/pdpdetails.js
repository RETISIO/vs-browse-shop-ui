/* eslint-disable prefer-destructuring */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-quotes */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import NextImage from '../template/components/nextImage'
import GiftCard from '../giftCard'
import NewBadge from '../../../public/static/assets/new.png'
import FreshBadge from '../../../public/static/assets/Fresh.png'
import ImageCarousel from '../ImageCarousel'
import SKUWeights from './skuWeights'
import SKUCounts from './skuCounts'

// skuObj = {
// defaultWeight: '',
// selectedWeight: ''
// skus: {
// [weight]: {
// skuId: skuId
//   wieght: "10oz",
//   thickness: 'ssss',
//   count: [
//     {
//     pieces: "2pcs",
//     availableStock: 200,
//     quantityAddedToCart: 0,
//      inventoryStatusLabel: '....',
//     image:xxxx,
//     thumbnailImgs: [aaa,bbb,ccc],
//     itemCode: 1111,
//     salePrice: 1111,
//     listPrice: 9999,
// hasPrice: false,
//   hasStock: false,
//     onSale: false,
//     outOfStock: false,
//     },
//    ],
//    addToCart: ()=>{},
//    addToWishList: ()=>{},
//    notifyMe: ()=>{}
//   },
// ...
// }
// }

export default function ProductDescription(props) {
  const pdpData = props?.payLoad
  const productSkus =
    pdpData?.products[0]?.skus && Object.values(pdpData?.products[0]?.skus)
  const productType = pdpData?.products[0]?.productType
  const [showWidget, setShowWidget] = useState(false)
  const [showSaleWidget, setShowSaleWidget] = useState(false)
  const [skusData, setSkusData] = useState()
  const defaultSkuId =
    pdpData?.products[0]?.skus[pdpData?.products[0]?.defaultSkuId]

  if (productType === 'giftcard') {
    return <GiftCard {...props} />
  }

  useEffect(() => {
    setShowWidget(true)
    setTimeout(() => {
      window.yotpo && window.yotpo.refreshWidgets()
    }, 10)
    prepareSkusData()
  }, [])

  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH
  const productId = pdpData?.products[0]?.productId
  const productAdditionDetails = pdpData?.products[0]?.additionalDetails

  // const skusData = prepareSkusData() || {}
  // skusData: {  [weight]: {skuId,weight, thickness, count: [{}, {},..]},
  //              [weight]: { }, ..}

  function prepareSkusData() {
    const { payLoad } = props
    // console.log('from productSkus....props..', props)

    const product = payLoad && payLoad.products && payLoad.products[0]
    const skus = (product && product.skus) || {}
    const skusObj = {
      defaultWeight: '',
      selectedWeight: '',
      defaultCount: '',
      selectedCount: '',
      skus: {}
    }
    // const keysArr = Object.keys(skus)
    // keysArr.forEach((key, index) => {
    for (const key in skus) {
      const weight = skus[key]?.skuDetails?.additionalDetails?.weight || ''
      const thickness =
        skus[key]?.skuDetails?.additionalDetails?.thickness || ''
      const skusObjKey = `${weight}`
      //   const skusObjKey = `${weight}__${thickness}`
      if (!skusObj.skus[skusObjKey]) {
        skusObj.skus[skusObjKey] = { weight, thickness, count: [] }
      }
      skusObj.skus[skusObjKey].skuId = skus[key].skuId
      const countObj = {}
      countObj.pieces = skus[key]?.skuDetails?.additionalDetails?.pieces || ''
      countObj.availableStock =
        skus[key]?.skuDetails?.inventory[0]?.availableStock || ''
      countObj.quantityAddedToCart = 0
      countObj.inventoryStatusLabel =
        skus[key]?.skuDetails?.inventoryStatusLabel || ''
      // countObj.hasStock = false
      countObj.hasStock = skus[key]?.skuDetails?.hasStock
      countObj.onSale = skus[key]?.skuDetails?.onSale
      countObj.salePrice = skus[key]?.skuDetails?.price?.salePrice
        ? skus[key].skuDetails.price.salePrice.price
        : ''
      countObj.price = skus[key].skuDetails.price.listPrice.price
        ? skus[key].skuDetails.price.listPrice.price
        : ''
      countObj.listPrice = skus[key].skuDetails.price.listPrice.price
        ? skus[key].skuDetails.price.listPrice.price
        : ''
      countObj.itemCode = skus[key].skuId
      skusObj.skus[skusObjKey].count.push(countObj)
    }
    // select default weight, default count
    for (const key in skusObj.skus) {
      if (skusObj.skus[key].skuId === defaultSkuId) {
        skusObj.defaultWeight = skusObj.skus[key]
        for (const countObj of skusObj.skus[key].count) {
          // select default count for which the stock is available
          if (countObj.hasStock) {
            skusObj.defaultCount = countObj
            setShowSaleWidget(countObj.onSale) // set onSale badge based on selected weight
            break
          }
        }
        break
      } else {
        const firstKey = Object.keys(skusObj.skus)[0]
        skusObj.defaultWeight = skusObj.skus[firstKey]
        for (const countObj of skusObj.skus[firstKey].count) {
          if (countObj.hasStock) {
            skusObj.defaultCount = countObj
            setShowSaleWidget(countObj.onSale) // set onSale badge based on selected weight
            break
          }
        }
        break
      }
    }
    setSkusData({ ...skusObj })
  }

  const renderGalleryImage = () => (
    <aside className='col-md-5'>
      <div className='product-gallery app-figure' id='zoom-fig'>
        <div className='product-gallery__main'>
          <ImageCarousel
            data={pdpData?.products[0]?.productDetails?.productMedia?.default}
            additionalDetails={productAdditionDetails}
            onSale={showSaleWidget}
          />
        </div>
      </div>
    </aside>
  )

  const selectDefaultCount = weightObj => {
    // select default count for which the hasStock is true
    const countArr = weightObj.count
    let defObj = {}
    countArr.every(obj => {
      if (obj.hasStock) {
        defObj = obj
        return false
      }
      return true
    })
    return defObj
  }

  const handleWeightSelected = weightObj => {
    const skusObj = { ...skusData }
    const weight = weightObj.weight
    skusObj.selectedWeight = weightObj
    skusObj.defaultWeight = ''
    skusObj.defaultCount = selectDefaultCount(weightObj) // default count of selected weight
    // skusObj.defaultCount = skusObj.skus[weight].count[0] // default count of selected weight
    setSkusData(skusObj)
    setShowSaleWidget(skusObj.defaultCount.onSale) // set onSale badge based on selected weight
  }

  const handleCountSelected = (weightObj, countObj) => {
    const skusObj = { ...skusData }
    const weight = weightObj.weight
    skusObj.selectedWeight = weightObj
    skusObj.defaultWeight = ''
    skusObj.defaultCount = ''
    const countArr = skusObj.skus[weight].count.filter(
      obj => obj.itemCode === countObj.itemCode
    )
    skusObj.selectedCount = countArr.length ? countArr[0] : ''
    setSkusData(skusObj)
    setShowSaleWidget(countObj.onSale) // set onSale badge based on selected count
  }

  return (
    <section>
      <div className='container pdpMainContainer'>
        <div>
          <div className='hidden-lg hidden-md visible-sm visible-xs'>
            <div
              className='alert alert-dismissible hidden-print alert-success undefined'
              role='alert'
              style={{ display: 'none' }}
            >
              <button className='close' type='button' aria-label='Close'>
                <span aria-hidden='true'>×</span>
              </button>
            </div>
          </div>
          <div
            className='alert alert-dismissible hidden-print alert-success undefined'
            role='alert'
            style={{ display: 'none' }}
          >
            <button
              data-bind='click: $data.clearSuccessMessages'
              className='close'
              type='button'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
          <div
            className='alert alert-dismissible hidden-print alert-danger undefined'
            role='alert'
            style={{ display: 'none' }}
          >
            <button
              data-bind='click: $data.clearErrorMessages'
              className='close'
              type='button'
              aria-label='Close'
            >
              <span aria-hidden='true'>×</span>
            </button>
          </div>
        </div>
        <div className='product-title-wrapper'>
          <h1 className='page-title'>
            <span>{pdpData?.products[0]?.displayName}</span>
            <div>
              <div
                htmlFor='reviewsection'
                className='yotpo bottomLine'
                data-yotpo-product-id={pdpData?.products[0]?.productId}
              ></div>
            </div>
            {productAdditionDetails?.isNeverFrozen && (
              <div
                id='cc_img__resize_wrapper-badge-new'
                style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
              >
                <NextImage
                  alt='New'
                  src={FreshBadge}
                  height='20'
                  width='44'
                  id='new-logo'
                  className='new-logo'
                />
              </div>
            )}
            {!productAdditionDetails?.isNeverFrozen &&
              productAdditionDetails?.isNewProduct && (
                <div
                  id='cc_img__resize_wrapper-badge-new'
                  style={{ maxWidth: '100%', minHeight: '0px', height: '100%' }}
                >
                  <NextImage
                    alt='New'
                    src={NewBadge}
                    height='20'
                    width='44'
                    id='new-logo'
                    className='new-logo'
                  />
                </div>
              )}
          </h1>
          <p className='page-short-description'>
            {pdpData?.products[0]?.description}
          </p>
        </div>
        <div className='row product-gallery-wrapper'>
          {renderGalleryImage()}
          <div className='col-md-7'>
            <div className='sukproduct'>
              <SKUWeights
                handleWeightSelected={handleWeightSelected}
                skusData={skusData}
                weightSelected={
                  skusData &&
                  (skusData.defaultWeight
                    ? skusData.defaultWeight
                    : skusData.selectedWeight)
                }
              />
              <SKUCounts
                handleCountSelected={handleCountSelected}
                skusData={skusData}
                weightSelected={
                  skusData &&
                  (skusData.defaultWeight
                    ? skusData.defaultWeight
                    : skusData.selectedWeight)
                }
                countSelected={
                  skusData &&
                  (skusData.defaultCount
                    ? skusData.defaultCount
                    : skusData.selectedCount)
                }
                productId={productId}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
