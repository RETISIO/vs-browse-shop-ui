/* eslint-disable linebreak-style */
/* eslint-disable react/no-danger */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable import/named */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-undef */
/* eslint-disable jsx-quotes */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
import React, { useState, useEffect } from 'react'
import { useFormDataContext } from '../../context/formDataContext'
import ABForm from '../Form'
import { formSubmitData } from '../../helpers/utils'
import AlertMessage from '../../helpers/AlertMessage'
import { requestContructor } from '../../helpers/api'

export default function RequestCatalog(props) {
  // Form context values
  const { values, setValues, clearForm } = useFormDataContext()

  const formData = {
    firstName: 'firstName',
    lastName: 'lastName',
    emailAddress: 'email',
    phoneNumber: 'phone',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    submitForm: 'requestCatalog',
    isTooltipVisible: false
  }

  const [show, setShow] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [codeType, setCodeType] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleAlertClose = val => setIsAlert(val)

  const handleSuccess = async addressData => {
    // updateSuggestedAddresses(addressData);
    // setModalType("verifyAddress");
    // await addNewAddress()
  }

  //   const handleAddAddressSuccess = async () => {
  //     await getAddresses();
  //     handleClose();
  //     clearForm();
  //     setModalType("");
  //     handleAlert(true, "success", "Address book entry added successfully.");
  //   }

  const handleErrorMsg = () => {
    handleClose()
  }

  // Method to handle the payload for Contact Us Form
  const handlePayloadData = () => {
    const body = { ...values }
    // eslint-disable-next-line no-unused-vars
    const { comments, ...payload } = body
    // trim fields
    for (const key in payload) {
      payload[key] = payload[key].trim()
    }
    return payload
  }

  // catalog request form submit
  const submitData = async () => {
    const { email, phone, ...payload } = handlePayloadData()
    payload.emailAddress = email
    payload.phoneNumber = phone
    // console.log('bodyyyy........', payload)
    const data = {
      templateId: 'catalogRequest',
      data: payload
    }

    requestContructor('sendRequestFormEmail', '', {
      method: 'POST',
      data
    })
      .then(res => {
        if (res.status === 202) {
          setErrorMsg('')
          setSuccessMsg(res.statusMessage)
          // setClearFormData(true)
          setValues('')
          clearForm()
        } else if (res.status === 400) {
          setSuccessMsg('')
          setErrorMsg(res.errors[0].message)
        }
      })
      .catch(error => {
        setSuccessMsg('')
        setErrorMsg(error)
      })
  }

  // To display Content on top of Form
  const { configValue } = props
  const createMarkup = data => ({
    __html: Object.values(JSON.parse(data))[0]
  })

  const handleCloseBtn = (errMsg, sucsMsg) => (
    <button
      className='close'
      type='button'
      aria-label='Close'
      style={{
        opacity: '1.2',
        fontSize: '31px',
        lineHeight: '0px',
        marginTop: '10px'
      }}
      onClick={() => {
        if (errMsg) {
          setErrorMsg('')
        }
        if (sucsMsg) {
          setSuccessMsg('')
        }
      }}
    >
      <span aria-hidden='true'>×</span>
    </button>
  )

  return (
    <>
      {isAlert && (
        <AlertMessage
          handleClose={handleAlertClose}
          type={codeType}
          message={alertMsg}
        />
      )}

      <div className='col-md-offset-1'>
        <div dangerouslySetInnerHTML={createMarkup(configValue)}></div>
        {errorMsg && (
          <div
            className='alert alert-dismissible hidden-print alert-danger undefined'
            aria-describedby='loginModalErrors-desc'
            tabIndex='0'
            role='alert'
          >
            {handleCloseBtn(errorMsg, undefined)}
            <b id='loginModalErrors-desc'>{errorMsg}</b>
          </div>
        )}
        {successMsg && (
          <div
            className='alert alert-dismissible hidden-print alert-success undefined header-alert-top'
            role='alert'
          >
            {handleCloseBtn(undefined, successMsg)}
            <strong>{successMsg}</strong>
          </div>
        )}
        <div className='form-fields-container'>
          <ABForm
            {...{ formData, submitData, handleClose }}
            formType='catalogForm'
          />
        </div>
      </div>
    </>
  )
}
