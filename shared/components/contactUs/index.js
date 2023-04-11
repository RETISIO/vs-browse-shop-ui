/* eslint-disable import/named */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useFormDataContext } from '../../context/formDataContext';
import ABForm from '../Form';
import { formSubmitData } from '../../helpers/utils';
import AlertMessage from '../../helpers/AlertMessage';
import { requestContructor } from '../../helpers/api';
import { useAppContext } from '../../context/appContext';
export default function ContactUs(props) {
  // Form context values
  const { values, setValues, clearForm } = useFormDataContext();

  const [show, setShow] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [codeType, setCodeType] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const { setLoader } = useAppContext();

  const formData = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    comments: 'comments',
    orderNumber: 'orderNumber',
    phone: 'phone',
    submitForm: 'addressSubmit',
    isTooltipVisible: false,
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertClose = (val) => setIsAlert(val);

  // Method to handle the payload for Contact Us Form
  const handlePayloadData = () => {
    const body = { ...values };
    // eslint-disable-next-line no-unused-vars
    const {
      address1, address2, country, city, state, postalCode, phone,
      ...payload
    } = body;
    return payload;
  };

  const submitData = async(formRef) => {
    const { email, phone, ...payload } = handlePayloadData();
    payload.emailAddress = email;
    payload.phoneNumber = phone;
    // console.log('bodyyyy........', payload)
    const data = {
      templateId: 'catalogRequest',
      data: payload,
    };
    setLoader(true);
    requestContructor('sendRequestFormEmail', '', {
      method: 'POST',
      data,
    })
      .then((res) => {
        if (res.status === 202) {
          setCodeType('success');
          setAlertMsg(res.statusMessage);
        } else if (res.status === 400) {
          setCodeType('err');
          setAlertMsg(res.errors[0].message);
        }
        setIsAlert(true);
        setLoader(false);
        formRef.current.reset();
      })
      .catch((error) => {
        setCodeType('err');
        setAlertMsg(error);
        setIsAlert(true);
        setLoader(false);
      });
  };

  // To display Content on top of Form
  const { configValue } = props;
  const createMarkup = (data) => ({
    __html: Object.values(JSON.parse(data))[0],
  });

  return (
    <div className="col-md-offset-2">
      {isAlert && (
        <AlertMessage
          handleClose={handleAlertClose}
          type={codeType}
          message={alertMsg}
        />
      )}
      <span id="wi400014-rich-text-30005">
        <div className="cc-rich-text" style={{ padding: '0px' }}>
          <div dangerouslySetInnerHTML={createMarkup(configValue)}></div>
        </div>
      </span>
      <div className="form-fields-container">
        <ABForm
          {...{ formData, submitData, handleClose }}
          formType="contactForm"
          formRef
        />
      </div>
    </div>
  );
}
