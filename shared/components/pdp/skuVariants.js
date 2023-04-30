/* eslint-disable no-lone-blocks */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable radix */
/* eslint-disable arrow-body-style */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable linebreak-style */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable operator-linebreak */
/* eslint-disable arrow-parens */
/* eslint-disable array-callback-return */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable space-before-function-paren */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from 'react'

function SkuVariants({
  productId,
  handleVariantSelected,
  productData,
  handleSelectedSku,
  countSelected,
  handleAddtoCart,
  handleAddtoWishList,
  handleNotifyMe,
  variantOptions
}) {
  const [itemQuantity, setItemQuantity] = useState()
  const [disablePlusCounter, setDisablePlusCounter] = useState(false)
  const [disableMinusCounter, setDisableMinusCounter] = useState(false)
  const [disableAddToCart, setDisableAddToCart] = useState(false)
  const maxQtyAllowed = 999 // max qty user can enter
  //   console.log('from skuCounts....productData......', productData)

  useEffect(() => {
    if ((countSelected && !countSelected.hasStock) || !countSelected) {
      setDisableAddToCart(true)
    } else {
      setItemQuantity(1)
      setDisablePlusCounter(false)
      setDisableMinusCounter(false)
      setDisableAddToCart(false)
    }
  }, [countSelected])

  const handleSelectedSkuData = skuData => {
    handleSelectedSku(skuData)
  }

  const addItemQuantity = skuData => {
    const availableStock =
      skuData && skuData?.skuDetails?.inventory[0].availableStock
    const qty = parseInt(itemQuantity)
    if (qty < availableStock) {
      setItemQuantity(qty + 1)
      setDisablePlusCounter(false)
    }
    if (qty + 1 >= availableStock) {
      setDisablePlusCounter(true)
    }
    setDisableMinusCounter(false)
    setDisableAddToCart(false)
  }

  const reduceItemQuantity = () => {
    const qty = parseInt(itemQuantity)
    if (qty > 1) {
      setItemQuantity(qty - 1)
    }
    if (qty - 1 <= 1) {
      setItemQuantity(1)
    }
    setDisablePlusCounter(false)
    setDisableAddToCart(false)
  }

  const handleAddtoCartOnClick = (event, skuData) => {
    event.preventDefault()
    handleAddtoCart(skuData, itemQuantity)
  }

  const handleAddtoWishListOnClick = (event, skuData) => {
    handleAddtoWishList(skuData)
  }

  const displayPrice = (listPrice, salePrice) => {
    const listP = (listPrice && parseFloat(listPrice.slice(1))) || 0
    const saleP = (salePrice && parseFloat(salePrice.slice(1))) || 0
    return Math.ceil(listP - saleP)
  }

  const handleQtyChange = (e, skuData) => {
    let val = parseInt(e.target.value)
    const maxQty = skuData?.skuDetails?.inventory[0].availableStock || 0
    if (val > maxQtyAllowed) {
      val = maxQtyAllowed
      setItemQuantity(maxQtyAllowed)
    }
    if (val <= 0 || val === '' || Number.isNaN(val)) {
      setItemQuantity(1)
      return
    }
    if (val > maxQty) {
      setItemQuantity(val)
      setDisablePlusCounter(true)
      setDisableMinusCounter(false)
      setDisableAddToCart(true)
      return
    }
    setItemQuantity(val)
    setDisablePlusCounter(false)
    setDisableAddToCart(false)
  }

  const displayQtyErrorMsg = skuData => {
    // console.log('from displayQtyErrorMsg.....itemQty...', itemQuantity)
    const qty = parseInt(itemQuantity)
    const maxQty =
      (skuData && skuData?.skuDetails?.inventory[0].availableStock) || 0
    if (qty > maxQty) {
      return `There is not enough inventory in stock. Please enter quantity no more than ${maxQty}`
    }
    return ''
  }

  const displayPricePanel = skuData => {
    const hasStock = (skuData && skuData?.skuDetails?.hasStock) || ''
    if (!hasStock) {
      return 'hide-panel1'
    }
    return 'panel1'
  }

  const handleSkuSelected = (index, variantKey, value, variant) => {
    handleVariantSelected(index, variantKey, value, variant)
  }

  const formatThickness = str => {
    if (str && str[0] === '\\' && str[1] === '|') {
      return str.slice(3)
    }
    return str
  }

  const displayVariantPriceSection = (index, variantKey) => {
    const skuId = variantOptions[variantKey].skuId || ''
    const skuData = productData && productData.skus[skuId]
    // skuData.skuDetails.price.salePrice = '$100.95' //test data
    handleSelectedSkuData(skuData)
    // debugger
    return (
      <div className='itempanel'>
        <div className='itemtxt'>
          ITEM CODE: <span>{skuId && skuId}</span>
        </div>
        <div className='price-section'>
          {skuData && skuData?.skuDetails?.price?.salePrice && (
            <span className='priceb'>
              {skuData?.skuDetails?.price?.salePrice}
            </span>
          )}
          {skuData && skuData?.skuDetails?.price?.listPrice && (
            <span
              className={
                skuData?.skuDetails?.price?.listPrice &&
                skuData?.skuDetails?.price?.salePrice
                  ? 'pricebstik'
                  : 'priceb'
              }
            >
              {skuData?.skuDetails?.price?.listPrice.price}
            </span>
          )}
          {skuData?.skuDetails?.price?.salePrice && (
            <span className='pricenred'>
              {`You save: $${displayPrice(
                skuData?.skuDetails?.price?.listPrice.price,
                skuData?.skuDetails?.price?.salePrice
              )}.00`}
            </span>
          )}
        </div>
        {/* counter section */}
        <div className='sku-counter-section'>
          <div className=''>
            <span className={displayPricePanel(skuData)}>
              <div className='input-group'>
                <span className='input-group-btn'>
                  {/* minus button */}
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disableMinusCounter ||
                      (skuData && !skuData?.skuDetails?.hasStock)
                        ? 'disabled'
                        : ''
                    }`}
                    type='button'
                    onClick={reduceItemQuantity}
                  >
                    <i className='fa fa-minus' aria-hidden='true'></i>
                  </button>
                </span>
                <input
                  className='sku-item-qty'
                  type='number'
                  value={itemQuantity}
                  onChange={e => handleQtyChange(e, skuData)}
                />
                <span className='input-group-btn'>
                  {/* plus button */}
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disablePlusCounter ||
                      (skuData && !skuData?.skuDetails?.hasStock) ||
                      (skuData &&
                        itemQuantity &&
                        itemQuantity >
                          skuData?.skuDetails?.inventory[0].availableStock)
                        ? 'disabled'
                        : ''
                    }`}
                    type='button'
                    onClick={() => addItemQuantity(skuData)}
                  >
                    <i className='fa fa-plus' aria-hidden='true'></i>
                  </button>
                </span>
              </div>
            </span>
            <span className='sp-20'>
              <button
                className={`btn btn-secondary btn-md add-to-cart ${
                  disableAddToCart ||
                  (skuData && !skuData?.skuDetails?.hasStock) ||
                  (skuData &&
                    itemQuantity &&
                    itemQuantity >
                      skuData?.skuDetails?.inventory[0].availableStock)
                    ? 'disabled'
                    : ''
                }`}
                id='0'
                onClick={e => handleAddtoCartOnClick(e, skuData)}
              >
                ADD TO CART
              </button>
            </span>
            <span>
              <button
                className='btn btn-primary btn-md add-to-cart'
                id='1'
                onClick={e => handleAddtoWishListOnClick(e, skuData)}
              >
                ADD TO WISHLIST
              </button>
            </span>
          </div>
          <span className='sku-qty-error-msg'>
            {displayQtyErrorMsg(skuData)}
          </span>
        </div>
      </div>
    )
  }

  const displayVariants = (index, variantKey) => {
    let optionsToDisplay = []
    let selectedSku = {}
    if (index > 0) {
      const prevVariantKey = Object.keys(variantOptions)[index - 1] // 'count'
      // find out what is selected variant in this section
      const skuSelectedInPrevSection = variantOptions[prevVariantKey]
        .defaultSelected
        ? variantOptions[prevVariantKey].defaultSelected
        : variantOptions[prevVariantKey].optionSelected
      const { associatedSkuIds } = skuSelectedInPrevSection

      // find all matching skus in current section
      for (let i = 0; i < variantOptions[variantKey].options.length; i++) {
        const optionSkus =
          variantOptions[variantKey].options[i].associatedSkuIds
        for (let j = 0; j < associatedSkuIds.length; j++) {
          if (optionSkus.includes(associatedSkuIds[j])) {
            optionsToDisplay.push(variantOptions[variantKey].options[i])
          }
        }
      }
      if (
        !variantOptions[variantKey].defaultSelected &&
        !variantOptions[variantKey].optionSelected
      ) {
        variantOptions[variantKey].defaultSelected = optionsToDisplay[0]
        variantOptions[variantKey].optionSelected = ''
      }
      selectedSku = variantOptions[variantKey].defaultSelected
        ? variantOptions[variantKey].defaultSelected
        : variantOptions[variantKey].optionSelected
    } else if (index === 0) {
      optionsToDisplay = variantOptions[variantKey].options
      selectedSku = variantOptions[variantKey].defaultSelected
        ? variantOptions[variantKey].defaultSelected
        : variantOptions[variantKey].optionSelected
    }
    if (index === Object.keys(variantOptions).length - 1) {
      // sku in last section
      let skuId = ''
      let optionsSelected = []
      const keys = Object.keys(variantOptions)
      for (let key = 0; key < keys.length; key++) {
        optionsSelected = optionsSelected.concat(
          variantOptions[keys[key]].defaultSelected
            ? variantOptions[keys[key]].defaultSelected.associatedSkuIds
            : variantOptions[keys[key]].optionSelected.associatedSkuIds
        )
      }
      if (optionsSelected.length > 1) {
        for (let i = 0; i < optionsSelected.length; i++) {
          for (let j = i + 1; j < optionsSelected.length; j++) {
            if (optionsSelected[i] === optionsSelected[j]) {
              skuId = optionsSelected[i]
              break
            }
          }
          if (skuId) {
            break
          }
        }
      } else {
        skuId = optionsSelected[0]
      }
      if (skuId) {
        variantOptions[keys[keys.length - 1]].skuId = skuId
        //   variantOptions[keys[keys.length - 1]].hasStock = false //test data
        variantOptions[keys[keys.length - 1]].hasStock =
          productData.skus[skuId].skuDetails.hasStock
        variantOptions[keys[keys.length - 1]].skuData = productData.skus[skuId]
      }
      //   console.log('skuID....', skuId)
    }
    return (
      <>
        <div className='sukhead'>{variantKey}</div>
        <div>
          <ul className='list-inline'>
            {optionsToDisplay.map(sku => {
              if (
                index === Object.keys(variantOptions).length - 1 &&
                !variantOptions[variantKey].hasStock
              ) {
                // return checkForOutOfStock(index, variantKey, sku)
                return (
                  <li className='list-inline-item me-2 mb-2'>
                    <div className='Count outstock'>
                      <span className='Countb'>{sku.optionValue}</span>
                      <span className='outoftocklab'>Out of stock</span>
                    </div>
                    {!variantOptions[variantKey].hasStock && (
                      <div
                        className='notifytxt'
                        onClick={() =>
                          handleNotifyMe({
                            ...variantOptions[variantKey].skuData,
                            itemCode: variantOptions[variantKey].skuId
                          })
                        }
                      >
                        <a href='#'>NOTIFY ME</a>
                      </div>
                    )}
                  </li>
                )
              }
              return (
                <li className='list-inline-item me-2 mb-2'>
                  <div
                    className={
                      selectedSku && selectedSku.optionValue === sku.optionValue
                        ? 'tag-selected'
                        : 'tag'
                    }
                    onClick={() =>
                      handleSkuSelected(index, variantKey, sku.optionValue, sku)
                    }
                  >
                    <span
                      className={`${
                        selectedSku &&
                        selectedSku.optionValue === sku.optionValue
                          ? 'sku-selected'
                          : 'sku-not-selected'
                      }`}
                    >
                      <i className='icon fas fa-check'></i>
                    </span>
                    <span className='txttagb'>{sku.optionValue}</span>
                    {/* <span className='txttagz'>
                    {formatThickness(skusData.skus[key].thickness)}
                  </span> */}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {index === Object.keys(variantOptions).length - 1 &&
          displayVariantPriceSection(index, variantKey)}
      </>
    )
  }

  const displayVariantsSection = () => {
    return (
      variantOptions &&
      Object.keys(variantOptions).map((variantKey, index) => {
        if (index === 0) {
          return displayVariants(index, variantKey)
        }
        if (index > 0) {
          return displayVariants(index, variantKey)
        }
      })
    )
  }
  const displayWeights = () => <>{displayVariantsSection()}</>
  return <>{displayWeights()}</>
}

export default SkuVariants