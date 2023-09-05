/* eslint-disable no-debugger */
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
import { useRouter } from 'next/router'
import NextImage from '../customComponents/nextImage'
import GiftCard from '../giftCard'
import NewBadge from '../../../public/static/assets/new.png'
import FreshBadge from '../../../public/static/assets/Fresh.png'
import ImageCarousel from '../ImageCarousel'
import { useMiniCartDataContext } from '../../context/miniCartcontext'
import { useAppContext } from '../../context/appContext'
import { addToBagDetails, addToWishList } from '../../helpers/getPDPData'
import NotifyMe from '../notifyme'
import SkuVariants from './skuVariants'
import {
  notifyMe,
  AddToCart,
  AddtoWishhList,
  ClickProduct
} from '../ThirdPartyScripts/Events'
import config from '../../helpers/getConfig'
import { requestContructor } from '../../helpers/api'

export default function ProductDescription(props) {
  const pdpData = props?.payLoad
  const productType =
    pdpData &&
    pdpData.products &&
    pdpData.products[0] &&
    pdpData?.products[0]?.productType
  const [showWidget, setShowWidget] = useState(false)
  const [showSaleWidget, setShowSaleWidget] = useState(false)
  const [errorMsg, setErrorMsg] = useState()
  const [wishListErrorMsg, setWishListErrorMsg] = useState()
  const [productAdded, setProductAdded] = useState({ added: false })
  const [successMsg, setSuccessMsg] = useState()
  const [wishListSuccessMsg, setWishListSuccessMsg] = useState()
  const [skuSelected, setSkuSelected] = useState()
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext()
  const { setShow, isLogged, setNoReload, noReload, state } = useAppContext()
  const [notifyPopupShow, setNotifyPopupShow] = useState(false)
  const [notifyPopupData, setNotifyPopupData] = useState()
  const [message, setMessage] = useState()
  const [showAlert, setShowAlert] = useState(false)
  const [variantSelected, setVariantSelected] = useState()
  const [variantsOptions, setVariantsOptions] = useState()
  const router = useRouter()
  const { skuid } = router.query // user navigates from view cart page
  // const defaultSkuId =
  //   pdpData?.products[0]?.skus[pdpData?.products[0]?.defaultSkuId]

  if (productType === 'giftcard') {
    return <GiftCard {...props} />
  }

  useEffect(() => {
    setShowAlert('')
    setMessage('')
    setErrorMsg('')
    setSuccessMsg('')
    setWishListSuccessMsg('')
    setWishListErrorMsg('')
    setShowWidget(true)
    setTimeout(() => {
      window.yotpo && window.yotpo.refreshWidgets()
    }, 10)

    prepareVarinatsOptions()
  }, [props])

  useEffect(() => {
    if (productAdded.added) {
      AddToCart({ ...productAdded, miniCartDetails })
      setProductAdded({ added: false })
    }
  }, [miniCartDetails.miniCartData])

  useEffect(() => {
    if (noReload && isLogged) {
      if (skuSelected) {
        addToWishLisrHandler(skuSelected)
        setNoReload(false)
      }
    }
  }, [noReload, isLogged])

  useEffect(() => {
    if (getCookie('lu')) {
    requestContructor(
      '/addRecentlyViewedProducts',
      '',
      {
        method: 'POST', data: { skuIds: [productData?.productId] }
      },
    )
    }
  }, [])
  
  const damPath = config.IMGPATH
  useEffect(() => {
    if (successMsg || errorMsg || wishListErrorMsg || wishListSuccessMsg) {
      // hide notification bar after 3 secs - turned off
      // setTimeout(() => {
      //   setSuccessMsg('')
      //   setErrorMsg('')
      //   setWishListSuccessMsg('')
      //   setWishListErrorMsg('')
      // }, 3000)
    }
  }, [errorMsg, successMsg, wishListErrorMsg, wishListSuccessMsg])

  const productData = pdpData && pdpData.products && pdpData.products[0]
  const productAdditionDetails = productData?.additionalDetails

  // console.log('productData.....', productData)

  const getActiveSkuId = (associatedSkusIds, variantKey, index) => {
    // get active sku from skus{}
    let activeSkuId = ''
    const getActiveId = IdsArr => {
      for (let i = 0; i < IdsArr.length; i++) {
        if (productData?.skus[IdsArr[i]]?.skuDetails?.hasStock) {
          activeSkuId = IdsArr[i]
          break
        }
      }
    }
    if (
      associatedSkusIds?.length > 1 &&
      Object.keys(productData?.variantOptions).length <= 2
    ) {
      getActiveId(associatedSkusIds)
    } else if (
      associatedSkusIds?.length === 1 &&
      Object.keys(productData?.variantOptions).length === 1
    ) {
      // only one variantKey key e.g., 'count' = [{ov:'2pcs', as:[99812]},{ov:'4pcs', as:[22345]},..]
      const optionsArr = productData?.variantOptions[variantKey]
      let idx = index === optionsArr.length - 1 ? 0 : index
      let len = optionsArr.length
      for (let i = idx + 1; i < len; i++) {
        const aSkuIds = optionsArr[i].associatedSkuIds
        getActiveId(aSkuIds)
        if (activeSkuId) {
          break
        }
        if (i === len && idx > 0) {
          len = idx
          idx = -1
        }
      }
    } else if (Object.keys(productData?.variantOptions).length > 2) {
      // get all previous variantKeys defaultSelected skusIds
      let defSkuOptionsArr = []
      const skuIdsToDisplay = []
      const getDuplicateIds = () => {
        // find duplicate skuIds
        for (let i = 0; i < defSkuOptionsArr.length; i++) {
          const restOfIds = defSkuOptionsArr.slice(i + 1)
          if (
            restOfIds.includes(defSkuOptionsArr[i]) &&
            !skuIdsToDisplay.includes(defSkuOptionsArr[i])
          ) {
            skuIdsToDisplay.push(defSkuOptionsArr[i])
          }
        }
        defSkuOptionsArr = skuIdsToDisplay.length
          ? skuIdsToDisplay
          : defSkuOptionsArr
      }
      const defSkuId =
        productData?.defaultSkuId ||
        (productData?.skus?.length && productData?.skus[0]?.skuId)

      // get all optionValues where and all defaultSkuId is there
      for (const key of Object.keys(productData?.variantOptions)) {
        for (let i = 0; i < productData?.variantOptions[key]?.length; i++) {
          if (
            productData?.variantOptions[key][i].associatedSkuIds.includes(
              defSkuId
            )
          ) {
            defSkuOptionsArr = defSkuOptionsArr.concat(
              productData?.variantOptions[key][i]?.associatedSkuIds
            )
            getDuplicateIds()
          }
        }
      }

      const idx = defSkuOptionsArr.findIndex(id => id === defSkuId)
      // find active skuId
      if (idx > -1) {
        let itemIdx = idx + 1 < defSkuOptionsArr.length ? idx + 1 : 0
        for (let i = itemIdx; i < defSkuOptionsArr.length; i++) {
          const skuId = defSkuOptionsArr[i]
          if (productData?.skus[skuId]?.skuDetails?.hasStock) {
            activeSkuId = skuId
            break
          }
          if (itemIdx > 0 && i === defSkuOptionsArr.length - 1) {
            i = 0
            itemIdx = 0
          }
        }
      }
    }
    return activeSkuId
  }

  const getOnSaleSkuId = () => {
    // find out if onSale=true sku is available in skus
    let onSaleSkuId = ''
    if (
      productData &&
      productData.skus &&
      Object.keys(productData.skus).length
    ) {
      for (const key in productData.skus) {
        if (
          productData.skus[key]?.skuDetails?.onSale &&
          productData.skus[key]?.skuDetails?.hasStock
        ) {
          onSaleSkuId = productData?.skus[key]?.skuId
          break
        }
      }
      if (!onSaleSkuId) {
        onSaleSkuId = productData?.defaultSkuId
      }
    }
    return onSaleSkuId
  }

  const getDefaultSku = (variantKey, index, variantOptionsObj) => {
    let defaultSku = {}
    if (
      productData &&
      productData.variantOptions &&
      productData.variantOptions[variantKey].length
    ) {
      let skuId =
        skuid ||
        (productData?.defaultActiveSkuId
          ? productData?.defaultActiveSkuId
          : getOnSaleSkuId())
      // find skuId in associatedSkuds of variantOptions
      const optionsArrLngth = productData?.variantOptions[variantKey].length
      for (let i = 0; i < optionsArrLngth; i++) {
        // options array = [{optionValue: '2pcs', associatedSkuIds:[]},{},{},..]
        const associatedSkusIds =
          productData?.variantOptions[variantKey][i]?.associatedSkuIds || []
        if (skuId && associatedSkusIds.includes(skuId)) {
          // check if defaultSkuId hasStock,then check for next skuId in associatedSkuIds
          if (!productData?.skus[skuId]?.skuDetails?.hasStock && index === 0) {
            if (!productData?.defaultActiveSkuId) {
              productData.defaultActiveSkuId = getActiveSkuId(
                associatedSkusIds,
                variantKey,
                i,
                variantOptionsObj
              )
            }
            skuId = productData?.defaultActiveSkuId
              ? productData?.defaultActiveSkuId
              : productData?.defaultSkuId
          } else if (productData.variantOptions[variantKey].length > 2) {
            const id = getActiveSkuId(
              associatedSkusIds,
              variantKey,
              i,
              variantOptionsObj
            )
          }

          defaultSku = productData?.variantOptions[variantKey][i]
          break
        }
        if (i === optionsArrLngth - 1 && Object.keys(defaultSku).length === 0) {
          // defaultSkuId is not there or not matching with associatedSkuIds
          if (productData?.variantOptions[variantKey].length) {
            defaultSku = productData?.variantOptions[variantKey][0]
          }
        }
      }
    }
    return defaultSku
  }

  const sortOptionValuesOfVariantKey = variantKeyArray => {
    const sortAlphaNum = (a, b) =>
      a.optionValue.localeCompare(b.optionValue, 'en', { numeric: true })
    // const testArr = ['12', 'sdads', '12pcs', '8 pcs', 'usda', '14', 'abc']
    // const testArr = ['1 pcs', '1/2-1 pcs']
    variantKeyArray.sort(sortAlphaNum)
    return variantKeyArray
  }

  function prepareVarinatsOptions() {
    const variantOptionsObj = {}
    if (productData && productData.variantOptions) {
      Object.keys(productData.variantOptions).forEach((variantKey, index) => {
        // sort optionValues of variantKey array
        // e.g., variantOptions[variantKey] = [{optionValue: '4pcs', asscoaietDSkuIds:[]}, {optionValue: '2pcs', asscoaietDSkuIds:[]},{}]
        const sortedVarientKeyArray = sortOptionValuesOfVariantKey(
          productData.variantOptions[variantKey]
        )
        variantOptionsObj[variantKey] = {
          options: sortedVarientKeyArray,
          // options: productData.variantOptions[variantKey],
          defaultSelected: getDefaultSku(variantKey, index, variantOptionsObj),
          // defaultSelected: productData.variantOptions[variantKey][0],
          optionSelected: '',
          skuId: '',
          optionsTextForMv: '' // selected options text in mobile view
        }
      })
    }
    setVariantsOptions({ ...variantOptionsObj })
  }

  const renderGalleryImage = () => (
    <aside className='col-md-5 prdimgs'>
      <div className='product-gallery app-figure' id='zoom-fig'>
        <div className='product-gallery__main' role='region' aria-label='Product image carousel'>
          <ImageCarousel
            data={productData?.productDetails?.productMedia?.default}
            additionalDetails={productAdditionDetails}
            onSale={showSaleWidget || false}
          />
        </div>
      </div>
    </aside>
  )

  const handleVariantSelected = (index, variantKey, value, variant) => {
    // user clicked on option e.g., 4pcs or 10oz
    // value = '4pcs' variant = {optionValue: '4pcs' ,asscoaitedSkus:[c98026,..]}
    const variantOptionsObj = { ...variantsOptions }

    variantOptionsObj[variantKey].optionSelected = variant
    variantOptionsObj[variantKey].defaultSelected = ''
    // set all other options default to empty from index+1
    Object.keys(variantOptionsObj).forEach((vKey, idx) => {
      if (idx > index) {
        variantOptionsObj[vKey].optionSelected = ''
        variantOptionsObj[vKey].defaultSelected = ''
      }
    })
    setVariantSelected({ variantKey, variant })
    setVariantsOptions({ ...variantOptionsObj })
  }

  const handleSelectedSku = skuData => {
    // sku identified - for setting onSale badge and addToWishlist payload
    if (
      skuData &&
      (!skuSelected ? true : skuSelected.skuId !== skuData.skuId)
    ) {
      setShowSaleWidget(skuData?.skuDetails?.onSale) // set onSale badge based on selected count
      setSkuSelected(skuData)
      ClickProduct({
        data: { ...pdpData?.products[0], defaultSkuId: skuData?.skuId },
        userData: state?.userData,
        channelData: state?.channelData
      })
    }
  }

  const handleCloseBtn = (errMsg, sucsMsg) => (
    <button
      className='pdpdetails-close'
      type='button'
      aria-label='Close'
      style={{
        opacity: '1.2',
        fontSize: '31px',
        lineHeight: '10px',
        marginTop: '5px'
      }}
      onClick={() => {
        if (errMsg) {
          setErrorMsg('')
          setWishListErrorMsg('')
        }
        if (sucsMsg) {
          setSuccessMsg('')
          setWishListSuccessMsg('')
        }
      }}
    >
      <span aria-hidden='true'>×</span>
    </button>
  )

  // add to cart
  const addToBagHandler = async (skuData, itemQuantity) => {
    if (!skuData || !itemQuantity) {
      return
    }
    if (!isLogged && !getCookie('x-anyms-id')) {
      await requestContructor('getUUID')
    }
    const addToProdData = {
      variantId: skuData?.skuId,
      productId: productData?.productId,
      quantity: itemQuantity,
      productType: 'product'
    }
    const pdp = {
      items: []
    }
    pdp.items.push(addToProdData)
    if (productData?.productId) {
      const result = addToBagDetails(pdp)
      result
        .then(data => {
          if (data && data.status === 200) {
            setMiniCartDetails({ ...miniCartDetails, itemAdded: true })
            // AddToCart({ productData, addToProdData, channelData: state.channelData, userData: state.userData })
            setProductAdded({
              productData,
              addToProdData,
              channelData: state.channelData,
              userData: state.userData,
              added: true
            })
            setErrorMsg('')
            setWishListErrorMsg('')
            setWishListSuccessMsg('')
            setSuccessMsg(
              'The item(s) has been successfully added to your cart.'
            )
            window.scrollTo(0, 0)
          } else if (data && data.status === 400) {
            const error =
              data.errors && Array.isArray(data.errors)
                ? data.errors[0].message
                : ''
            setSuccessMsg('')
            setWishListErrorMsg('')
            setWishListSuccessMsg('')
            setErrorMsg(error)
            window.scrollTo(0, 0)
          }
        })
        .catch(error => {
          setErrorMsg(error.message)
          window.scrollTo(0, 0)
        })
    }
  }

  const addToWishLisrHandler = (skuData, skuOptionsSel) => {
    if (getCookie('lu') && skuData && Object.keys(skuData).length) {
      const result = addToWishList({
        skuId: skuData?.skuId,
        productId: productData?.productId,
        quantity: '1'
      })

      result
        .then(data => {
          if (data && data.status === 200) {
            setSuccessMsg('')
            setErrorMsg('')
            setWishListErrorMsg('')
            setWishListSuccessMsg(
              `${
                skuOptionsSel
                  ? `The following item have been moved to your wishlist: ${productData?.displayName} | ${skuOptionsSel}`
                  : `The following item have been moved to your wishlist: ${productData?.displayName}`
              }`
            )
            window.scrollTo(0, 0)
            AddtoWishhList({
              skuId: skuData?.skuId,
              productId: productData?.productId,
              channelData: state.channelData,
              userData: state.userData,
              wishListId: data.wishListId,
              productData
            })
          } else if (data && data.status === 400) {
            const error =
              (data.errors &&
                Array.isArray(data.errors) &&
                data.errors[0].message) ||
              ''
            setSuccessMsg('')
            setErrorMsg('')
            setWishListSuccessMsg('')
            setWishListErrorMsg(error)
            window.scrollTo(0, 0)
          }
        })
        .catch(error => {
          setSuccessMsg('')
          setErrorMsg('')
          setWishListSuccessMsg('')
          setWishListErrorMsg(error.message)
          window.scrollTo(0, 0)
        })
    } else if (!skuData || (skuData && Object.keys(skuData).length === 0)) {
      setWishListErrorMsg('skuId must not be empty')
      window.scrollTo(0, 0)
    } else {
      setSkuSelected(skuData)
      setNoReload(true)
      setShow(true)
    }
  }

  const handleNotifyMe = data => {
    setNotifyPopupData(data)
    setNotifyPopupShow(true)
  }

  const handleSave = obj => {
    const merchId = config.LISKEY
    const successHandler = () => {
      setNotifyPopupShow(false)
      setMessage(
        'Thank You! We will notify you when the product comes back in stock.'
      )
      setShowAlert(true)
    }
    const errorHandler = val => {
      setNotifyPopupShow(false)
    }
    notifyMe({ ...obj, successHandler, errorHandler }, merchId)
  }

  const handleReadMore = event => {
    event.preventDefault()
    const width = window?.innerWidth || document?.documentElement.clientWidth
    const headerEl =
      width < 992 ? '.navbar.mobile-header' : '.header-content-redesign'
    const headerHeight = document
      ?.querySelector(headerEl)
      ?.getBoundingClientRect()?.height
    const navBarHeight = document
      ?.querySelector('.redesign-navbar')
      ?.getBoundingClientRect()?.height
    const productInfoOffset = document
      ?.querySelector('#productInfoSelector')
      ?.closest('.classification')?.offsetTop
    const stickyHeight = document
      .querySelector('.js-sticky-menu')
      ?.classList?.contains('is_stuck')
      ? 0
      : 70
    const scrollPosition =
      productInfoOffset - headerHeight - navBarHeight - stickyHeight
    scrollPosition &&
      window?.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      })
  }

  return (
    <section>
      {notifyPopupShow && (
        <NotifyMe
          show={notifyPopupShow}
          skuData={notifyPopupData}
          productData={productData}
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
        {(errorMsg || wishListErrorMsg) && (
          <div
            className='alert alert-dismissible hidden-print alert-danger undefined cart-success-msg'
            aria-describedby='loginModalErrors-desc'
            tabIndex='0'
            role='alert'
            id={`pdp-${errorMsg ? 'errorMsg' : 'wishListErrorMsg'}`}
          >
            {handleCloseBtn(errorMsg || wishListErrorMsg, undefined)}
            <b id='loginModalErrors-desc'>{errorMsg || wishListErrorMsg}</b>
          </div>
        )}
        {(successMsg || wishListSuccessMsg) && (
          <div
            className='alert alert-dismissible hidden-print alert-success undefined header-alert-top cart-success-msg'
            role='alert'
            id={`pdp-${successMsg ? 'successMsg' : 'wishListSuccessMsg'}`}
          >
            {handleCloseBtn(undefined, successMsg || wishListSuccessMsg)}
            <strong>{successMsg || wishListSuccessMsg}</strong>
          </div>
        )}
        <div className='product-title-wrapper'>
          <h1 className='page-title'>
            <span>{productData?.displayName}</span>
            <div>
              <div
                htmlFor='reviewsection'
                className='yotpo bottomLine'
                data-yotpo-product-id={productData?.productId}
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
            {productData?.description}{' '}
            <a
              href='#'
              className='readMoreLink'
              onClick={e => handleReadMore(e)}
            >
              Read More
            </a>
          </p>
        </div>
        <div className='row product-gallery-wrapper'>
          {renderGalleryImage()}
          {productData &&
            productData.productDetails &&
            !productData.productDetails.isGiftItem && (
              <div className='col-md-7 prdsku'>
                <div className='sukproduct'>
                  <SkuVariants
                    handleVariantSelected={handleVariantSelected}
                    productData={productData}
                    handleAddtoCart={addToBagHandler}
                    handleAddtoWishList={addToWishLisrHandler}
                    handleNotifyMe={handleNotifyMe}
                    variantSelected={variantSelected}
                    variantOptions={variantsOptions}
                    handleSelectedSku={handleSelectedSku}
                  />
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}
