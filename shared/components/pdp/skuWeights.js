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
import React from 'react'

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

function SKUWeights({
  productId,
  handleWeightSelected,
  skusData,
  weightSelected
}) {
  console.log('from SKUWeights.....skusData..', skusData)

  const handleSkuSelected = skuObj => {
    console.log('from handler......skuObj...', skuObj)
    handleWeightSelected(skuObj)
  }

  const formatThickness = str => {
    if (str && str[0] === '\\' && str[1] === '|') {
      return str.slice(3)
    }
    return str
  }

  const displayWeights = () => {
    console.log('from displayWeights.....skusData,...', skusData)
    return (
      <>
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
      </>
    )
  }
  //   return <div className='sukproduct'>{displayWeights()}</div>
  return <>{displayWeights()}</>
}

export default SKUWeights
