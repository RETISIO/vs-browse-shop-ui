/* eslint-disable no-undef */
(function(d) { if(typeof _ltk === 'undefined') { if(document.addEventListener)document.addEventListener('ltkAsyncListener', () => { _ltk_util.ready(d); }); else{ e = document.documentElement; e.ltkAsyncProperty = 0; e.attachEvent('onpropertychange', (e) => { if(e.propertyName == 'ltkAsyncProperty') { _ltk_util.ready(d); } }); } }else{ _ltk_util.ready(d); } }(() => {
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
    if(e.target.classList.contains('ltkmodal-email')) {
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
  
};
