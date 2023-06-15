/* eslint-disable no-nested-ternary */
/* eslint-disable indent */
/* eslint-disable no-lonely-if */
/* eslint-disable react/jsx-no-useless-fragment */
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
  handleAddtoCart,
  handleAddtoWishList,
  handleNotifyMe,
  variantOptions
}) {
  const [itemQuantity, setItemQuantity] = useState(1)
  const [disablePlusCounter, setDisablePlusCounter] = useState(false)
  const [disableMinusCounter, setDisableMinusCounter] = useState(false)
  const [disableAddToCart, setDisableAddToCart] = useState(false)
  const maxQtyAllowed = 999 // max qty user can enter

  useEffect(() => {
    setItemQuantity(1)
    setDisableAddToCart(false)
    setDisableMinusCounter(false)
    setDisablePlusCounter(false)
  }, [productData])

  const handleSelectedSkuData = skuData => {
    // sku identified
    handleSelectedSku(skuData) // for setting onSale badge and addToWishlist payload
  }

  const addItemQuantity = skuData => {
    const availableStock = getMaxQtyAllowed(skuData)
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
    const res = (listP - saleP).toFixed(2)
    return res
  }

  const getMaxQtyAllowed = skuData => {
    let maxQty = 0
    // test case
    // const availableStock = 6
    // const alwaysInStock = true
    // const maxQtyAllowedPerOrder = 14 - order upto 14
    const availableStock =
      parseInt(skuData?.skuDetails?.inventory[0]?.availableStock) || 0
    const alwaysInStock =
      skuData?.skuDetails?.inventory[0]?.alwaysInStock || false
    const maxQtyAllowedPerOrder = parseInt(skuData?.maxQtyAllowedPerOrder) || 0
    if (!alwaysInStock) {
      if (maxQtyAllowedPerOrder === 0) {
        maxQty = availableStock
      } else if (maxQtyAllowedPerOrder > availableStock) {
        maxQty = availableStock
      } else {
        maxQty = maxQtyAllowedPerOrder
      }
    } else {
      // always in stock is true
      if (maxQtyAllowedPerOrder === 0) {
        maxQty = maxQtyAllowed
      } else {
        maxQty = maxQtyAllowedPerOrder
      }
    }
    return maxQty
  }

  const handleQtyChange = (e, skuData) => {
    let val = parseInt(e.target.value)
    const maxQty = getMaxQtyAllowed(skuData)
    if (val > maxQtyAllowed) {
      val = maxQtyAllowed
      setItemQuantity(maxQtyAllowed)
    }
    if (val <= 0) {
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

  const handleOnBlur = e => {
    if (e.target.value === '' || Number.isNaN(e.target.value)) {
      setItemQuantity(1)
    }
  }

  const displayQtyErrorMsg = skuData => {
    const qty = parseInt(itemQuantity)
    const maxQty = getMaxQtyAllowed(skuData)
    if (maxQty > 0 && qty > maxQty) {
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
    // handle tile selection - user clicked on tile e.g., 4pcs or 10oz etc.,
    setItemQuantity(1)
    setDisableAddToCart(false)
    setDisableMinusCounter(false)
    setDisablePlusCounter(false)
    handleVariantSelected(index, variantKey, value, variant)
  }

  const formatThickness = str => {
    if (str && str[0] === '\\' && str[1] === '|') {
      return str.slice(3)
    }
    return str
  }

  // out of stock for product without options
  const displayOOSForWoOp = skuId => {
    if (!skuId) {
      return
    }

    let skuData = {}
    if (variantOptions && Object.keys(variantOptions).length === 0) {
      skuData = productData && productData.skus && productData.skus[skuId]
      // skuData.skuDetails.hasStock = false // test data
    } else {
      return
    }
    if (!skuData?.skuDetails?.hasStock) {
      // out of stock section
      return (
        <>
          <span className='outoftocklabdt'>Out of Stock</span>
          {!skuData?.skuDetails?.hasStock && (
            <span
              className='notifytxtnew'
              onClick={() =>
                handleNotifyMe({
                  itemCode: skuId
                })
              }
            >
              <a href='#'>NOTIFY ME</a>
            </span>
          )}
        </>
      )
    }
  }

  // price section will be printed after all variants sections
  const displayVariantPriceSection = (index, variantKey, skuID) => {
    const skuId =
      skuID || (variantOptions && variantOptions[variantKey]?.skuId) || ''
    let skuData = productData && productData?.skus[skuId]
    if (!skuData) {
      // defaultSkuId is missing in skus. first sku should be considered
      skuData = productData && productData?.skus[0]
    }
    // skuData.skuDetails.price.salePrice = { price: '$25.34' } // test data
    // skuData.skuDetails.hasStock = false // test data for out of stock
    const optionsTxtForMv =
      (variantOptions &&
        variantOptions[variantKey] &&
        variantOptions[variantKey]?.optionsTextForMv) ||
      ''
    if (variantOptions && variantKey) {
      handleSelectedSkuData(skuData)
    }
    return (
      <div className='itempanel'>
        <div className='itemtxt'>
          ITEM CODE: #<span>{skuId || ''}</span>
          <span className='itemtxt-mv'>{`${
            optionsTxtForMv ? ` | ${optionsTxtForMv}` : ''
          }`}</span>
          {displayOOSForWoOp(skuId)}
        </div>
        <div className='price-section'>
          {/* sale price */}
          {skuData && skuData?.skuDetails?.price?.salePrice && (
            <span className='priceb'>
              {skuData?.skuDetails?.price?.salePrice?.price}
            </span>
          )}
          {skuData && skuData?.skuDetails?.price?.listPrice && (
            <span // list price
              className={
                skuData?.skuDetails?.price?.listPrice &&
                skuData?.skuDetails?.price?.salePrice
                  ? 'pricebstik'
                  : 'priceb'
              }
            >
              {skuData?.skuDetails?.price?.listPrice?.price}
            </span>
          )}
          {skuData?.skuDetails?.price?.salePrice && (
            <span className='pricenred'>
              {`You save: $${displayPrice(
                skuData?.skuDetails?.price?.listPrice?.price,
                skuData?.skuDetails?.price?.salePrice?.price
              )}`}
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
                      (skuData && !skuData?.skuDetails?.hasStock) ||
                      itemQuantity === 1
                        ? 'disabled'
                        : ''
                    }`}
                    type='button'
                    onClick={reduceItemQuantity}
                    value='minus'
                    aria-labelledby='qty-minus'
                  >
                    <i
                      className='fa fa-minus'
                      aria-hidden='true'
                      id='qty-minus'
                    ></i>
                  </button>
                </span>
                {/** qty input field */}
                <input
                  id='quantity'
                  className='sku-item-qty'
                  type='number'
                  value={itemQuantity}
                  onChange={e => handleQtyChange(e, skuData)}
                  onBlur={e => handleOnBlur(e, skuData)}
                  aria-labelledby='quantity'
                />
                <span className='input-group-btn'>
                  {/* plus button */}
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disablePlusCounter ||
                      (skuData && !skuData?.skuDetails?.hasStock) ||
                      (skuData &&
                        itemQuantity &&
                        itemQuantity > getMaxQtyAllowed(skuData))
                        ? 'disabled'
                        : ''
                    }`}
                    type='button'
                    onClick={() => addItemQuantity(skuData)}
                    value='plus'
                    aria-labelledby='qty-plus'
                  >
                    <i
                      className='fa fa-plus'
                      aria-hidden='true'
                      id='qty-plus'
                    ></i>
                  </button>
                </span>
              </div>
            </span>
            {/** add to cart & add to wishlist */}
            <span
              className={`pdp-buttons ${
                !skuData?.skuDetails?.hasStock ? 'npbuttons' : ''
              }`}
            >
              <span className='sp-20'>
                <button
                  className={`btn btn-secondary btn-md add-to-cart ${
                    disableAddToCart ||
                    (skuData && !skuData?.skuDetails?.hasStock) ||
                    (skuData &&
                      itemQuantity &&
                      itemQuantity > getMaxQtyAllowed(skuData))
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
            </span>
          </div>
          <span className='sku-qty-error-msg'>
            {displayQtyErrorMsg(skuData)}
          </span>
        </div>
      </div>
    )
  }

  const getSkuIdsOfPreviousSelectedOptions = index => {
    let allCommonSkus = []
    const skuIdsToDisplay = []
    for (let i = 0; i < index; i++) {
      const key = Object.keys(variantOptions)[i]
      console.log('i,key,variantOptions.....', i, key, variantOptions)
      const skuObj = variantOptions[key].defaultSelected
        ? variantOptions[key].defaultSelected
        : variantOptions[key].optionSelected
      allCommonSkus = allCommonSkus.concat(skuObj?.associatedSkuIds)
    }
    // find duplicate ids
    for (let i = 0; i < allCommonSkus.length; i++) {
      const restOfIds = allCommonSkus.slice(i + 1)
      if (
        restOfIds.includes(allCommonSkus[i]) &&
        !skuIdsToDisplay.includes(allCommonSkus[i])
      ) {
        skuIdsToDisplay.push(allCommonSkus[i])
      }
    }
    console.log(
      'index,allCommonSkus,skuIdsToDisplay.....',
      index,
      allCommonSkus,
      skuIdsToDisplay
    )
    return index > 1 ? skuIdsToDisplay : allCommonSkus
  }

  const selectActiveSku = (selectedSku, optionsToDisplay, selectedSkuIndex) => {
    // find out the matching skuId in selectedSku associatedSkuIds & optionsToDiplay
    // selectedSku = {optionValue: '12oz', associatedSkuIds: [98458, 56781,78165]}
    // optionsToDisplay = [{oV: '4oz', aSIds=[91245,34256]}, {oV: '8oz', aSIds:[98458,12345]},...]
    const aSkuIds = selectedSku?.associatedSkuIds || []
    let didGetMatchingSkuId = false
    let activeSku = {}
    for (let i = 0; i < optionsToDisplay?.length; i++) {
      const optionASIds = optionsToDisplay[i]?.associatedSkuIds || []
      // loop optionsASIds to identify matching aSKUIds of selected sku
      for (let j = 0; j < optionASIds.length; j++) {
        if (aSkuIds.includes(optionASIds[j])) {
          // matching skuId between selected sku and option aSKUIds
          const skuId = optionASIds[j]
          if (!selectedSkuIndex) {
            selectedSkuIndex = i
          }
          // check if this is OOS
          if (productData?.skus[skuId]?.skuDetails?.hasStock) {
            didGetMatchingSkuId = true
            activeSku = selectedSku
          } else {
            // selected sku is OOS, check for next option in optionsToDisplay []
            if (i + 1 < optionsToDisplay.length) {
              const selected = optionsToDisplay[i + 1]
              selectActiveSku(selected, optionsToDisplay)
            } else {
              // reached last option in optionsToDisplay
            }
          }
        }
      }
    }
  }

  // displays all variants sections
  const displayVariants = (index, variantKey) => {
    let optionsToDisplay = []
    let selectedSku = {}
    const optionsText = ''
    if (index > 0) {
      const prevVariantKey = Object.keys(variantOptions)[index - 1] // 'count'
      // find out what is selected variant in this section
      const skuSelectedInPrevSection = variantOptions[prevVariantKey]
        .defaultSelected
        ? variantOptions[prevVariantKey].defaultSelected
        : variantOptions[prevVariantKey].optionSelected
      // const { associatedSkuIds } = skuSelectedInPrevSection || []
      const associatedSkuIds = getSkuIdsOfPreviousSelectedOptions(index)
      // find what are all associated skus matches in current section based on option selected in prev section
      for (let i = 0; i < variantOptions[variantKey].options.length; i++) {
        // variantKey options
        const optionSkusIds =
          variantOptions[variantKey].options[i].associatedSkuIds || []
        for (let j = 0; j < associatedSkuIds.length; j++) {
          if (optionSkusIds.includes(associatedSkuIds[j])) {
            variantOptions[variantKey].options[i].skuId = associatedSkuIds[j]
            variantOptions[variantKey].options[i].hasStock =
              productData?.skus[associatedSkuIds[j]]?.skuDetails?.hasStock
            variantOptions[variantKey].options[i].thickness =
              productData?.skus[
                associatedSkuIds[j]
              ]?.skuDetails?.additionalDetails?.thickness
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
      // handle if there is only one variant key e.g., weight: [{ov:'2pcs',askuIds:[1,2,..]},{},{},...]
      if (Object.keys(variantOptions).length === 1) {
        for (let i = 0; i < variantOptions[variantKey].options.length; i++) {
          const optionSkusIds =
            variantOptions[variantKey].options[i].associatedSkuIds || []
          for (let j = 0; j < optionSkusIds.length; j++) {
            variantOptions[variantKey].options[i].skuId = optionSkusIds[j]
            variantOptions[variantKey].options[i].hasStock =
              productData?.skus[optionSkusIds[j]]?.skuDetails?.hasStock
            variantOptions[variantKey].options[i].thickness =
              productData?.skus[
                optionSkusIds[j]
              ]?.skuDetails?.additionalDetails?.thickness
            optionsToDisplay.push(variantOptions[variantKey].options[i])
          }
        }
      } else {
        optionsToDisplay = variantOptions[variantKey].options
      }
      selectedSku = variantOptions[variantKey].defaultSelected
        ? variantOptions[variantKey].defaultSelected
        : variantOptions[variantKey].optionSelected
      // if selectedSku is OOS, then select next sku from optionsToDisplay[]
      selectActiveSku(selectedSku, optionsToDisplay)
    }
    if (index === Object.keys(variantOptions).length - 1) {
      // sku in last section
      let skuId = ''
      let optionsSelected = []
      const keys = Object.keys(variantOptions)
      // get all associated skuIds of all selected varianOptions
      // count - 4pcs - [99581, 99521], weight - 10oz - [86381, 99581, 77645]
      // get all skuIds - [99581, 99521, 86381, 99581, 77645]
      // for options selected === count[4pcs] - weight[10oz] == the skuId is 99581
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
              skuId = optionsSelected[i] // skuId identified
              break
            }
          } // inner loop
          if (skuId) {
            break
          }
        } // outer loop
      } else {
        skuId = optionsSelected[0]
      }
      if (skuId) {
        // populate sku details info in selected option
        variantOptions[keys[keys.length - 1]].skuId = skuId
        //   variantOptions[keys[keys.length - 1]].hasStock = false //test data
        variantOptions[keys[keys.length - 1]].hasStock =
          productData?.skus[skuId]?.skuDetails?.hasStock
        variantOptions[keys[keys.length - 1]].skuData = productData?.skus[skuId]
        let optionsTextForMv = ''
        // prepare options text for mobile view
        Object.keys(variantOptions).forEach(vKey => {
          // variant key === count/weight
          let txt = ''
          if (variantOptions[vKey].defaultSelected) {
            txt = variantOptions[vKey].defaultSelected.optionValue
          } else if (variantOptions[vKey].optionSelected) {
            txt = variantOptions[vKey].optionSelected.optionValue
          }
          optionsTextForMv = optionsTextForMv
            ? `${optionsTextForMv} | ${txt}`
            : `${txt}`
        })
        variantOptions[keys[keys.length - 1]].optionsTextForMv =
          optionsTextForMv
      }
    }

    return (
      <>
        <div className='sukhead'>{`Select ${variantKey}`}:</div>
        <div>
          <ul className='list-inline'>
            {optionsToDisplay.map(sku => {
              if (
                index === Object.keys(variantOptions).length - 1 &&
                !sku.hasStock
              ) {
                // out of stock section
                return (
                  <li className='list-inline-item me-2 mb-2'>
                    <div
                      className='Count outstock'
                      onClick={() =>
                        handleSkuSelected(
                          index,
                          variantKey,
                          sku.optionValue,
                          sku
                        )
                      }
                    >
                      <span className='outoftocklab'>Out of Stock</span>
                      <span
                        className={`${
                          sku.optionValue.length > 9 ? 'Countb-large' : 'Countb'
                        }`}
                      >
                        {sku.optionValue}
                      </span>
                      <span
                        className={`${
                          sku.optionValue.length > 9
                            ? 'txttagz-large'
                            : 'txttagz'
                        }`}
                      >
                        {index === Object.keys(variantOptions).length - 1 &&
                          sku.thickness &&
                          formatThickness(sku.thickness)}
                      </span>
                    </div>
                    {!sku.hasStock && (
                      <div
                        className='notifytxt'
                        onClick={() =>
                          handleNotifyMe({
                            itemCode: sku.skuId
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
                        ? `${
                            index === Object.keys(variantOptions).length - 1
                              ? 'tag-selected-wg'
                              : 'tag-selected'
                          }`
                        : `${
                            index === Object.keys(variantOptions).length - 1
                              ? 'tag-wg'
                              : 'tag'
                          }`
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
                    <span
                      className={`${
                        index === Object.keys(variantOptions).length - 1
                          ? sku.optionValue.length > 9
                            ? sku.thickness
                              ? 'txttagb-last-large-with-thick'
                              : 'txttagb-last-large'
                            : 'txttagb-last'
                          : 'txttagb'
                      }`}
                    >
                      {sku.optionValue}
                    </span>
                    {index === Object.keys(variantOptions).length - 1 &&
                      sku.thickness && (
                        <span
                          className={`${
                            sku.optionValue.length > 9
                              ? 'txttagz-large'
                              : 'txttagz'
                          }`}
                        >
                          {formatThickness(sku.thickness)}
                        </span>
                      )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {variantOptions &&
          index === Object.keys(variantOptions).length - 1 &&
          displayVariantPriceSection(index, variantKey)}
      </>
    )
  }

  const displayVariantsSection = () => {
    return (
      variantOptions &&
      Object.keys(variantOptions).map((variantKey, index) => {
        return displayVariants(index, variantKey)
      })
    )
  }
  return (
    <>
      {variantOptions && Object.keys(variantOptions).length > 0
        ? displayVariantsSection()
        : productData &&
          ((productData?.variantOptions &&
            Object.keys(productData?.variantOptions).length === 0) ||
            !productData?.variantOptions)
        ? displayVariantPriceSection(0, '', productData?.defaultSkuId)
        : ''}
    </>
  )
}

export default SkuVariants
