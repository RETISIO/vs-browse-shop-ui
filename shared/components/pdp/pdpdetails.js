/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
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
import { getCookie } from '@retisio/sf-api'
import Alert from 'react-bootstrap/Alert'
import NextImage from '../template/components/nextImage'
import GiftCard from '../giftCard'
import NewBadge from '../../../public/static/assets/new.png'
import FreshBadge from '../../../public/static/assets/Fresh.png'
import ImageCarousel from '../ImageCarousel'
import SKUWeights from './skuWeights'
import SKUCounts from './skuCounts'
import { useMiniCartDataContext } from '../../context/miniCartcontext'
import { useAppContext } from '../../context/appContext'
import { addToBagDetails, addToWishList } from '../../helpers/getPDPData'
import NotifyMe from '../notifyme'
import { notifyMe } from '../ThirdPartyScripts/Events'
import SkuVariants from './skuVariants'

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
  // const productSkus =
  //   pdpData?.products[0]?.skus && Object.values(pdpData?.products[0]?.skus)
  const productType = pdpData?.products[0]?.productType
  const [showWidget, setShowWidget] = useState(false)
  const [showSaleWidget, setShowSaleWidget] = useState(false)
  const [skusData, setSkusData] = useState()
  const [errorMsg, setErrorMsg] = useState()
  const [successMsg, setSuccessMsg] = useState()
  const [skuSelected, setSkuSelected] = useState()
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext()
  const { setShow, isLogged, setNoReload, noReload } = useAppContext()
  const [notifyPopupShow, setNotifyPopupShow] = useState(false)
  const [notifyPopupData, setNotifyPopupData] = useState()
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const [variantSelected, setVariantSelected] = useState()
  const [variantsArr, setVariantsArr] = useState()
  const [variantsOptions, setVariantsOptions] = useState()

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
    prepareVarinatsArr()
    prepareVarinatsOptions()
  }, [])

  useEffect(() => {
    if (noReload && isLogged) {
      if (skuSelected) {
        addToWishLisrHandler(skuSelected)
        setNoReload(false)
      }
    }
  }, [noReload, isLogged])

  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH
  const productData = pdpData?.products[0]
  // productData.productDetails.isGiftItem = true
  const productAdditionDetails = pdpData?.products[0]?.additionalDetails

  // const skusData = prepareSkusData() || {}
  // skusData: {  [weight]: {skuId,weight, thickness, count: [{}, {},..]},
  //              [weight]: { }, ..}

  console.log('productData.....', productData)

  function prepareVarinatsArr() {
    // total variants
    const variantsOptionsKeysObj = productData && productData.variantOptions
    const variantsA =
      variantsOptionsKeysObj &&
      Object.keys(variantsOptionsKeysObj).map(varntKey => {
        const obj = {
          name: '',
          skus: [],
          defaultOption: '',
          optionSelected: ''
        }
        obj.name = varntKey
        obj.skus = variantsOptionsKeysObj[varntKey]
        obj.defaultOption = variantsOptionsKeysObj[varntKey][0]
        obj.optionSelected = ''
        return obj
      })
    setVariantsArr(variantsA)
    console.log('variantsArr...', variantsArr)
  }

  function prepareVarinatsOptions() {
    const variantOptionsObj = {}
    productData &&
      Object.keys(productData.variantOptions).forEach(variantKey => {
        variantOptionsObj[variantKey] = {
          options: productData.variantOptions[variantKey],
          defaultSelected: productData.variantOptions[variantKey][0],
          optionSelected: ''
        }
      })
    setVariantsOptions({ ...variantOptionsObj })
  }

  function prepareSkusData() {
    const { payLoad } = props
    const product = payLoad && payLoad.products && payLoad.products[0]
    // console.log('product...', product)

    const skus = (product && product.skus) || {}
    const skusObj = {
      defaultWeight: '',
      selectedWeight: '',
      defaultCount: '',
      selectedCount: '',
      skus: {}
    }

    for (const key in skus) {
      const weight = skus[key]?.skuDetails?.additionalDetails?.weight || ''
      const thickness =
        skus[key]?.skuDetails?.additionalDetails?.thickness || ''
      const skusObjKey = `${weight}`
      if (!skusObj.skus[skusObjKey]) {
        skusObj.skus[skusObjKey] = { weight, thickness, count: [] }
      }
      skusObj.skus[skusObjKey].skuId = skus[key].skuId
      const countObj = {}
      countObj.pieces = skus[key]?.skuDetails?.additionalDetails?.pieces || ''
      countObj.availableStock = skus[key]?.skuDetails?.inventory
        ? skus[key]?.skuDetails?.inventory[0]?.availableStock
        : ''
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

  const handleVariantSelected = (index, variantKey, value, variant) => {
    // value = '4pcs' variant = {optionValue: '4pcs' ,asscoaitedSkus:[c98026,..]}
    // console.log(
    //   'from handleVariantSelected.....value, variant...',
    //   value,
    //   variant
    // )
    const variantOptionsObj = { ...variantsOptions }
    variantOptionsObj[variantKey].optionSelected = variant
    variantOptionsObj[variantKey].defaultSelected = ''
    // index===0, set all other options default to empty
    if (index === 0) {
      Object.keys(variantOptionsObj).forEach((vKey, idx) => {
        if (idx > 0) {
          variantOptionsObj[vKey].optionSelected = ''
          variantOptionsObj[vKey].defaultSelected = ''
        }
      })
    }
    setVariantSelected({ variantKey, variant })
    setVariantsOptions({ ...variantOptionsObj })
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
    setSkuSelected(countObj)
  }

  const handleCloseBtn = (errMsg, sucsMsg) => (
    <button
      className='close'
      type='button'
      aria-label='Close'
      style={{
        opacity: '1.2',
        fontSize: '31px',
        lineHeight: '0px',
        marginTop: '10px'
      }}
      onClick={() => {
        if (errMsg) {
          setErrorMsg('')
        }
        if (sucsMsg) {
          setSuccessMsg('')
        }
      }}
    >
      <span aria-hidden='true'>×</span>
    </button>
  )

  const addToBagHandler = (countSelected, itemQuantity) => {
    const pdp = {
      items: [
        {
          variantId: countSelected.itemCode,
          productId: productData.productId,
          quantity: itemQuantity,
          productType: 'product'
        }
      ]
    }
    if (productData.productId) {
      const result = addToBagDetails(pdp)
      result
        .then(data => {
          if (data && data.status === 200) {
            setMiniCartDetails({ ...miniCartDetails, itemAdded: true })
          } else if (data && data.status === 400) {
            const error =
              data.errors && Array.isArray(data.errors)
                ? data.errors[0].message
                : ''
            setErrorMsg(error)
          }
        })
        .catch(error => {
          setErrorMsg(error.message)
        })
    }
  }

  const addToWishLisrHandler = countSelected => {
    if (getCookie('lu') && countSelected && Object.keys(countSelected).length) {
      const result = addToWishList({
        skuId: countSelected.itemCode,
        productId: productData.productId,
        quantity: '1'
      })
      result
        .then(data => {
          if (data && data.status === 200) {
            setSuccessMsg(
              `The following item have been moved to your wishlist: ${productData.displayName}`
            )
          } else if (data && data.status === 400) {
            const error =
              (data.errors &&
                Array.isArray(data.errors) &&
                data.errors[0].message) ||
              ''
            setErrorMsg(error)
          }
        })
        .catch(error => {
          setErrorMsg(error.message)
        })
    } else if (
      !countSelected ||
      (countSelected && Object.keys(countSelected).length === 0)
    ) {
      setErrorMsg('skuId must not be empty')
    } else {
      setSkuSelected(countSelected)
      setNoReload(true)
      setShow(true)
    }
  }

  const handleNotifyMe = data => {
    setNotifyPopupData(data)
    setNotifyPopupShow(true)
  }

  const handleSave = obj => {
    const merchId = process.env.NEXT_PUBLIC_LISTRACK_MID
    const successHandler = () => {
      setNotifyPopupShow(false)
      setMessage(
        'Thank You! We will notify you when the product comes back in stock.'
      )
      setShowAlert(true)
    }
    const errorHandler = val => {
      // console.log(val)
      setNotifyPopupShow(false)
    }
    notifyMe({ ...obj, successHandler, errorHandler }, merchId)
  }

  return (
    <section>
      {notifyPopupShow && (
        <NotifyMe
          show={notifyPopupShow}
          skuData={notifyPopupData}
          productData={pdpData?.products[0]}
          handleClose={() => setNotifyPopupShow(false)}
          handleSave={handleSave}
        />
      )}
      {showAlert && (
        <Alert
          className='success-alert-msg'
          show={showAlert}
          onClose={() => setShowAlert(false)}
          variant='success'
          dismissible
        >
          <p>{message}</p>
        </Alert>
      )}
      <div className='container pdpMainContainer'>
        {errorMsg && (
          <div
            className='alert alert-dismissible hidden-print alert-danger undefined cart-success-msg'
            aria-describedby='loginModalErrors-desc'
            tabIndex='0'
            role='alert'
          >
            {handleCloseBtn(errorMsg, undefined)}
            <b id='loginModalErrors-desc'>{errorMsg}</b>
          </div>
        )}
        {successMsg && (
          <div
            className='alert alert-dismissible hidden-print alert-success undefined header-alert-top cart-success-msg'
            role='alert'
          >
            {handleCloseBtn(undefined, successMsg)}
            <strong>{successMsg}</strong>
          </div>
        )}
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
          {productData &&
            productData.productDetails &&
            !productData.productDetails.isGiftItem && (
              <div className='col-md-7'>
                <div className='sukproduct'>
                  {/* <SKUWeights
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
                    productData={productData}
                    handleAddtoCart={addToBagHandler}
                    handleAddtoWishList={addToWishLisrHandler}
                    handleNotifyMe={handleNotifyMe}
                  /> */}
                  <SkuVariants
                    handleVariantSelected={handleVariantSelected}
                    skusData={skusData}
                    weightSelected={
                      skusData &&
                      (skusData.defaultWeight
                        ? skusData.defaultWeight
                        : skusData.selectedWeight)
                    }
                    handleCountSelected={handleCountSelected}
                    countSelected={
                      skusData &&
                      (skusData.defaultCount
                        ? skusData.defaultCount
                        : skusData.selectedCount)
                    }
                    productData={productData}
                    handleAddtoCart={addToBagHandler}
                    handleAddtoWishList={addToWishLisrHandler}
                    handleNotifyMe={handleNotifyMe}
                    variantsArr={variantsArr}
                    variantSelected={variantSelected}
                    variantOptions={variantsOptions}
                  />
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}
