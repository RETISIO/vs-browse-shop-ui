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

function SkuDetailsOfSelectedWeight({ selectedSku, handleShowOnSaleBadge }) {
  const [countSelected, setCountSelected] = useState()

  useEffect(() => {
    setCountSelected({ ...selectedSku.count[0] })
    handleShowOnSaleBadge(selectedSku.count[0].onSale)
  }, [selectedSku])

  console.log('selectedSku,countSelected....', selectedSku, countSelected)

  const handleSelected = skuCount => {
    console.log('handleSelected...skuCount.onSale...', skuCount.onSale)
    handleShowOnSaleBadge(skuCount.onSale)
    setCountSelected(skuCount)
  }

  return (
    <>
      <div className='sukhead'> Count: </div>
      <div>
        <ul className='list-inline'>
          {selectedSku &&
            selectedSku.count.map(skuCount => {
              if (!skuCount.hasStock) {
                // out of stock
                return (
                  <li className='list-inline-item me-2 mb-2'>
                    <div className='Count outstock'>
                      <span className='Countb'>{skuCount.pieces}</span>
                      <span className='outoftocklab'>Out of stock</span>
                    </div>
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
                    <span className='Countb'>{skuCount.pieces}</span>
                  </div>
                </li>
              )
            })}
        </ul>
      </div>
      {countSelected && !countSelected.hasStock && (
        <div className='notifytxt'>
          <a href='#'>NOTIFY ME</a>
        </div>
      )}

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

        <div className=''>
          <div className=''>
            <span className='panel1'>
              <div className='input-group'>
                <span className='input-group-btn'>
                  <button className='btn js-counter__btn rd' type='button'>
                    <i className='fa fa-minus' aria-hidden='true'></i>
                  </button>
                </span>
                {/* <input
                  data-bind='textInput: $data.quantity, event: { input: $parent.handleQuantityInputEvent }'
                  className='form-control js-counter__input brnone'
                  type='number'
                  min='0'
                  max='999'
                  maxLength='3'
                  onKeyUp="if (event.srcElement.value.charAt(0) == '0') { event.srcElement.value = event.srcElement.value.slice(1); }"
                /> */}
                <span className='input-group-btn'>
                  <button className='btn js-counter__btn rdrt' type='button'>
                    <i className='fa fa-plus' aria-hidden='true'></i>
                  </button>
                </span>
              </div>
            </span>
            <span className='sp-20'>
              <button className='btn btn-secondary btn-md add-to-cart' id='0'>
                ADD TO CART
              </button>
            </span>
            <span>
              <button className='btn btn-primary btn-md add-to-cart' id='1'>
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
