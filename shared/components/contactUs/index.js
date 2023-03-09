/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useFormDataContext } from '../../context/formDataContext';
import ABForm from '../Form';
import { formSubmitData } from '../../helpers/utils';
import AlertMessage from '../../helpers/AlertMessage';

export default function ContactUs(props) {
  // Form context values
  const { values, setValues, clearForm } = useFormDataContext();

  const [show, setShow] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  const [codeType, setCodeType] = useState('');
  const [alertMsg, setAlertMsg] = useState('');

  const formData = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    comments: 'comments',
    submitForm: 'addressSubmit',
    isTooltipVisible: false,
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAlertClose = (val) => setIsAlert(val);

  const handleSuccess = async(addressData) => {
    // updateSuggestedAddresses(addressData);
    // setModalType("verifyAddress");
    // await addNewAddress()
  };

  //   const handleAddAddressSuccess = async () => {
  //     await getAddresses();
  //     handleClose();
  //     clearForm();
  //     setModalType("");
  //     handleAlert(true, "success", "Address book entry added successfully.");
  //   }

  const handleErrorMsg = () => {
    handleClose();
  };

  // Method to handle the payload for Contact Us Form
  const handlePayloadData = () => {
    const body = { ...values };
    // eslint-disable-next-line no-unused-vars
    const {
      address1, address2, country, city, state, postalCode, phone, companyName,
      defaultBilling, defaultShipping, ...payload
    } = body;
    return payload;
  };

  const submitData = async() => {
    const payloadData = handlePayloadData();
    console.log('bodyyyy', payloadData);
    const res = {};
    // const res = await formSubmitData(
    //   payloadData,
    //   "accountVerifyAddress",
    //   "POST",
    //   handleSuccess,
    //   handleErrorMsg
    // );
    return res;
  };

  // To display Content on top of Form
  const { configValue } = props;
  const createMarkup = (data) => ({
    __html: Object.values(JSON.parse(data))[0],
  });

  return (
    <>
      {isAlert && (
        <AlertMessage
          handleClose={handleAlertClose}
          type={codeType}
          message={alertMsg}
        />
      )}
    
      <div className="col-md-offset-2">
        <span id="wi400014-rich-text-30005">
          <div className="cc-rich-text" style={{ padding: '0px' }}>
            <div dangerouslySetInnerHTML={createMarkup(configValue)}></div>
          </div>
        </span>
        <div className="form-fields-container">
          <ABForm
            {...{ formData, submitData, handleClose }}
            formType="contactForm"
          />
        </div>
      </div>
    </>
  );
}
