import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { validator } from '@retisio/sf-ui';
import { addToBagDetails } from '../../helpers/getPDPData';
import { useMiniCartDataContext } from '../../context/miniCartcontext';

export default function GcDetailsPage(props) {
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext();
  const giftCartData = props?.pdpData?.payLoad;
  const gcSkus = giftCartData?.products[0]?.skus && Object.values(giftCartData?.products[0]?.skus);
  const physicalGCskuArr = [];
  const electronicGCskuArr = [];
  const productId = giftCartData?.products[0]?.productId;
  //   const gcSkus = giftCartData?.products[0]?.skus;
  //   for (const property in gcSkus) {
  //     // console.log(`${property}: ${gcSkus[property].skuDetails?.additionalDetails?.giftCardType}`);
  //     const giftCardType = gcSkus[property]?.skuDetails?.additionalDetails?.giftCardType;
  //     if (giftCardType === 'Physical') {
  //       physicalGCskuArr.push(gcSkus[property]);
  //     } else if (giftCardType === 'Electronic') {
  //       electronicGCskuArr.push(gcSkus[property]);
  //     }
  //   }
  gcSkus.map((item) => {
    if (item?.skuDetails?.additionalDetails?.giftCardType === 'Physical') {
      physicalGCskuArr.push(item);
    } else if (item?.skuDetails?.additionalDetails?.giftCardType === 'Electronic') {
      electronicGCskuArr.push(item);
    }
  });
  if (physicalGCskuArr.length > 0) {
    physicalGCskuArr.sort((a, b) => a.skuId.replace(/[^\d.]/g, '') - b.skuId.replace(/[^\d.]/g, ''));
  }
  if (electronicGCskuArr.length > 0) {
    electronicGCskuArr.sort((a, b) => a.skuId.replace(/[^\d.]/g, '') - b.skuId.replace(/[^\d.]/g, ''));
  }
  const isAvailableGC = electronicGCskuArr.length > 0 ? 'electronicGC' : 'physicalGC';
  const [selectedGC, setSelectedGC] = useState(isAvailableGC);
  const handleGCTypeClick = (event) => {
    const { value } = event.target;
    setSelectedGC(value);
  };
  const renderSelectOptions = (item, i) => {
    const itemPrice = item?.skuDetails?.price?.salePrice?.price || item?.skuDetails?.price?.listPrice?.price;
    return (
      <option key={`key-${i}-${item.skuId}`} value={item.skuId}>{itemPrice}</option>
    );
  };
  const renderGCSelect = () => {
    const iteratorArr = (selectedGC === 'electronicGC') ? electronicGCskuArr : physicalGCskuArr;
    return (
      <div className="row">
        <div className="col-sm-3">
          <div className="form-group">
            <select className="form-control formControl-select" id="gc-select-box">
              {iteratorArr.map((item, i) => renderSelectOptions(item, i))}
            </select>
          </div>
        </div>
      </div>
    );
  };
  const initialValues = {
    recipientsName: '',
    recipientsEmail: '',
    message: '',
  };
  const [values, setValues] = useState(initialValues);
  const [formerrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const validate = (valuesObj) => {
    const errors = validator(valuesObj);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      return true;
    }
    return false;
  };
  const handleBlur = () => {
    if (isSubmit) {
      validate({ ...values });
    }
  };
  const submitGCData = () => {
    const skuId = document.getElementById('gc-select-box')?.value;
    let productType = 'giftcard';
    const gcData = {
      items: [
        {
          variantId: skuId,
          productId,
          quantity: 1,
        },
      ],
    };
    if (selectedGC === 'electronicGC') {
      productType = 'egiftcard';
      gcData.items[0].recipientName = values.recipientsName;
      gcData.items[0].recipientEmail = values.recipientsEmail;
    }
    gcData.items[0].productType = productType;
    if (values.message) { gcData.items[0].message = values.message; }
    const result = addToBagDetails(gcData);
    result.then((res) => {
      if (res.status === 200) {
        setMiniCartDetails({ ...miniCartDetails, itemAdded: true });
      }
    });
  };
  const handleSubmit = (event) => {
    event.stopPropagation();
    if (selectedGC === 'electronicGC') {
      setIsSubmit(true);
      const validated = validate(values);
      if (validated) {
        submitGCData();
      }
    } else {
      submitGCData();
    }
  };
  return (
    <div className="col-md-7 col-sm-12">
      <Form noValidate autoComplete="off">
        <h1 className="page-title">Gift Card</h1>
        <p className="page-short-description">Give the gift of a delicious, unforgettable meal with an Allen Brothers gift card. Choose either an e-gift card or a physical gift card sent by mail.</p>
        {/* <h3 className="mb-0">Select a Gift Card Type</h3> */}
        <div className="js-tabs">
          {/* <ul className="list-inline gift-card-tyle-list">
            <li>
              <div className="radio">
                <label className="radio__label">
                  <input
                    className="js-alt-tab-controller"
                    checked={selectedGC === 'electronicGC'}
                    type="radio"
                    value="electronicGC"
                    name="type"
                    onChange={(e) => handleGCTypeClick(e)}
                  />
                  <span className="radio__text">Email Gift Card</span>
                  <span className="radio__visual"></span>
                </label>
              </div>
            </li>
            <li>
              <div className="radio">
                <label className="radio__label">
                  <input
                    className="js-alt-tab-controller"
                    checked={selectedGC === 'physicalGC'}
                    type="radio"
                    value="physicalGC"
                    name="type"
                    onChange={(e) => handleGCTypeClick(e)}
                  />
                  <span className="radio__text">Physical Gift Card</span>
                  <span className="radio__visual"></span>
                </label>
              </div>
            </li>
          </ul> */}
          <div className="js-tabs__tab">
            <h3 data-bind="widgetLocaleText: 'giftCardAmount'">Select a Gift Card Amount</h3>
            {renderGCSelect()}
            {selectedGC === 'electronicGC'
              ? (
                <div className="row">
                  <div className="col-sm-7">
                    <Form.Group>
                      <div className="form-group">
                        <Form.Control
                          className="form-control formControl-input"
                          type="text"
                          required
                          maxLength="50"
                          placeholder="Recipients Name *"
                          id="recipientsName"
                          name="recipientsName"
                          value={values.recipientsName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!formerrors.recipientsName}
                        />
                        <Form.Label
                          className="formGroup-label"
                          htmlFor="recipientsName"
                        >
                          Recipients Name *
                        </Form.Label>
                        <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.recipientsName}</Form.Control.Feedback>
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <div className="form-group">
                        <Form.Control
                          className="form-control formControl-input"
                          type="email"
                          maxLength="128"
                          placeholder="Recipients Email Address *"
                          id="recipientsEmail"
                          name="recipientsEmail"
                          value={values.recipientsEmail}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={!!formerrors.recipientsEmail}
                        />
                        <Form.Label
                          className="formGroup-label"
                          htmlFor="recipientsEmail"
                        >
                          Recipients Email Address *
                        </Form.Label>
                        <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.recipientsEmail}</Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              ) : ''}
          </div>
          <div className="form-group">
            <textarea
              className="form-control formControl-input noresize"
              rows="4"
              type="text"
              maxLength="250"
              spellCheck="true"
              placeholder="Message"
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
            >
            </textarea>
            <label
              className="formGroup-label"
              htmlFor="message"
            >
              Message
            </label>
            <span className="text-danger hidden" role="alert"></span>
          </div>
        </div>
        <button
          className="btn btn-secondary btn-md btn-action"
          type="button"
          onClick={(e) => handleSubmit(e)}
        >
          ADD TO CART
        </button>
      </Form>
    </div>

  );
}
