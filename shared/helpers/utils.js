import requestContructor from './api';

export const formSubmitData = async (values, apiType, apiMethod, handleSuccess, handleMsg) => {
    const res = await requestContructor.request(apiType, { method: apiMethod, data: values }).then((data) => {
      if (data) {
        handleSuccess(data);
        //navigate('/');
      }
    }, (error) => {
        handleMsg(true, {errorStatus: error?.status , error : error?.errors});
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