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
import NextImage from '../template/components/nextImage'
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
  AddtoWishhList
} from '../ThirdPartyScripts/Events'

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
  const { skuid } = router.query
  // const defaultSkuId =
  //   pdpData?.products[0]?.skus[pdpData?.products[0]?.defaultSkuId]

  if (productType === 'giftcard') {
    return <GiftCard {...props} />
  }

  useEffect(() => {
    setShowWidget(true)
    setTimeout(() => {
      window.yotpo && window.yotpo.refreshWidgets()
    }, 10)
    prepareVarinatsOptions()
    setErrorMsg('')
    setSuccessMsg('')
    setWishListSuccessMsg('')
    setWishListErrorMsg('')
  }, [])

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
    if (successMsg || errorMsg || wishListErrorMsg || wishListSuccessMsg) {
      setTimeout(() => {
        setSuccessMsg('')
        setErrorMsg('')
        setWishListSuccessMsg('')
        setWishListErrorMsg('')
      }, 3000)
    }
  }, [errorMsg, successMsg, wishListErrorMsg, wishListSuccessMsg])

  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH
  const productData = pdpData && pdpData.products && pdpData.products[0]
  const productAdditionDetails = productData?.additionalDetails

  // console.log('productData.....', productData)

  const getDefaultSku = variantKey => {
    let defaultSku = {}
    if (
      productData &&
      productData.variantOptions &&
      productData.variantOptions[variantKey].length
    ) {
      const skuId = skuid || productData?.defaultSkuId
      // find skuId in associatedSkuds of variantOptions
      for (let i = 0; i < productData?.variantOptions[variantKey].length; i++) {
        // options array
        const associatedSkusIds =
          productData?.variantOptions[variantKey][i]?.associatedSkuIds || []
        if (associatedSkusIds.includes(skuId)) {
          defaultSku = productData?.variantOptions[variantKey][i]
          break
        }
      }
    }
    return defaultSku
  }

  function prepareVarinatsOptions() {
    const variantOptionsObj = {}
    if (productData && productData.variantOptions) {
      Object.keys(productData.variantOptions).forEach(variantKey => {
        variantOptionsObj[variantKey] = {
          options: productData.variantOptions[variantKey],
          defaultSelected: getDefaultSku(variantKey),
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
        <div className='product-gallery__main'>
          <ImageCarousel
            data={productData?.productDetails?.productMedia?.default}
            additionalDetails={productAdditionDetails}
            onSale={showSaleWidget}
          />
        </div>
      </div>
    </aside>
  )

  const handleVariantSelected = (index, variantKey, value, variant) => {
    // value = '4pcs' variant = {optionValue: '4pcs' ,asscoaitedSkus:[c98026,..]}
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

  const handleSelectedSku = skuData => {
    // for setting onSale badge and addToWishlist payload
    if (skuData) {
      setShowSaleWidget(skuData?.skuDetails?.onSale) // set onSale badge based on selected count
      setSkuSelected(skuData)
    }
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
  const addToBagHandler = (skuData, itemQuantity) => {
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

  const addToWishLisrHandler = skuData => {
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
              `The following item have been moved to your wishlist: ${productData?.displayName}`
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
    const merchId = process.env.NEXT_PUBLIC_LISTRACK_MID
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
          <p className='page-short-description'>{productData?.description}</p>
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
