import React, { useState } from 'react';
import { addToBagDetails } from '../../helpers/getPDPData';
import { useMiniCartDataContext } from '../../context/miniCartcontext';

export default function GcDetailsPage(props) {
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext();
  const giftCartData = props?.pdpData?.payLoad;
  console.log('Hello in Gift Card=====>', giftCartData);
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
  console.log("sku'sssssssssssss=>>>>>>>>>", giftCartData?.products[0]?.skus);
  console.log('gcSkus===gcSkus=====gcSkus====>', gcSkus);
  console.log('electronicGCskuArr============>', electronicGCskuArr);
  console.log('physicalGCskuArr============>', physicalGCskuArr);
  const isAvailableGC = electronicGCskuArr.length > 0 ? 'electronicGC' : 'physicalGC';
  const [selectedGC, setSelectedGC] = useState(isAvailableGC);
  const handleGCTypeClick = (event) => {
    const { value } = event.target;
    console.log('Value=>>>>>>>>', value);
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
    message: ''
  };
  const [values, setValues] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ values: { [name]: value } });
  };
  const submitGCData = (event) => {
    event.stopPropagation();
    const skuId = document.getElementById('gc-select-box')?.value;
    const productType = giftCartData?.products[0]?.productType;
    const gcData = {
      items: [
        {
          variantId: skuId,
          productId,
          quantity: 1,
          productType,
          message: 'Hi enjoy the Gift Item..',
        },
      ],
    };
    if (selectedGC === 'electronicGC') {
      gcData.items[0].recipientName = 'testName';
      gcData.items[0].recipientEmail = 'testEmail';
    }
    const result = addToBagDetails(gcData);
    result.then((data) => {
      setMiniCartDetails({ ...miniCartDetails, itemAdded: true });
    });
  };
  return (
    <div className="col-md-7 col-sm-12">
      <h1 className="page-title" data-bind="text: product().displayName()">Gift Card</h1>
      <p className="page-short-description">Give the gift of a delicious, unforgettable meal with an Allen Brothers gift card. Choose either an e-gift card or a physical gift card sent by mail.</p>
      <h3 className="mb-0">Select a Gift Card Type</h3>
      <div className="js-tabs">
        <ul className="list-inline gift-card-tyle-list">
          <li>
            <div className="radio">
              <label className="radio__label">
                <input
                  className="js-alt-tab-controller"
                  checked={selectedGC === 'electronicGC'}
                  type="radio"
                  value="electronicGC"
                  name="type"
                  onClick={(e) => handleGCTypeClick(e)}
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
                  onClick={(e) => handleGCTypeClick(e)}
                />
                <span className="radio__text">Physical Gift Card</span>
                <span className="radio__visual"></span>
              </label>
            </div>
          </li>
        </ul>
        <div className="js-tabs__tab">
          <h3 data-bind="widgetLocaleText: 'giftCardAmount'">Select a Gift Card Amount</h3>
          {renderGCSelect()}
          {selectedGC === 'electronicGC'
            ? (
              <div className="row">
                <div className="col-sm-7">
                  <div className="form-group">
                    <input
                      className="form-control formControl-input"
                      type="text"
                      maxLength="50"
                      placeholder="Recipients Name *"
                      id="recipientsName"
                      value={values.recipientsName}
                      onChange={handleChange}
                    />
                    <label
                      className="formGroup-label"
                      htmlFor="recipientsName"
                    >
                      Recipients Name *
                    </label>
                    <span className="text-danger hidden" role="alert" data-bind="validationMessage: recipientName"></span>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control formControl-input"
                      type="email"
                      maxLength="128"
                      data-bind="textInput: recipientEmail, widgetLocaleText: {attr: 'placeholder', value: 'recipientEmailLabel'}"
                      placeholder="Recipients Email Address *"
                      id="recipientsEmail"
                      value={values.recipientsEmail}
                      onChange={handleChange}
                    />
                    <label
                      className="formGroup-label"
                      htmlFor="recipientsEmail"
                    >
                      Recipients Email Address *
                    </label>
                    <span className="text-danger hidden" role="alert" data-bind="validationMessage: recipientEmail"></span>
                  </div>
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
        onClick={(e) => submitGCData(e)}
      >
        ADD TO CART
      </button>
    </div>

  );
}
