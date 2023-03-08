// /* eslint-disable react/jsx-no-useless-fragment */
// /* eslint-disable max-len */
// /* eslint-disable linebreak-style */
// import React, { useState, useEffect } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Trans, withTranslation } from 'react-i18next';
// import { validator } from '@retisio/sf-ui';
// import Tooltip from '../../pages/Registration/Tooltip';
// import { getUserContext } from '../helpers/userContext';
// import requestContructor from '../helpers/api';
// // import { validator } from "../helpers/validator";
// import AddressForm from '../../pages/AddressBook/AddressForm';

// function ABForm({
//   formData, formType, data, submitData, handleClose,
// }) {
//   const { values, setValues } = getUserContext();
//   const [passwordRegex, setPasswordRegex] = useState([]);
//   const [passwordErrors, setPasswordErrors] = useState([]);
//   const [policy, setPolicy] = useState([]);
//   const [formerrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isSaveVisible, setIsSaveVisible] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);

//   const getData = async() => {
//     const res = await requestContructor.request('getPasswordPolicy', {}, '');
//     return res;
//   };

//   const getPasswordPattern = (data) => {
//     const policy = data && data.passwordPolicies[0].rules;
//     setPolicy(policy);
//     let regex = [];
//     let errors = [];
//     policy.map((policy) => {
//       const reg = policy.regex.replaceAll('/', '');
//       const regPattern = new RegExp(`(?=.*${reg})`);
//       regex.push(regPattern);
//       errors.push(policy.errorMsg);
//     });
//     regex = regex.join('').replaceAll('/', '');
//     regex = new RegExp(regex);
//     setPasswordRegex(regex);
//     errors = errors.join('. ');
//     setPasswordErrors(errors);
//   };

//   useEffect(() => {
//     getData().then((data) => {
//       getPasswordPattern(data);
//     });
//   }, []);

//   useEffect(() => {
//     if (formType === 'accountInfoForm') {
//       const { firstName, lastName, email } = data && data.accountProfile;
//       setValues({
//         ...values,
//         currentPassword: '',
//         firstName,
//         lastName,
//         email,
//       });
//     }
//   }, []);

//   const handleChange = (event) => {
//     const {
//       name, value, checked, type,
//     } = event.target;
//     let obj = { ...values };
//     obj = {
//       ...values,
//       [name]: type === 'checkbox' ? checked : value,
//     };
//     setValues(obj);
//     if (formType === 'accountInfoForm') {
//       JSON.stringify(data?.accountProfile[name]) === JSON.stringify(obj[name]) ? setIsSaveVisible(false) : setIsSaveVisible(true);
//     }
//   };

//   const validate = (values) => {
//     let errors = {};
//     if (formType === 'accountInfoForm') {
//       if (values?.currentPassword.length > 0 || values?.password.length > 0 || values?.confirmpassword.length > 0) {
//         errors = validator(values, formType, passwordRegex, 'The password entered does not comply with our password policy. Please try again.');
//       } else {
//         errors = {};
//       }
//     } else {
//       errors = validator(values, formType, passwordRegex, passwordErrors);
//     }
//     setFormErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       return true;
//     }
//     return false;
//   };

//   const handleBlur = () => {
//     if (isSubmit) {
//       validate({ ...values });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsSubmit(true);
//     const validated = validate(values);
//     if (validated) {
//       submitData(values);
//     }
//   };

//   const togglePassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       {formType === 'registrationForm' && (
//         <p className="required-fields"><Trans>* Required Fields</Trans></p>
//       )}

//       <Form noValidate onSubmit={handleSubmit} autoComplete="off">
//         <div className={`form-fields-container ${formType !== 'registrationForm' ? 'mt-0' : ''}`}>
//           <div className="row">
//             <Form.Group className="col-sm-6">
//               <div className="form-group">
//                 <Form.Control
//                   id={formData?.firstName}
//                   required
//                   type="text"
//                   placeholder={`First Name ${formType !== 'accountInfoForm' ? '*' : ''}`}
//                   className="formControl-input"
//                   name="firstName"
//                   value={values.firstName}
//                   onChange={handleChange}
//                   isInvalid={!!formerrors.firstName}
//                   maxLength="40"
//                   onBlur={handleBlur}
//                 />
//                 <Form.Label className="formGroup-label">
//                   <Trans>
//                     {' '}
//                     First Name
//                     {' '}
//                     {formType !== 'accountInfoForm' ? '*' : ''}
//                     {' '}
//                   </Trans>
//                 </Form.Label>
//                 <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.firstName}</Form.Control.Feedback>
//               </div>
//             </Form.Group>
//             <Form.Group className="col-sm-6">
//               <div className="form-group">
//                 <Form.Control
//                   id={formData?.lastName}
//                   required
//                   type="text"
//                   placeholder={`Last Name ${formType !== 'accountInfoForm' ? '*' : ''}`}
//                   className="formControl-input"
//                   name="lastName"
//                   value={values.lastName}
//                   onChange={handleChange}
//                   isInvalid={!!formerrors.lastName}
//                   maxLength="40"
//                   onBlur={handleBlur}
//                 />
//                 <Form.Label className="formGroup-label">
//                   <Trans>
//                     Last Name
//                     {' '}
//                     {formType !== 'accountInfoForm' ? '*' : ''}
//                   </Trans>
//                 </Form.Label>
//                 <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.lastName}</Form.Control.Feedback>
//               </div>
//             </Form.Group>
//           </div>

//           {(formType === 'registrationForm' || formType === 'addressForm') && (
//             <div className="row">
//               <Form.Group className="col-sm-6">
//                 {formType === 'addressForm' && (
//                   <div className="form-group">
//                     <Form.Control
//                       id={formData?.companyName}
//                       className="formControl-input"
//                       type="text"
//                       placeholder="Company Name"
//                       name="companyName"
//                       value={values.companyName}
//                       onChange={handleChange}
//                       isInvalid={!!formerrors.companyName}
//                       onBlur={handleBlur}
//                     />
//                     <Form.Label className="formGroup-label"><Trans>Company Name</Trans></Form.Label>
//                     <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.companyName}</Form.Control.Feedback>
//                   </div>
//                 )}

//                 <div className="form-group">
//                   <Form.Control
//                     id={formData?.email}
//                     className="formControl-input"
//                     type="email"
//                     maxLength="128"
//                     required
//                     placeholder="Email Address *"
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     isInvalid={!!formerrors.email}
//                     onBlur={handleBlur}
//                   />
//                   <Form.Label className="formGroup-label"><Trans>Email Address *</Trans></Form.Label>
//                   <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.email}</Form.Control.Feedback>
//                 </div>
//               </Form.Group>
//             </div>
//           )}

//           {formType === 'accountInfoForm' && (
//             <p className="account-info-email">
//               <b>
//                 Email Address
//               </b>
//               <br />
//               {data?.accountProfile?.email}
//             </p>
//           )}

//           {formType === 'addressForm' && (
//             <AddressForm {...{
//               formData, values, handleBlur, handleChange, formerrors, handleClose,
//             }}
//             />
//           )}

//           {formType !== 'addressForm' && (
//             <>
//               <div className="row">
//                 <Form.Group className="col-sm-6">
//                   <div className="form-group__tooltip d-flex justify-space-between">
//                     <div className="form-group">
//                       <div className="input-group">
//                         <Form.Control
//                           className="formControl-input"
//                           type={showPassword ? 'text' : 'password'}
//                           id={formType === 'registrationForm' ? formData?.password : formData?.currentPassword}
//                           autoComplete={`${formType === 'registrationForm' ? 'new' : 'current'}-password`}
//                           data-toggler="password_field"
//                           required={formType === 'registrationForm'}
//                           placeholder={formType === 'registrationForm' ? 'Password *' : 'Current Password'}
//                           name={formType === 'registrationForm' ? 'password' : 'currentPassword'}
//                           value={formType === 'registrationForm' ? values?.password : values?.currentPassword}
//                           onChange={handleChange}
//                           isInvalid={formType === 'registrationForm' ? !!formerrors?.password : !!formerrors?.currentPassword}
//                           onBlur={handleBlur}
//                         />
//                         <Form.Label className="formGroup-label">
//                           <Trans>
//                             {' '}
//                             {formType === 'registrationForm' ? 'Password *' : 'Current Password'}
//                           </Trans>
//                         </Form.Label>
//                         <div className="input-group-btn">
//                           <button className="btn showHidePasswordTrigger" type="button" onClick={togglePassword}>
//                             {!showPassword ? <i className="fa field-icon fa-eye" aria-hidden="true"></i> : <i className="fa field-icon fa-eye-slash" aria-hidden="true"></i>}
//                           </button>
//                         </div>
//                       </div>
//                       {formType === 'registrationForm' ? (
//                         <>
//                           {formerrors.password && (<div className="text-danger" type="invalid" role="alert">{formerrors.password}</div>)}
//                         </>
//                       ) : (
//                         <>
//                           {formerrors.currentPassword && (<div className="text-danger" type="invalid" role="alert">{formerrors.currentPassword}</div>)}
//                         </>
//                       )}

//                     </div>
//                     {formData?.isTooltipVisible
//                       && (<i className="icon icon-info-password fa fa-info-circle visible-xs" data-toggle="tooltip" data-html="true"></i>)}
//                   </div>

//                   {formType === 'accountInfoForm' && (
//                     <div className="form-group">
//                       <Form.Control
//                         className="formControl-input"
//                         type="password"
//                         id={formData?.newPassword}
//                         autoComplete="new-password"
//                         data-toggler="password_field"
//                         required="required"
//                         placeholder="New Password"
//                         name="password"
//                         value={values.password}
//                         onChange={handleChange}
//                         isInvalid={!!formerrors.password}
//                         onBlur={handleBlur}
//                       />
//                       <Form.Label className="formGroup-label"><Trans>New Password</Trans></Form.Label>
//                       <Form.Control.Feedback className="text-danger" type="invalid" role="alert">{formerrors.password}</Form.Control.Feedback>

//                       {/* {formerrors.password && (<div className="text-danger" type="invalid" role="alert">{formerrors.password}</div>)} */}
//                     </div>

//                   )}

//                   <div className="form-group">
//                     <Form.Control
//                       className="formControl-input"
//                       type="password"
//                       id={formData?.confirmpassword}
//                       autoComplete="new-password"
//                       data-toggler="password_field"
//                       required="required"
//                       placeholder={`Confirm Password ${formType === 'registrationForm' ? '*' : ''}`}
//                       name="confirmpassword"
//                       value={values.confirmpassword}
//                       onChange={handleChange}
//                       isInvalid={!!formerrors.confirmpassword}
//                       onBlur={handleBlur}
//                     />
//                     <Form.Label className="formGroup-label">
//                       <Trans>{`Confirm Password ${formType === 'registrationForm' ? '*' : ''}`}</Trans>
//                     </Form.Label>
//                     {formerrors.confirmpassword && (<div className="text-danger" type="invalid" role="alert">{formerrors.confirmpassword}</div>)}
//                   </div>

//                 </Form.Group>

//                 {values?.currentPassword?.length > 0 && (
//                   <div className="col-sm-6 hidden-xs">

//                     <p>
//                       <b>Password Rules</b>
//                     </p>
//                     <ul className="modal-list">
//                       <li>
//                         <p>Must be at least 8 characters in length</p>
//                       </li>
//                       <li>
//                         <p>Must include a number</p>
//                       </li>
//                       <li>
//                         <p data-bind="widgetLocaleText: 'passwordRuleUsername'">Must not be the same as your username</p>
//                       </li>
//                       {/* <li style="display: none;">
//                     <p data-bind="widgetLocaleText: 'passwordRulePreviousPassword'">Cannot be a previously used password</p>
//                   </li>
//                   <li style="display: none;">
//                     <p data-bind="widgetLocaleText: 'passwordRuleMixedCase'">Must include uppercase and lowercase letters</p>
//                   </li>
//                   <li style="display: none;">
//                     <p >Must include one of the following special characters: ~!@#$%^&amp;*()_-+={ }[]|:;&lt;&gt;,./?</p>
//                   </li> */}

//                     </ul>

//                   </div>

//                 )}

//                 {formData?.isTooltipVisible && (
//                   <div className="col-sm-6 hidden-xs">
//                     <i className="icon icon-info-password fa fa-info-circle" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} data-toggle="tooltip" data-placement="top" data-html="true"></i>
//                     {showTooltip && <Tooltip {...{ policy }} />}
//                   </div>
//                 )}

//               </div>
//               <div className="checkbox">
//                 <label className="checkbox__label">
//                   <input type="checkbox" id={formData?.newsLetterOption} />
//                   <span className="checkbox__text"><Trans>Opt in for our Marketing Emails, you can unsubscribe at any time.</Trans></span>
//                   <span className="checkbox__visual"></span>
//                 </label>
//               </div>

//             </>
//           )}

//         </div>

//         {formType === 'registrationForm' && (
//           <div className="row">
//             <div className="oc-panel col-md-12">
//               <p><Trans>By clicking ‘Submit’ below, I acknowledge and accept Company’s Terms & Conditions</Trans></p>
//             </div>
//           </div>
//         )}

//         {formType === 'registrationForm' && (
//           <div className="page-actions d-flex justify-content-end">
//             <Button id={formData?.submitForm} className="btn btn-action btn-action-md btn-action-primary" type="submit">
//               <Trans>Submit</Trans>
//             </Button>
//           </div>
//         )}
//         {formType === 'accountInfoForm' && isSaveVisible && (
//           <div className="page-actions d-flex justify-content-end">
//             <Button
//               id="registrationSubmit"
//               className="btn btn-action btn-action-md btn-action-default"
//               onClick={() => {
//                 setValues({
//                   ...data?.accountProfile,
//                   currentPassword: '',
//                   password: '',
//                   confirmpassword: '',
//                 });
//               }}
//             >
//               <Trans>Cancel</Trans>
//             </Button>
//             <Button id={formData?.submitForm} className="btn btn-action btn-action-md btn-action-primary" type="submit">
//               <Trans>Save</Trans>
//             </Button>
//           </div>
//         )}
//       </Form>
//     </>
//   );
// }
// export default withTranslation()(ABForm);
