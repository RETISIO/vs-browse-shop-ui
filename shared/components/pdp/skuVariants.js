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

function SkuVariants({
  productId,
  handleVariantSelected,
  skusData,
  weightSelected,
  productData,
  handleCountSelected,
  countSelected,
  handleAddtoCart,
  handleAddtoWishList,
  handleNotifyMe,
  variantsArr,
  variantSelected,
  variantOptions
}) {
  console.log('from SkuVariants.....variantSelected..', variantSelected)
  const [itemQuantity, setItemQuantity] = useState()
  const [disablePlusCounter, setDisablePlusCounter] = useState(false)
  const [disableMinusCounter, setDisableMinusCounter] = useState(false)
  const [disableAddToCart, setDisableAddToCart] = useState(false)
  const maxQtyAllowed = 999 // max qty user can enter
  //   console.log(
  //     'from skuCounts....weightSelected, countSelected,itemQuantity,productId',
  //     weightSelected,
  //     countSelected,
  //     itemQuantity,
  //     productId
  //   )
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

  const handleSelected = skuCount => {
    handleCountSelected(weightSelected, skuCount)
  }

  const addItemQuantity = () => {
    const { availableStock } = countSelected
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

  const handleAddtoCartOnClick = event => {
    event.preventDefault()
    handleAddtoCart(countSelected, itemQuantity)
  }

  const handleAddtoWishListOnClick = event => {
    handleAddtoWishList(countSelected)
  }

  const displayPrice = (listPrice, salePrice) => {
    const listP = (listPrice && parseFloat(listPrice.slice(1))) || 0
    const saleP = (salePrice && parseFloat(salePrice.slice(1))) || 0
    return Math.ceil(listP - saleP)
  }

  const handleQtyChange = e => {
    let val = parseInt(e.target.value)
    const maxQty = countSelected.availableStock || 0
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

  const displayQtyErrorMsg = () => {
    // console.log('from displayQtyErrorMsg.....itemQty...', itemQuantity)
    const qty = parseInt(itemQuantity)
    const maxQty = (countSelected && countSelected.availableStock) || 0
    if (qty > maxQty) {
      return `There is not enough inventory in stock. Please enter quantity no more than ${maxQty}`
    }
    return ''
  }

  const displayPricePanel = () => {
    const hasStock = countSelected && countSelected.hasStock
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

  const displayCheckMark = (variant, sku) => {
    if (
      variant.defaultOption &&
      variant.defaultOption.optionValue === sku.optionValue
    ) {
      return true
    }
    if (
      variant.optionSelected &&
      variant.optionSelected.optionValue === sku.optionValue
    ) {
      return true
    }
    return false
  }

  const displayVariantSection = (variant, index) => {
    return (
      <>
        <div className='sukhead'>{variant.name}</div>
        <div>
          <ul className='list-inline'>
            {variant.skus.map(sku => (
              <li className='list-inline-item me-2 mb-2'>
                <div
                  className={
                    displayCheckMark(variant, sku) ? 'tag-selected' : 'tag'
                  }
                  //   className={
                  //     variantSelected &&
                  //     variantSelected.optionValue === sku.optionValue
                  //       ? 'tag-selected'
                  //       : 'tag'
                  //   }
                  onClick={() => handleSkuSelected(sku.optionValue, variant)}
                >
                  <span
                    className={`${
                      displayCheckMark(variant, sku)
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
            ))}
          </ul>
        </div>
        {index === variantsArr.length - 1 && (
          <div className='itempanel'>
            {countSelected && countSelected.itemCode && (
              <div className='itemtxt'>
                ITEM CODE:{' '}
                <span>{countSelected && countSelected.itemCode}</span>
              </div>
            )}
            <div className='price-section'>
              {countSelected && countSelected.salePrice && (
                <span className='priceb'>{countSelected.salePrice} </span>
              )}
              {countSelected && countSelected.listPrice && (
                <span
                  className={
                    countSelected.listPrice && countSelected.salePrice
                      ? 'pricebstik'
                      : 'priceb'
                  }
                >
                  {countSelected.listPrice}
                </span>
              )}
              {countSelected && countSelected.salePrice && (
                <span className='pricenred'>
                  {`You save: $${displayPrice(
                    countSelected.listPrice,
                    countSelected.salePrice
                  )}.00`}
                </span>
              )}
            </div>

            {/* counter section */}
            <div className='sku-counter-section'>
              <div className=''>
                <span className={displayPricePanel()}>
                  <div className='input-group'>
                    <span className='input-group-btn'>
                      {/* minus button */}
                      <button
                        className={`btn js-counter__btn rdrt ${
                          disableMinusCounter ||
                          (countSelected && !countSelected.hasStock)
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
                      onChange={handleQtyChange}
                    />
                    <span className='input-group-btn'>
                      {/* plus button */}
                      <button
                        className={`btn js-counter__btn rdrt ${
                          disablePlusCounter ||
                          (countSelected && !countSelected.hasStock) ||
                          (countSelected &&
                            itemQuantity &&
                            itemQuantity > countSelected.availableStock)
                            ? 'disabled'
                            : ''
                        }`}
                        type='button'
                        onClick={addItemQuantity}
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
                      (countSelected && !countSelected.hasStock) ||
                      (countSelected &&
                        itemQuantity &&
                        itemQuantity > countSelected.availableStock)
                        ? 'disabled'
                        : ''
                    }`}
                    id='0'
                    onClick={e => handleAddtoCartOnClick(e)}
                  >
                    ADD TO CART
                  </button>
                </span>
                <span>
                  <button
                    className='btn btn-primary btn-md add-to-cart'
                    id='1'
                    onClick={e => handleAddtoWishListOnClick(e)}
                  >
                    ADD TO WISHLIST
                  </button>
                </span>
              </div>
              <span className='sku-qty-error-msg'>{displayQtyErrorMsg()}</span>
            </div>
          </div>
        )}
      </>
    )
  }

  const displayVariants = (index, variantKey) => {
    // const associatedSkus = []
    let optionsToDisplay = []
    let selectedSku = {}
    // let prevVariantKey = ''
    if (index > 0) {
      const prevVariantKey = Object.keys(variantOptions)[index - 1] // 'count'
      // find out what is selected variant in this section
      const skuSelectedInPrevSection = variantOptions[prevVariantKey]
        .defaultSelected
        ? variantOptions[prevVariantKey].defaultSelected
        : variantOptions[prevVariantKey].optionSelected
      const { associatedSkus } = skuSelectedInPrevSection

      // find all matching skus in current section
      for (let i = 0; i < variantOptions[variantKey].options.length; i++) {
        const optionSkus = variantOptions[variantKey].options[i].associatedSkus
        for (let j = 0; j < associatedSkus.length; j++) {
          if (optionSkus.includes(associatedSkus[j])) {
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

    return (
      <>
        <div className='sukhead'>{variantKey}</div>
        <div>
          <ul className='list-inline'>
            {optionsToDisplay.map(sku => (
              <li className='list-inline-item me-2 mb-2'>
                <div
                  //   className={
                  //     displayCheckMark(selectedSku, sku) ? 'tag-selected' : 'tag'
                  //   }
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
                      selectedSku && selectedSku.optionValue === sku.optionValue
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
            ))}
          </ul>
        </div>
      </>
    )
  }

  const displayVariantsSection = () => {
    return (
      variantOptions &&
      Object.keys(variantOptions).map((variantKey, index) => {
        if (index === 0) {
          displayVariants(index, variantKey)
        } else if (index > 0) {
          displayVariants(index, variantKey)
        }
        if (index + 1 === variantOptions.length) {
          displayVariants(
            index,
            variantSelected.variant,
            variantKey,
            variantOptions[variantKey].options
          )
        }
      })
    )
  }
  const displayWeights = () => (
    <>
      {displayVariantsSection()}
      {/* {variantsArr && variantsArr.length && displayVariantSection()} */}

      <div className='sukhead'> Weight: </div>
      <div>
        <ul className='list-inline'>
          {skusData &&
            Object.keys(skusData.skus).map(key => (
              <li className='list-inline-item me-2 mb-2'>
                <div
                  className={
                    weightSelected &&
                    weightSelected.weight === skusData.skus[key].weight
                      ? 'tag-selected'
                      : 'tag'
                  }
                  onClick={() => handleSkuSelected(skusData.skus[key])}
                >
                  <span
                    className={`${
                      weightSelected &&
                      weightSelected.weight === skusData.skus[key].weight
                        ? 'sku-selected'
                        : 'sku-not-selected'
                    }`}
                  >
                    <i className='icon fas fa-check'></i>
                  </span>
                  <span className='txttagb'>{skusData.skus[key].weight}</span>
                  <span className='txttagz'>
                    {formatThickness(skusData.skus[key].thickness)}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className='sukhead'> Count: </div>
      <div>
        <ul className='list-inline'>
          {weightSelected &&
            weightSelected.count.map(skuCount => {
              if (!skuCount.hasStock) {
                // out of stock
                return (
                  <li className='list-inline-item me-2 mb-2'>
                    <div className='Count outstock'>
                      <span className='Countb'>{skuCount.pieces}</span>
                      <span className='outoftocklab'>Out of stock</span>
                    </div>
                    {!skuCount.hasStock && (
                      <div
                        className='notifytxt'
                        onClick={() =>
                          handleNotifyMe({ ...skuCount, ...weightSelected })
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
                      countSelected && countSelected.pieces === skuCount.pieces
                        ? 'Count-selected'
                        : 'Count'
                    }
                    onClick={() => handleSelected(skuCount)}
                  >
                    <span
                      className={`${
                        countSelected &&
                        countSelected.pieces === skuCount.pieces
                          ? 'count-sku-selected'
                          : 'count-sku-not-selected'
                      }`}
                    >
                      <i className='icon fas fa-check'></i>
                    </span>
                    <span className='Countb'>{skuCount.pieces}</span>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
      {/* Desktop view  */}

      <div className='itempanel'>
        {countSelected && countSelected.itemCode && (
          <div className='itemtxt'>
            ITEM CODE: <span>{countSelected && countSelected.itemCode}</span>
          </div>
        )}
        <div className='price-section'>
          {countSelected && countSelected.salePrice && (
            <span className='priceb'>{countSelected.salePrice} </span>
          )}
          {countSelected && countSelected.listPrice && (
            <span
              className={
                countSelected.listPrice && countSelected.salePrice
                  ? 'pricebstik'
                  : 'priceb'
              }
            >
              {countSelected.listPrice}
            </span>
          )}
          {countSelected && countSelected.salePrice && (
            <span className='pricenred'>
              {`You save: $${displayPrice(
                countSelected.listPrice,
                countSelected.salePrice
              )}.00`}
            </span>
          )}
        </div>

        {/* counter section */}
        <div className='sku-counter-section'>
          <div className=''>
            <span className={displayPricePanel()}>
              <div className='input-group'>
                <span className='input-group-btn'>
                  {/* minus button */}
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disableMinusCounter ||
                      (countSelected && !countSelected.hasStock)
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
                  onChange={handleQtyChange}
                />
                <span className='input-group-btn'>
                  {/* plus button */}
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disablePlusCounter ||
                      (countSelected && !countSelected.hasStock) ||
                      (countSelected &&
                        itemQuantity &&
                        itemQuantity > countSelected.availableStock)
                        ? 'disabled'
                        : ''
                    }`}
                    type='button'
                    onClick={addItemQuantity}
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
                  (countSelected && !countSelected.hasStock) ||
                  (countSelected &&
                    itemQuantity &&
                    itemQuantity > countSelected.availableStock)
                    ? 'disabled'
                    : ''
                }`}
                id='0'
                onClick={e => handleAddtoCartOnClick(e)}
              >
                ADD TO CART
              </button>
            </span>
            <span>
              <button
                className='btn btn-primary btn-md add-to-cart'
                id='1'
                onClick={e => handleAddtoWishListOnClick(e)}
              >
                ADD TO WISHLIST
              </button>
            </span>
          </div>
          <span className='sku-qty-error-msg'>{displayQtyErrorMsg()}</span>
        </div>
      </div>
    </>
  )
  return <>{displayWeights()}</>
}

export default SkuVariants
