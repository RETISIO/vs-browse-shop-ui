/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable semi */
/* eslint-disable function-paren-newline */
/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trans, withTranslation } from 'react-i18next'
import { useFormDataContext } from '../../context/formDataContext'
import StateOptions from './StateOptions.json'

function AddressForm({
  formData,
  values,
  handleChange,
  handleBlur,
  formerrors,
  handleClose
}) {
  const { clearForm } = useFormDataContext()
  const [showAddress, setShowAddress] = useState(!!values?.address2)

  useEffect(() => {
    const elem = window.document.getElementById('country-label')
    if (elem) {
      elem.style.marginTop = '-15px'
      elem.style.opacity = 1
      elem.style.zIndex = 100
    }
  }, [])

  return (
    <>
      <div className='row'>
        <Form.Group className='col-sm-6'>
          <div className='form-group'>
            <Form.Control
              id={formData?.address1}
              required
              type='text'
              tabIndex={0}
              aria-describedby="AddressError"
              placeholder='Address*'
              className='formControl-input'
              name='address1'
              value={values?.address1}
              onChange={handleChange}
              isInvalid={!!formerrors?.address1}
              onBlur={handleBlur}
            />
            <Form.Label className='formGroup-label'>
              <Trans> Address*</Trans>
            </Form.Label>
            <Form.Control.Feedback
              className='text-danger'
              type='invalid'
              role='alert'
              id='AddressError'
            >
              {formerrors?.address1}
            </Form.Control.Feedback>
          </div>
          {showAddress && (
            <div className='form-group'>
              <Form.Control
                id={formData?.address2}
                type='text'
                placeholder='Address'
                className='formControl-input'
                name='address2'
                value={values?.address2}
                onChange={handleChange}
                isInvalid={!!formerrors?.address2}
                onBlur={handleBlur}
              />
              <Form.Label className='formGroup-label'>
                <Trans> Address</Trans>
              </Form.Label>
            </div>
          )}
        </Form.Group>

        {!showAddress && (
          <Form.Group className='col-sm-6'>
            <a
              className='add-address-line'
              onClick={() => setShowAddress(true)}
            >
              <i className='icon fas fa-plus-circle'></i>
              Address Line 2
            </a>
          </Form.Group>
        )}
      </div>

      <div className='row'>
        <Form.Group className='col-sm-6'>
          <div className='form-group'>
            <Form.Control
              id={formData?.city}
              required
              type='text'
              placeholder='City*'
              className='formControl-input'
              name='city'
              tabIndex={0}
              aria-describedby="CityError"
              value={values?.city}
              onChange={handleChange}
              isInvalid={!!formerrors?.city}
              onBlur={handleBlur}
            />
            <Form.Label className='formGroup-label'>
              <Trans> City*</Trans>
            </Form.Label>
            <Form.Control.Feedback
              className='text-danger'
              type='invalid'
              role='alert'
              id='CityError'
            >
              {formerrors?.city}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group className='col-sm-3 col-xs-6'>
          <div className='form-group'>
            <Form.Select
              id={formData?.state}
              required
              type='text'
              tabIndex={0}
              aria-describedby="StateError"
              placeholder='State*'
              name='state'
              value={values?.state}
              onChange={handleChange}
              isInvalid={!!formerrors?.state}
              onBlur={handleBlur}
            >
              {StateOptions.map((state, i) =>
                i === 0 ? (
                  <option key={i}>State*</option>
                ) : (
                  <option value={state?.value} key={i}>
                    {state?.label}
                  </option>
                )
              )}
            </Form.Select>
            <Form.Label className='formGroup-label formControl-input'>
              <Trans> State*</Trans>
            </Form.Label>
            <Form.Control.Feedback
              className='text-danger'
              type='invalid'
              role='alert'
              id='StateError'
            >
              {formerrors?.state}
            </Form.Control.Feedback>
          </div>
        </Form.Group>

        <Form.Group className='col-sm-3 col-xs-6'>
          <div className='form-group'>
            <Form.Control
              id={formData?.postalCode}
              required
              type='text'
              tabIndex={0}
              aria-describedby="PostalCodeError"
              placeholder='Zip Code*'
              className='formControl-input'
              name='postalCode'
              value={values?.postalCode}
              onChange={handleChange}
              isInvalid={!!formerrors.postalCode}
              onBlur={handleBlur}
            />
            <Form.Label className='formGroup-label'>
              <Trans>Zip Code*</Trans>
            </Form.Label>
            <Form.Control.Feedback
              className='text-danger'
              type='invalid'
              role='alert'
              id='PostalCodeError'
            >
              {formerrors?.postalCode}
            </Form.Control.Feedback>
          </div>
        </Form.Group>
      </div>

      <div className='row'>
        <Form.Group className='col-sm-6'>
          <div className='form-group'>
            <Form.Control
              id={formData?.country}
              type='text'
              tabIndex={0}
              disabled
              placeholder='Country'
              className='formControl-input'
              name='country'
              value={values?.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Form.Label className='formGroup-label' id='country-label'>
              <Trans>Country*</Trans>
            </Form.Label>
          </div>
        </Form.Group>
      </div>
    </>
  )
}

export default withTranslation()(AddressForm)
