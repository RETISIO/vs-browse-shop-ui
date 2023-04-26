/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-disable no-undef */
(function (d) {
  if (typeof _ltk === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('ltkAsyncListener', () => {
        _ltk_util.ready(d);
      });
    }
    else {
      e = document.documentElement;
      e.ltkAsyncProperty = 0;
      e.attachEvent('onpropertychange', (e) => {
        if (e.propertyName === 'ltkAsyncProperty') {
          _ltk_util.ready(d);
        }
      });
    }
  } else {
    _ltk_util.ready(d);
  }
}(() => {
  /** ******** Begin Custom Code ********* */

  // Footer form
  // {
  // 	formId: 'EmailSignup',
  // 	inputId: 'footerEmailSignup',
  // 	buttonId: 'footerSignupButton'
  // }

  // Registration form
  // {
  //   formId: 'Account',
  //   inputId: 'cc-Email',
  //   buttonId: 'registrationSubmit',
  //   optinId: 'registrationNewsletterOptin',
  //   formFields: {
  //       'firstname': 'cc-FirstName',
  //       'lastname': 'cc-LastName'
  //   }
  // }

  // /////////////////////////////////
  // User E-mail Listrak Modal Capture
  // /////////////////////////////////

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('ltkmodal-email')) {
      const originalModalSubmit = window.LTKModal.prototype.submit;
      window.LTKModal.prototype.submit = function () {
        originalModalSubmit.apply(this);
      };
    }
  }, { capture: true, passive: true });
  // const element = document.querySelector('.ltkmodal-email');
  // element.addEventListener('click', () => { alert('in'); });

  /** ******** End Custom Code *********** */
}));

window.lstImplement = {
  emailSignUP: (obj) => {
    _ltk.Signup.New(obj.formId, obj.inputId, obj.type ? _ltk.Signup.TYPE[obj.type] : _ltk.Signup.TYPE.CLICK, obj.buttonId);

    if (obj.optinId) {
      _ltk.Signup.SetOptIn(obj.formId, obj.optinId);
    }

    if (obj.formFields) {
      const fields = Object.getOwnPropertyNames(obj.formFields);

      for (var i = 0; i < fields.length; i++) {
        var field = fields[i];
        _ltk.Signup.SetFieldWithKey(obj.formId, obj.formFields[field], field);
      }
    }

    if (obj.formValues) {
      const values = Object.getOwnPropertyNames(obj.formValues);

      for (var i = 0; i < values.length; i++) {
        var field = values[i];
        _ltk.Signup.SetValue(obj.formId, obj.formValues[field], field);
      }
    }
  },
  browsedProduct: (itemData) => {
    // console.log("items", itemData);

    // console.log(itemData?.payLoad?.products[0])

    const product = itemData.payLoad && itemData.payLoad.products.length > 0 && itemData.payLoad.products[0] ? itemData.payLoad.products[0] : {};
    const childSKUs = Object.values(product.skus);

    var leastExpensiveSku = childSKUs.reduce(function (leastExpensiveSku, sku) {
      if (!leastExpensiveSku) {
        return sku;
      }
      const lestExpensiveSkuPrice = leastExpensiveSku.skuDetails.price;
      const skuPrice = sku.skuDetails.price;

      const lesSkuCost = leastExpensiveSku.salePrice ? lestExpensiveSkuPrice.salePrice.price.split('$')[1] : lestExpensiveSkuPrice.listPrice.price?.split('$')[1];
      const curSkuCost = skuPrice.salePrice ? skuPrice.salePrice.price.split('$')[1] : skuPrice.listPrice.price?.split('$')[1];

      if (parseFloat(lesSkuCost) < parseFloat(curSkuCost)) {
        return leastExpensiveSku;
      }

      return sku;
    });

    console.log(leastExpensiveSku);

    setTimeout(() => {
      _ltk.Activity.AddProductBrowse(leastExpensiveSku.skuId);
      _ltk.Activity.Submit();
    }, 3000);
  },

  captureEmail: (data) => {
    console.log(data);
    _ltk.SCA.Update("email", data);
    _ltk.SCA.Submit();
  },

  captureCartItems: (cartData) => {

    if(!cartData){
      _ltk.SCA.ClearCart();
    }

    //console.log(cartData);
    const items = cartData.items;
    let total = items.length
    for (let i = 0; i < total; i++) {
      const childItems = items[i];
      console.log(childItems);

      let sku = childItems.skuId;
      let quantity = childItems.quantity
      let price = childItems.itemPrice.salePrice ? childItems.itemPrice.salePrice : childItems.itemPrice.listPrice;
      let title = childItems.productName;
      let imageURL = childItems.imageUrl;
      let productURL = childItems.pdpUrl;

      _ltk.SCA.AddItemWithLinks(sku, quantity, price, title, imageURL, productURL);
    }
    _ltk.SCA.Total = total;
    _ltk.SCA.Submit();
  },

};
