/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useFormDataContext } from '../../context/formDataContext';
import ABForm from '../Form';
import { formSubmitData } from '../../helpers/utils';
import AlertMessage from '../../helpers/AlertMessage';

export default function RequestCatalog(props) {
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
    phone: 'phone',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    submitForm: 'requestCatalog',
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
      comments, ...payload
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
    
      <div className="col-md-offset-1">
        <div dangerouslySetInnerHTML={createMarkup(configValue)}></div>
        <div className="form-fields-container">
          <ABForm
            {...{ formData, submitData, handleClose }}
            formType="catalogForm"
          />
        </div>
      </div>
    </>
  );
}
