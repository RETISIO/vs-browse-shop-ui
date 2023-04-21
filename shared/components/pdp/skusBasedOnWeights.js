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
import SkuDetailsOfSelectedWeight from './skuDetailsOfSelectedWeight'

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

function SkusBasedOnWeights({
  skusObj,
  skusWeights,
  skuWeightSelected,
  setSkuWeightSelected,
  defaultSkuId,
  handleShowOnSaleBadge, //   handleSkuSelected
  productId
}) {
  const [skuSelected, setSkuSelected] = useState()

  useEffect(() => {
    if (skusObj) {
      //   const firstKey = defaultSkuId ? '' : Object.keys(skusObj)[0]
      //   const skuObj = skusObj[firstKey]
      //   setSkuSelected(skuObj)
      selectDefault()
    }
  }, [skusObj])

  const selectDefault = () => {
    let skuObj = ''
    for (const key in skusObj) {
      if (skusObj[key].id === defaultSkuId) {
        skuObj = skusObj[key]
        break
      } else {
        const firstKey = Object.keys(skusObj)[0]
        skuObj = skusObj[firstKey]
        break
      }
    }
    setSkuSelected(skuObj)
  }

  const handleSkuSelected = skuObj => {
    setSkuSelected(skuObj)
  }

  const formatThickness = str => {
    if (str[0] === '\\' && str[1] === '|') {
      return str.slice(3)
    }
    return str
  }

  const displaySkuDetails = () => (
    <>
      <div className='sukhead'> Weight: </div>
      <div>
        <ul className='list-inline'>
          {skusObj &&
            Object.keys(skusObj).map(key => (
              <li className='list-inline-item me-2 mb-2'>
                <div
                  className={
                    skuSelected && skuSelected.weight === skusObj[key].weight
                      ? 'tag-selected'
                      : 'tag'
                  }
                  onClick={() => handleSkuSelected(skusObj[key])}
                >
                  {/* {skuSelected && skuSelected.weight === skusObj[key].weight ? (
                    <span className='selected'>
                      <i className='icon fas fa-check'></i>
                    </span>
                  ) : (
                    ''
                  )} */}
                  <span
                    className={`${
                      skuSelected && skuSelected.weight === skusObj[key].weight
                        ? 'sku-selected'
                        : 'sku-not-selected'
                    }`}
                  >
                    <i className='icon fas fa-check'></i>
                  </span>
                  <span className='txttagb'>{skusObj[key].weight}</span>
                  <span className='txttagz'>
                    {formatThickness(skusObj[key].thickness)}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      {skuSelected && (
        <SkuDetailsOfSelectedWeight
          selectedSku={skuSelected}
          handleShowOnSaleBadge={handleShowOnSaleBadge}
          productId={productId}
        />
      )}
    </>
  )
  return <div className='sukproduct'>{displaySkuDetails()}</div>
}

export default SkusBasedOnWeights
