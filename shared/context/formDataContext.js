/* eslint-disable linebreak-style */
import { createContext, useContext, useState } from 'react';

const FormDataContext = createContext();

export function FormDataContextWrapper({ children }) {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    address1: '',
    address2: '',
    country: 'United States',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
  };
  const [values, setValues] = useState(initialValues);

  const clearForm = () => {
    let initialValues = { ...values };
    Object.keys(initialValues).forEach((i) => initialValues[i] = (i === 'country' ? 'United States' : ''));
    setValues(initialValues);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FormDataContext.Provider value={{ values, setValues, clearForm }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormDataContext() {
  return useContext(FormDataContext);
}
