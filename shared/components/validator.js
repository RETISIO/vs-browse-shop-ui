export function validator(values, type, passwordRegex, passwordErrors) {
  let errors = {};
  if (values.firstName === "") {
    errors.firstName = "Please enter your first name.";
  } else if (values.firstName && !/^[a-z .'\-]{1,40}$/i.test(values.firstName)) { /* eslint-disable-line */
    errors.firstName = "Please enter a valid format for first name.";
  }
  if (values.recipientsName === "") {
    errors.recipientsName = "Please enter the recipient's name.";
  } else if (values.recipientsName && !/^[a-z .'\-]{1,40}$/i.test(values.recipientsName)) { /* eslint-disable-line */
    errors.recipientsName = "Please enter a valid format for recipient's name.";
  }
  if (values.lastName === "") {
    errors.lastName = "Please enter your last name.";
  } else if (values.lastName && !/^[a-z .'\-]{1,40}$/i.test(values.lastName)) { /* eslint-disable-line */
    errors.lastName = "Please enter a valid format for last name.";
  }
  if (values.email === "") {
    errors.email = "Please enter your email address.";
  } else if (values.email && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)) { /* eslint-disable-line */
    errors.email = "Please enter a valid format for your email address.";
  }
  if (values.recipientsEmail === "") {
    errors.recipientsEmail = "Please enter the recipient's email address.";
  } else if (values.recipientsEmail && !/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.recipientsEmail)) { /* eslint-disable-line */
    errors.recipientsEmail = "Please enter a valid format for the recipient's email address.";
  }
  if (values.password === "" && type !== "addressForm") {
    errors.password = "Please enter a password.";
  } else if (values.password && !passwordRegex.test(values.password)) { /* eslint-disable-line */
    errors.password = passwordErrors;
  }
  if (values.currentPassword === "" && type === "accountInfoForm") {
    errors.currentPassword = "In order to update your password, the current, new and confirm new password fields must be entered."
  } else if (values.currentPassword && !passwordRegex.test(values.currentPassword)) { /* eslint-disable-line */
    errors.currentPassword = passwordErrors;
  }
  if (values.newpassword === "" && type === "accountInfoForm") {
    errors.newpassword = "Please enter a password."
  }
  if (values.confirmpassword === "" && type !== "addressForm") {
    if (type === "accountInfoForm") {
      errors.confirmpassword = "In order to update your password, the current, new and confirm new password fields must be entered."
    }
    else if (type === "resetPasswordForm") {
      errors.confirmpassword = "Please re-enter your new password."
    }
    else {
      errors.confirmpassword = "Please confirm your password.";
    }
  } else if (values.confirmpassword && (values.password !== values.confirmpassword)) {
    errors.confirmpassword =
      "New password and confirm password do not match.";
  }
  if (values.address1 === "" && (type === "addressForm" || type === 'catalogForm')) {
    errors.address1 = "Please enter an address 1";
  } else if (!/^[a-zA-Z0-9~!@#$%^&*()_\-+={}[\]|:;<>,./?"'\\` ]{0,35}$/i.test(values.address1) && values.address1) { /* eslint-disable-line */
    errors.address1 = "Please enter a valid address 1.";
  }
  if (values.city === "" && (type === "addressForm" || type === 'catalogForm')) {
    errors.city = "Please enter a city";
  } else if (!/^[a-zA-Z0-9~!@#$%^&*()_\-+={}[\]|:;<>,./?"'\\` ]{0,30}$/i.test(values.city) && values.city) { /* eslint-disable-line */
    errors.city = "Please enter a valid city.";
  }
  if (values.state === "" && (type === "addressForm" || type === 'catalogForm')) {
    errors.state = "Please select a state";
  }
  if (values.postalCode === "" && (type === "addressForm" || type === 'catalogForm')) {
    errors.postalCode = "Please enter your zip code";
  } else if (!/^[0-9]{5}([ -][0-9]{4})?$/i.test(values.postalCode) && values.postalCode) { /* eslint-disable-line */
    errors.postalCode = "Please enter a valid format for zip code.";
  }
  if (values.phone === "" && type === "addressForm") { 
    errors.phone = "Please enter your phone number";
  } else if (!/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(values.phone) && values.phone) { /* eslint-disable-line */
  errors.phone = "Please enter a valid format for your phone number.";
  }
  return errors;
}
