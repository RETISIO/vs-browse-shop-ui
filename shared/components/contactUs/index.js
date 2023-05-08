/* eslint-disable import/named */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import { useFormDataContext } from '../../context/formDataContext'
import ABForm from '../Form'
import { formSubmitData } from '../../helpers/utils'
import AlertMessage from '../../helpers/AlertMessage'
import { requestContructor } from '../../helpers/api'
import { useAppContext } from '../../context/appContext'

export default function ContactUs (props) {
  // Form context values
  const { values, setValues, clearForm } = useFormDataContext()

  const [show, setShow] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [codeType, setCodeType] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const [refresh, setRefresh] = useState(false)
  const { setLoader } = useAppContext()

  const formData = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    comments: 'comments',
    orderNumber: 'orderNumber',
    phone: 'phone',
    submitForm: 'addressSubmit',
    isTooltipVisible: false
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleAlertClose = val => setIsAlert(val)

  useEffect(() => {
    if (refresh) {
      // displayForm()
      setRefresh(false)
    }
  }, [refresh])

  // Method to handle the payload for Contact Us Form
  const handlePayloadData = () => {
    const body = { ...values }
    // eslint-disable-next-line no-unused-vars
    const { ...payload } = body
    return payload
  }

  const submitData = async () => {
    const { email, orderNumber, comments, phone, firstName, lastName } =
      handlePayloadData()
    const finalData = {
      firstName,
      lastName,
      emailAddress: email,
      phoneNumber: phone,
      orderId: orderNumber,
      comment: comments
    }

    const data = {
      templateId: 'contactUs',
      data: finalData
    }
    setLoader(true)
    requestContructor('sendRequestFormEmail', '', {
      method: 'POST',
      data
    })
      .then(res => {
        if (res.status === 202) {
          setCodeType('success')
          setAlertMsg(
            'Thank you for contacting us. A representative will get back to you shortly.'
          )
          setValues('')
          clearForm()
          setRefresh(true)
        } else if (res.status === 400) {
          setCodeType('err')
          setAlertMsg(res.errors[0].message)
        }
        setIsAlert(true)
        setLoader(false)
      })
      .catch(error => {
        setCodeType('err')
        setAlertMsg(error)
        setIsAlert(true)
        setLoader(false)
      })
  }

  // To display Content on top of Form
  const { configValue } = props
  const createMarkup = data => ({
    __html: Object.values(JSON.parse(data))[0]
  })

  const displayForm = () => {
    if (!refresh) {
      return (
        <ABForm
          {...{ formData, submitData, handleClose }}
          formType='contactForm'
          // formRef
        />
      )
    }
  }
  return (
    <div className='col-md-offset-2'>
      {isAlert && (
        <AlertMessage
          handleClose={handleAlertClose}
          type={codeType}
          message={alertMsg}
        />
      )}
      <span id='wi400014-rich-text-30005'>
        <div className='cc-rich-text' style={{ padding: '0px' }}>
          <div dangerouslySetInnerHTML={createMarkup(configValue)}></div>
        </div>
      </span>
      <div className='form-fields-container'>{displayForm()}</div>
    </div>
  )
}
