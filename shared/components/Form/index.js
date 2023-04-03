/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable operator-linebreak */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Trans, withTranslation } from 'react-i18next'
import { validator } from '@retisio/sf-ui'
import { useFormDataContext } from '../../context/formDataContext'
import AddressForm from '../requestCatalog/AddressForm'

function ABForm({ formData, formType, data, submitData, handleClose }) {
  const { values, setValues } = useFormDataContext()
  const [formerrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = event => {
    const { name, value, checked, type } = event.target
    let obj = { ...values }
    if (name === 'postalCode') {
      if (value.length === 6 && !value.includes('-')) {
        obj[name] = `${value.slice(0, 5)}-${value[value.length - 1]}`
      } else if (value.length <= 10) {
        obj[name] = value
      }
    } else if (name === 'phone') {
      let val = value
      if (value.length > 12) {
        val = value.slice(0, 12)
      }
      if (value.length > 10 && value.length <= 12) {
        if (val.charAt(0) !== '(') {
          val = `(${value.slice(0, 3)}${value.slice(3, value.length)}`
        }
        if (val.charAt(4) !== ')') {
          if (value.charAt(0) === '(') {
            val = `${value.slice(0, 4)})${value.slice(4, value.length)}`
          } else {
            val = `(${value.slice(0, 3)})${value.slice(3, value.length)}`
          }
        }
        obj[name] = val.slice(0, 12)
      } else {
        obj[name] = val
      }
    } else {
      obj = {
        ...values,
        [name]: type === 'checkbox' ? checked : value
      }
    }
    setValues(obj)
  }

  const validate = values => {
    let errors = {}
    errors = validator(values, formType, [], [])
    console.log('from validate.....errors...', errors)
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

  const handleSubmit = event => {
    event.preventDefault()
    setIsSubmit(true)
    const validated = validate(values)
    if (validated) {
      submitData(values)
    }
  }

  return (
    <>
      {formType === 'registrationForm' && (
        <p className='required-fields'>
          <Trans>* Required Fields</Trans>
        </p>
      )}

      <Form noValidate onSubmit={handleSubmit} autoComplete='off'>
        <div
          className={`form-fields-container ${
            formType !== 'registrationForm' ? 'mt-0' : ''
          }`}
        >
          {formType === 'contactForm' && (
            <>
              <Form.Group>
                <div className='form-group'>
                  <Form.Control
                    id={formData?.firstName}
                    required
                    type='text'
                    placeholder={`First Name ${
                      formType !== 'accountInfoForm' ? '*' : ''
                    }`}
                    className='formControl-input'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!formerrors.firstName}
                    maxLength='40'
                    onBlur={handleBlur}
                  />
                  <Form.Label className='formGroup-label'>
                    <Trans>
                      {' '}
                      First Name {formType !== 'accountInfoForm'
                        ? '*'
                        : ''}{' '}
                    </Trans>
                  </Form.Label>
                  <Form.Control.Feedback
                    className='text-danger'
                    type='invalid'
                    role='alert'
                  >
                    {formerrors.firstName}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group>
                <div className='form-group'>
                  <Form.Control
                    id={formData?.lastName}
                    required
                    type='text'
                    placeholder={`Last Name ${
                      formType !== 'accountInfoForm' ? '*' : ''
                    }`}
                    className='formControl-input'
                    name='lastName'
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!formerrors.lastName}
                    maxLength='40'
                    onBlur={handleBlur}
                  />
                  <Form.Label className='formGroup-label'>
                    <Trans>
                      Last Name {formType !== 'accountInfoForm' ? '*' : ''}
                    </Trans>
                  </Form.Label>
                  <Form.Control.Feedback
                    className='text-danger'
                    type='invalid'
                    role='alert'
                  >
                    {formerrors.lastName}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group>
                <div className='form-group'>
                  <Form.Control
                    id={formData?.email}
                    className='formControl-input'
                    type='email'
                    maxLength='128'
                    required
                    placeholder='Email Address *'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!formerrors.email}
                    onBlur={handleBlur}
                  />
                  <Form.Label className='formGroup-label'>
                    <Trans>Email Address *</Trans>
                  </Form.Label>
                  <Form.Control.Feedback
                    className='text-danger'
                    type='invalid'
                    role='alert'
                  >
                    {formerrors.email}
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
              <Form.Group>
                <div className='form-group'>
                  <Form.Control
                    id={formData?.email}
                    className='formControl-input'
                    as='textarea'
                    rows='5'
                    maxLength='1000'
                    placeholder='Enter your question/comment here'
                    name='comments'
                    value={values.comments}
                    onChange={handleChange}
                    isInvalid={!!formerrors.comments}
                    onBlur={handleBlur}
                  />
                  <Form.Label className='formGroup-label'>
                    <Trans>Comments</Trans>
                  </Form.Label>
                </div>
              </Form.Group>
            </>
          )}

          {formType === 'catalogForm' && (
            <>
              <div className='row'>
                <Form.Group className='col-sm-6'>
                  <div className='form-group'>
                    <Form.Control
                      id={formData?.firstName}
                      required
                      type='text'
                      placeholder={`First Name ${
                        formType !== 'accountInfoForm' ? '*' : ''
                      }`}
                      className='formControl-input'
                      name='firstName'
                      value={values.firstName}
                      onChange={handleChange}
                      isInvalid={!!formerrors.firstName}
                      maxLength='40'
                      onBlur={handleBlur}
                    />
                    <Form.Label className='formGroup-label'>
                      <Trans>
                        {' '}
                        First Name {formType !== 'accountInfoForm'
                          ? '*'
                          : ''}{' '}
                      </Trans>
                    </Form.Label>
                    <Form.Control.Feedback
                      className='text-danger'
                      type='invalid'
                      role='alert'
                    >
                      {formerrors.firstName}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
                <Form.Group className='col-sm-6'>
                  <div className='form-group'>
                    <Form.Control
                      id={formData?.lastName}
                      required
                      type='text'
                      placeholder={`Last Name ${
                        formType !== 'accountInfoForm' ? '*' : ''
                      }`}
                      className='formControl-input'
                      name='lastName'
                      value={values.lastName}
                      onChange={handleChange}
                      isInvalid={!!formerrors.lastName}
                      maxLength='40'
                      onBlur={handleBlur}
                    />
                    <Form.Label className='formGroup-label'>
                      <Trans>
                        Last Name {formType !== 'accountInfoForm' ? '*' : ''}
                      </Trans>
                    </Form.Label>
                    <Form.Control.Feedback
                      className='text-danger'
                      type='invalid'
                      role='alert'
                    >
                      {formerrors.lastName}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </div>
              <div className='row'>
                <Form.Group className='col-sm-6'>
                  <div className='form-group'>
                    <Form.Control
                      id={formData?.email}
                      className='formControl-input'
                      type='email'
                      maxLength='128'
                      placeholder='Email Address'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!formerrors.email}
                      onBlur={handleBlur}
                    />
                    <Form.Label className='formGroup-label'>
                      <Trans>Email Address</Trans>
                    </Form.Label>
                    <Form.Control.Feedback
                      className='text-danger'
                      type='invalid'
                      role='alert'
                    >
                      {formerrors.email}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </div>
              <div className='row'>
                <Form.Group className='col-sm-6'>
                  <div className='form-group'>
                    <Form.Control
                      id={formData?.phone}
                      type='text'
                      placeholder='Phone'
                      className='formControl-input'
                      name='phone'
                      value={values?.phone}
                      onChange={handleChange}
                      isInvalid={!!formerrors?.phone}
                      onBlur={handleBlur}
                    />
                    <Form.Label className='formGroup-label'>
                      <Trans> Phone</Trans>
                    </Form.Label>
                    <Form.Control.Feedback
                      className='text-danger'
                      type='invalid'
                      role='alert'
                    >
                      {formerrors.phone}
                    </Form.Control.Feedback>
                  </div>
                </Form.Group>
              </div>
              <AddressForm
                {...{
                  formData,
                  values,
                  handleBlur,
                  handleChange,
                  formerrors,
                  handleClose
                }}
              />{' '}
            </>
          )}
        </div>

        {(formType === 'contactForm' || formType === 'catalogForm') && (
          <div className='page-actions d-flex justify-content-end'>
            <button
              id={formData?.submitForm}
              className='btn btn-action btn-action-md btn-action-primary'
              type='submit'
            >
              <Trans>Submit....</Trans>
            </button>
          </div>
        )}
      </Form>
    </>
  )
}
export default withTranslation()(ABForm)
