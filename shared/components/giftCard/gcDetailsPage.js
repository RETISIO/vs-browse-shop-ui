/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { validator } from '@retisio/sf-ui'
import { getCookie } from '@retisio/sf-api'
import { addToBagDetails } from '../../helpers/getPDPData'
import { useMiniCartDataContext } from '../../context/miniCartcontext'
import { requestContructor } from '../../helpers/api'
import { useAppContext } from '../../context/appContext'

export default function GcDetailsPage (props) {
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext()
  const { isLogged } = useAppContext()

  const giftCartData = props?.pdpData?.payLoad

  const gcSkus =
    giftCartData?.products[0]?.skus &&
    Object.values(giftCartData?.products[0]?.skus)
  const physicalGCskuArr = []
  const electronicGCskuArr = []
  const productId = giftCartData?.products[0]?.productId

  gcSkus.map(item => {
    if (item?.skuDetails?.additionalDetails?.giftCardType === 'Physical') {
      physicalGCskuArr.push(item)
    } else if (
      item?.skuDetails?.additionalDetails?.giftCardType === 'Electronic'
    ) {
      electronicGCskuArr.push(item)
    }
  })

  if (physicalGCskuArr.length > 0) {
    physicalGCskuArr.sort(
      (a, b) => a.skuId.replace(/[^\d.]/g, '') - b.skuId.replace(/[^\d.]/g, '')
    )
  }

  if (electronicGCskuArr.length > 0) {
    electronicGCskuArr.sort(
      (a, b) => a.skuId.replace(/[^\d.]/g, '') - b.skuId.replace(/[^\d.]/g, '')
    )
  }

  const isAvailableGC =
    electronicGCskuArr.length > 0 ? 'electronicGC' : 'physicalGC'
  const [selectedGC, setSelectedGC] = useState(isAvailableGC)

  const handleGCTypeClick = event => {
    const { value } = event.target
    setSelectedGC(value)
  }

  const renderSelectOptions = (item, i) => {
    const itemPrice =
      item?.skuDetails?.price?.salePrice?.price ||
      item?.skuDetails?.price?.listPrice?.price
    if (!itemPrice) {
      return ''
    }
    return (
      <option key={`key-${i}-${item.skuId}`} value={item.skuId}>
        {itemPrice}
      </option>
    )
  }

  const renderGCSelect = () => {
    const iteratorArr =
      selectedGC === 'electronicGC' ? electronicGCskuArr : physicalGCskuArr
    return (
      <div className='row'>
        <div className='col-sm-3'>
          <div className='form-group'>
          <label for="gc-select-box" className='GiftCrdAmt'></label>
            <select
              className='form-control formControl-select'
              id='gc-select-box'
            >
              {iteratorArr.map((item, i) => renderSelectOptions(item, i))}
            </select>
          </div>
        </div>
      </div>
    )
  }
  const initialValues = {
    recipientsName: '',
    recipientsEmail: '',
    message: ''
  }
  const [values, setValues] = useState(initialValues)
  const [formerrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const handleChange = event => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }
  const validate = valuesObj => {
    const errors = validator(valuesObj)
    setFormErrors(errors)
    if (Object.keys(errors).length === 0) {
      return true
    }
    return false
  }
  const handleBlur = () => {
    if (isSubmit) {
      validate({ ...values })
    }
  }
  const submitGCData = async () => {
    if (!isLogged && !getCookie('x-anyms-id')) {
      await requestContructor('getUUID')
    }
    const skuId = document.getElementById('gc-select-box')?.value
    let productType = 'giftcard'
    const gcData = {
      items: [
        {
          variantId: skuId,
          productId,
          quantity: 1
        }
      ]
    }
    if (selectedGC === 'electronicGC') {
      productType = 'egiftcard'
      gcData.items[0].recipientName = values.recipientsName
      gcData.items[0].recipientEmail = values.recipientsEmail
    }
    gcData.items[0].productType = productType
    if (values.message) {
      gcData.items[0].message = values.message
    }
    const result = addToBagDetails(gcData)
    result
      .then(res => {
        if (res.status === 200) {
          setMiniCartDetails({ ...miniCartDetails, itemAdded: true })
          props.handleSuccessMsg()
        } else if (res && res.status === 400) {
          const error =
            res.errors && Array.isArray(res.errors) ? res.errors[0].message : ''
          props.handleErrorMsg(error)
        }
      })
      .catch(error => {
        props.handleErrorMsg(error.message)
      })
  }
  const handleSubmit = event => {
    event.stopPropagation()
    if (selectedGC === 'electronicGC') {
      setIsSubmit(true)
      const validated = validate(values)
      if (validated) {
        submitGCData()
      }
    } else {
      submitGCData()
    }
  }
  return (
    <div className='col-md-7 col-sm-12'>
      <Form noValidate autoComplete='off'>
        <h1 className='page-title'>{giftCartData?.products[0]?.displayName}</h1>
        <p className='page-short-description'>
          {giftCartData?.products[0]?.description}
        </p>
        <div className='js-tabs'>
          <div className='js-tabs__tab'>
            <h3 data-bind="widgetLocaleText: 'giftCardAmount'">
              Select a Gift Card Amount
            </h3>
            {renderGCSelect()}
            {selectedGC === 'electronicGC' ? (
              <div className='row'>
                <div className='col-sm-7'>
                  <Form.Group>
                    <div className='form-group'>
                      <Form.Control
                        className='form-control formControl-input'
                        type='text'
                        required
                        maxLength='50'
                        placeholder='Recipients Name *'
                        id='recipientsName'
                        name='recipientsName'
                        value={values.recipientsName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!formerrors.recipientsName}
                      />
                      <Form.Label
                        className='formGroup-label'
                        htmlFor='recipientsName'
                      >
                        Recipients Name *
                      </Form.Label>
                      <Form.Control.Feedback
                        className='text-danger'
                        type='invalid'
                        role='alert'
                      >
                        {formerrors.recipientsName}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                  <Form.Group>
                    <div className='form-group'>
                      <Form.Control
                        className='form-control formControl-input'
                        type='email'
                        maxLength='128'
                        placeholder='Recipients Email Address *'
                        id='recipientsEmail'
                        name='recipientsEmail'
                        value={values.recipientsEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!formerrors.recipientsEmail}
                      />
                      <Form.Label
                        className='formGroup-label'
                        htmlFor='recipientsEmail'
                      >
                        Recipients Email Address *
                      </Form.Label>
                      <Form.Control.Feedback
                        className='text-danger'
                        type='invalid'
                        role='alert'
                      >
                        {formerrors.recipientsEmail}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <Form.Group>
            <div className='form-group'>
              <Form.Control
                as="textarea"
                className='form-control formControl-input noresize'
                rows='4'
                maxLength='250'
                spellCheck='true'
                placeholder='Message'
                id='message'
                name='message'
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Form.Label className='formGroup-label' htmlFor='message'>
                Message
              </Form.Label>
              <Form.Control.Feedback
                className='text-danger'
                type='invalid'
                role='alert'
              >
                {formerrors.message}
              </Form.Control.Feedback>
            </div>
          </Form.Group>
        </div>
        <button
          className='btn btn-secondary btn-md btn-action'
          type='button'
          onClick={e => handleSubmit(e)}
        >
          ADD TO CART
        </button>
      </Form>
    </div>
  )
}
