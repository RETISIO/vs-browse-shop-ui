/* eslint-disable padded-blocks */
/* eslint-disable spaced-comment */
/* eslint-disable space-before-blocks */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-var */
/* eslint-disable no-undef */
(function(d) {
  if (typeof _ltk === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('ltkAsyncListener', () => {
        _ltk_util.ready(d);
      });
    } else {
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
      window.LTKModal.prototype.submit = function() {
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

    var leastExpensiveSku = childSKUs.reduce(function(leastExpensiveSku, sku) {
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
    _ltk.SCA.Update('email', data);
    _ltk.SCA.Submit();
  },
  addToCart: (obj)=>{
    _ltk.Activity.AddProductAddedToCart(obj?.addToProdData?.variantId);
		_ltk.Activity.Submit();
  },
  captureCartItems: (cartData) => {
    if(!window._ltk || (!cartData.items || (cartData.items && cartData.items.length === 0))){
      return '';
    }
    if (!cartData){
      _ltk.SCA.ClearCart();
    }

    // console.log(cartData);
    const { items } = cartData;
    const total = items.length;
    for (let i = 0; i < total; i++) {
      const childItems = items[i];
      //console.log(childItems);

      const sku = childItems.skuId;
      const { quantity } = childItems;
      const price = childItems.itemPrice.salePrice ? childItems.itemPrice.salePrice : childItems.itemPrice.listPrice;
      const title = childItems.productName;
      const imageURL = childItems.imageUrl;
      const productURL = childItems.pdpUrl;

      _ltk.SCA.AddItemWithLinks(sku, quantity, price, title, imageURL, productURL);
    }
    _ltk.SCA.Total = total;
    _ltk.SCA.Submit();
  },

  notifyMe: (obj, merchantId) => {
    if (_ltk.isValidEmail(obj.email)) {
      _ltk.Alerts.AddAlert(obj.email, obj.sku, 'BIS');

    // Not ideal, but the function doesn't return success or failure or have any way
    // to detect status
      _ltk.Alerts.Submit = function() {
        try {
          _ltk_util.ready(function() {
            try {
              this.Assembler = new _Assembler();
              this.Assembler.Name = 'Alert data';
              this.Assembler.QueryMode = 1;
              this.Assembler.EndPointArray = [];
              this.Assembler.EndPointArray.push('al1.listrakbi.com');
              this.Assembler.EndPointPath = '/Handlers/Set.ashx';
              this.Assembler.QueryHeader = `ctid=${merchantId}&uid=${_ltk.uuidCompact()}&gsid=${_ltk.Session.GlobalID}`;
              this.Assembler.AddArrayObject(this.Alert, 'Alert');
              this.Assembler.Flush();
              this.Alert.length = 0;
              if (typeof obj.successHandler === 'function') {
                obj.successHandler();
              }
            } catch (n) {
              if (typeof obj.errorHandler === 'function') {
                obj.errorHandler('LISTRAK_SUBMIT_FAILED');
              }
              _ltk.Exception.Submit(n, 'Alert Submit');
            }
          }, this);
        } catch (n) {
          if (typeof obj.errorHandler === 'function') {
            obj.errorHandler('LISTRAK_SUBMIT_INIT_FAILED');
          }
          _ltk.Exception.Submit(n, 'Init Alert Submit');
        }
      };

      _ltk.Alerts.Submit();
    } else if (typeof obj.errorHandler === 'function') {
      obj.errorHandler('INVALID_EMAIL');
    }
  },
  pageEvent: (url) => {
    // _ltk.CustomEvents.submit({});
    _ltk.Activity.AddPageBrowse(url);
    _ltk.Activity.Submit();
  },

};
