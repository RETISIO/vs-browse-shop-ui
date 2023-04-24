/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react'
import SkusBasedOnWeights from './skusBasedOnWeights'
import SkuSelection from './skuSelection'

function ProductSkus({ props, handleShowOnSaleBadge }) {
  // console.log('from productSkus....props..', props)

  //   const damPath = process.env.NEXT_PUBLIC_IMAGEPATH
  const [skuWeightSelected, setSkuWeightSelected] = useState() // {id:'', weight:'', thickness:'' }
  const [skuSelected, setSkuSelected] = useState() // [skuObj1, ....]
  const [skusWeights, setSkusWeights] = useState() // [{id:'', weight:'', thickness:''}, {},..]
  // const [skusData, setSkusData] = useState()
  // const [defaultSkuId, setDefaultSkuId] = useState()
  const productId = props?.payLoad?.products[0]?.productId || ''
  const defaultSkuId = props?.payLoad?.products[0]?.defaultSkuId || ''
  const skusData = prepareSkusData() || {}

  // useEffect(() => {
  //   const defSkuId = props?.payLoad?.products[0]?.defaultSkuId || ''
  //   // const defSkuId = props?.pdpData?.payLoad?.products[0]?.defaultSkuId || ''
  //   setDefaultSkuId(defSkuId)
  //   prepareSkusData()
  // }, [props])

  const handleSkuSelected = skuWeight => {
    setSkuWeightSelected(skuWeight)
  }

  function prepareSkusData() {
    const { payLoad } = props
    console.log('from productSkus....props..', props)

    const product = payLoad && payLoad.products && payLoad.products[0]
    const skus = (product && product.skus) || {}
    const skusObj = {}
    for (const key in skus) {
      const weight = skus[key]?.skuDetails?.additionalDetails?.weight || ''
      const thickness =
        skus[key]?.skuDetails?.additionalDetails?.thickness || ''
      const skusObjKey = `${weight}`
      //   const skusObjKey = `${weight}__${thickness}`
      if (!skusObj[skusObjKey]) {
        skusObj[skusObjKey] = { weight, thickness, count: [] }
      }
      skusObj[skusObjKey].id = skus[key].skuId
      //   skusObj[weight].thickness =
      //     skus[key].skuDetails.additionalDetails.thickness
      const countObj = {}
      countObj.pieces = skus[key]?.skuDetails?.additionalDetails?.pieces || ''
      countObj.availableStock =
        skus[key]?.skuDetails?.inventory[0]?.availableStock || ''
      countObj.quantityAddedToCart = 0
      countObj.inventoryStatusLabel =
        skus[key]?.skuDetails?.inventoryStatusLabel || ''
      //   countObj.hasPrice = skus[key].skuDetails.hasPrice
      //   countObj.hasStock = false
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
      //   countObj.largeImage = skus[key].media.largeImg
      //   countObj.largeImage = skus[key].media.largeImg
      //   countObj.alternateImages = []
      //   for (const item of skus[key].media.alternateImages) {
      //     const altImgObj = {}
      //     altImgObj.largeImg = item.largeImg
      //     altImgObj.smallImg = item.smallImg
      //     altImgObj.thumbnailImg = item.thumbnailImg
      //     countObj.alternateImages.push(altImgObj)
      //   }
      skusObj[skusObjKey].count.push(countObj)
      // skuObj = {
      // skuId:
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
    }
    // setSkusData({ ...skusObj })
    return { ...skusObj }
    // setSkusWeights(skusWeightsArr)
  }

  return (
    <>
      {/* <SkuSelection data={props} /> */}
      <SkusBasedOnWeights
        skusWeights={skusWeights}
        skusObj={skusData}
        skuWeightSelected={skuWeightSelected}
        setSkuWeightSelected={setSkuWeightSelected}
        handleSkuSelected={handleSkuSelected}
        defaultSkuId={defaultSkuId}
        handleShowOnSaleBadge={handleShowOnSaleBadge}
        productId={productId}
      />
    </>
  )
}

export default ProductSkus
