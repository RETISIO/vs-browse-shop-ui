/* eslint-disable import/named */
import { requestContructor } from './api';

export const formSubmitData = async(values, apiType, apiMethod, handleSuccess, handleMsg) => {
  const res = await requestContructor.request(apiType, { method: apiMethod, data: values }).then((data) => {
    if (data) {
      handleSuccess(data);
        // navigate('/');
    }
  }, (error) => {
    handleMsg(true, { errorStatus: error?.status, error: error?.errors });
    //   error.errors.map((item) => {
    //     //let errorMsgArr = [];
    //     if (item.code) {
    //         handleMsg(true, item?.status);
    //     //   setIsError(true);
    //     // 400 : "pleseae"
    //     //   setErrorMsg([...errorMsgArr, item?.message]);
    //       // setIsSubmit(false);
    //       //return setMessage(true);
    //     }
    //   });
  });
  return res;
};

export default async function getPersonalization() {
  let data;
  
  try {
    data = await requestContructor('getPersonalisation', '', {});
  } catch (e) {
    data = {};
  }
  return data;
}

export const searchTermHandler = (name, url) => {
  const navigationPath = decodeURIComponent(url);
  const finalUrlArr = navigationPath.split('?');
  if(finalUrlArr.length <= 1) {
    return null;
  } else {
    const queryString = new URLSearchParams(finalUrlArr[1]);
    for (let pair of queryString.entries()) {
     if(name == pair[0]){
      return pair[1]
     }
   }
  }
};
