/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable arrow-parens */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
import React, { useState, useEffect } from 'react'
import { getCookie } from '@retisio/sf-api'
import { addToBagDetails, addToWishList } from '../../helpers/getPDPData'
import { useMiniCartDataContext } from '../../context/miniCartcontext'
import { useAppContext } from '../../context/appContext'

// skuObj = {
// id:''
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
//     hasPrice: false,
//     hasStock: false,
//     onSale: false,
//     outOfStock: false,
//     },
//    ],
//    addToCart: ()=>{},
//    addToWishList: ()=>{},
//    notifyMe: ()=>{}
//   },

function SkuDetailsOfSelectedWeight({
  selectedSku,
  handleShowOnSaleBadge,
  productId
}) {
  const [countSelected, setCountSelected] = useState()
  const [itemQuantity, setItemQuantity] = useState()
  const [disablePlusCounter, setDisablePlusCounter] = useState(false)
  const [disableMinusCounter, setDisableMinusCounter] = useState(false)
  const [disableAddToCart, setDisableAddToCart] = useState(false)
  //   const [disableCounter, setDisableCounter] = useState(false)
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext()
  const { setShow } = useAppContext()

  useEffect(() => {
    setCountSelected({ ...selectedSku.count[0] })
    if (!selectedSku.count[0].hasStock) {
      setDisableMinusCounter(true)
      setDisablePlusCounter(true)
      setDisableAddToCart(true)
      setItemQuantity(0)
    } else {
      setDisableMinusCounter(false)
      setDisablePlusCounter(false)
      setDisableAddToCart(false)
      setItemQuantity(1)
    }
    handleShowOnSaleBadge(selectedSku.count[0].onSale)
  }, [selectedSku])

  const handleSelected = skuCount => {
    handleShowOnSaleBadge(skuCount.onSale)
    setCountSelected(skuCount)
  }

  const addItemQuantity = qty => {
    const { availableStock } = countSelected
    if (itemQuantity < availableStock) {
      setItemQuantity(itemQuantity + 1)
    }
    if (itemQuantity + 1 >= availableStock) {
      setDisablePlusCounter(true)
    }
    setDisableMinusCounter(false)
    setDisableAddToCart(false)
  }

  const reduceItemQuantity = qty => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1)
    }
    if (itemQuantity - 1 <= 0) {
      setDisableMinusCounter(true)
      setDisableAddToCart(true)
    }
    setDisablePlusCounter(false)
  }

  const addToBagHandler = event => {
    event.preventDefault()
    const pdp = {
      items: [
        {
          variantId: countSelected.itemCode,
          productId,
          quantity: itemQuantity,
          productType: 'product'
        }
      ]
    }
    const result = addToBagDetails(pdp)
    console.log('addToCart...', result, pdp)
    result.then(data => {
      setMiniCartDetails({ ...miniCartDetails, itemAdded: true })
    })
  }

  const addToWishLisrHandler = e => {
    if (getCookie('lu')) {
      addToWishList({
        skuId: countSelected.itemCode,
        productId,
        quantity: '1'
      })
    } else {
      setShow(true)
    }
  }

  return (
    <>
      <div className='sukhead'> Count: </div>
      <div>
        <ul className='list-inline'>
          {selectedSku &&
            selectedSku.count.map(skuCount => {
              console.log('line106...skucount...', skuCount)
              if (!skuCount.hasStock) {
                // out of stock
                return (
                  <li className='list-inline-item me-2 mb-2'>
                    <div className='Count outstock'>
                      <span className='Countb'>{skuCount.pieces}</span>
                      <span className='outoftocklab'>Out of stock</span>
                    </div>
                    {countSelected && !countSelected.hasStock && (
                      <div className='notifytxt'>
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
                    {countSelected &&
                    countSelected.pieces === skuCount.pieces ? (
                      <span className='selected'>
                        <i className='icon fas fa-check'></i>
                      </span>
                    ) : (
                      ''
                    )}
                    <span className='Countb'>{skuCount.pieces}</span>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
      {/* {countSelected && !countSelected.hasStock && (
        <div className='notifytxt'>
          <a href='#'>NOTIFY ME</a>
        </div>
      )} */}

      {/* Desktop view  */}

      <div className='itempanel'>
        <div className='itemtxt'>
          ITEM CODE: <span>{countSelected && countSelected.itemCode}</span>
        </div>

        <div className=''>
          {countSelected && countSelected.salePrice && (
            <span className='priceb'>{countSelected.salePrice} </span>
          )}
          {countSelected && countSelected.listPrice && (
            <span className={countSelected.salePrice ? 'pricebstik' : 'priceb'}>
              {countSelected.listPrice}
            </span>
          )}
          {countSelected && countSelected.salePrice && (
            <span className='pricenred'>
              You save: {countSelected.listPrice - countSelected.salePrice}
            </span>
          )}
        </div>

        {/* counter section */}
        <div className=''>
          <div className=''>
            <span className='panel1'>
              <div className='input-group'>
                <span className='input-group-btn'>
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disableMinusCounter ? 'disabled' : ''
                    }`}
                    type='button'
                    onClick={reduceItemQuantity}
                  >
                    <i className='fa fa-minus' aria-hidden='true'></i>
                  </button>
                </span>
                <span className=''>
                  <button className='sku-item-qty disabled'>
                    {itemQuantity}
                  </button>
                </span>
                <span className='input-group-btn'>
                  <button
                    className={`btn js-counter__btn rdrt ${
                      disablePlusCounter ? 'disabled' : ''
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
                  disableAddToCart ? 'disabled' : ''
                }`}
                id='0'
                onClick={e => addToBagHandler(e)}
              >
                ADD TO CART
              </button>
            </span>
            <span>
              <button
                className='btn btn-primary btn-md add-to-cart'
                id='1'
                onClick={e => addToWishLisrHandler(e)}
              >
                ADD TO WISHLIST
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* Desktop view  close */}
    </>
  )
}

export default SkuDetailsOfSelectedWeight
