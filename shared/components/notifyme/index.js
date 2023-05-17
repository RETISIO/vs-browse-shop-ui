/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAppContext } from '../../context/appContext';

function NotifyMe({
  show, handleClose, productData, skuData, handleSave,
}) {
  const { state } = useAppContext();
  const [email, setEmail] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    setEmail(state?.userData?.userDetails?.account[0]?.accountProfile?.email);
  }, [state]);

  const getSKUName = (id) => {
    for (const key in productData?.skus) {
      if(key === id) {
        return productData?.skus[key]?.displayName;
      }
    }

    return '';
  };

  const handleChange = (val) => {
    setEmail(val);
  };

  const handleSubmit = (data) => {
    // eslint-disable-next-line max-len
    const pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if((email && email?.length === 0) || !email) {
      setError('Please enter your email address.');
    } else if(!pattern.test(email)) {
      setError('Please enter a valid format for your email address.');
    } else {
      handleSave(data);
      setError('');
    }
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        dialogClassName="notifyme-popup"
      >
        <Modal.Header>
          <Modal.Title>Request Back in Stock Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="message-panel">
            <p className="message-text">Please Notify Me by Email When Available</p>
            <button className="close-btn" onClick={() => handleClose()}><i className="fa fa-times-circle"></i></button>
          </div>
          <div className="desc-email-section">
            <p className="description">
              {getSKUName(skuData?.itemCode)}
            </p>
            <div className="form">
              <input
                id="emailaddress"
                className="form-input"
                type="text"
                placeholder="Email Address *"
                maxLength={128}
                onChange={(e) => handleChange(e.target.value)}
                value={email || ''}
              />
              <label
                htmlFor="emailaddress"
                className={`form-label ${email?.length > 0 ? 'show-label' : ''}`}
              >
                Email Address *
              </label>
              {error && error !== '' && <span className="text-danger">{error}</span>}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <hr></hr>
          <Button className="cancel-btn" variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="save-btn"
            variant="secondary"
            onClick={() => handleSubmit({ sku: skuData?.itemCode, email })}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NotifyMe;
