/* eslint-disable no-use-before-define */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/named */
import { useState, useEffect } from 'react';
import { LoginModel } from '@retisio/sf-ui';
import { useRouter } from 'next/router';
import { Modal } from 'react-bootstrap';
import { getCookie } from '@retisio/sf-api';
// import { LoginModel } from '../loginModel';
import { login } from '../ThirdPartyScripts/Events';
import { useAppContext } from '../../context/appContext';
import { requestContructor } from '../../helpers/api';
import ResetPassword from '../ResetPassword';
import { useMiniCartDataContext } from '../../context/miniCartcontext';
import getPersonalization from '../../helpers/utils';

export function Index(props) {
  const {
    show, setShow, loginErrorMsg, setLoginErrorMsg,
    errorBanner, setErrorBanner, isInActive,
  } = useAppContext();
  const { setisLogged, noReload } = useAppContext();
  const { openReset, updateOpenReset } = useAppContext();
  const [passwordRegex, setPasswordRegex] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const router = useRouter();
  const { page } = router.query;
  const { asPath } = useRouter();
  const getData = async() => {
    const res = await requestContructor('getPasswordPolicy', '', {}, false).then((data) => {
      getPasswordPattern(data);
    });
    return res;
  };

  useEffect(() => {
    if (getCookie('lu')) {
      setisLogged(true);
    }
  }, []);

  const getPasswordPattern = (data) => {
    const policy = data && data?.passwordPolicies[0]?.rules;
    let regex = [];
    let errors = [];

    policy.map(policy => {
      if(policy.name !== "custom") {
        let reg = policy.regex.replaceAll('/', "");
        let regPattern = new RegExp(`(?=.*${reg})`);  
        regex.push(regPattern);
        errors.push(policy.errorMsg);
      }
      else {
        regex.push(policy.regex);
        errors.push(policy.errorMsg);
      }
    })
    if(policy[0].name !== "custom") {
      regex = regex.join("").replaceAll('/', "");
      regex = new RegExp(regex);
      errors = errors.join(". ");
    } else {
      regex = new RegExp(regex[0]);
    }
    setPasswordRegex(regex);
    setPasswordErrors(errors);
  };

  const { miniCartDetails } = useMiniCartDataContext();
  const cartID = miniCartDetails?.miniCartData?.cartId;
  const triggerMergeCart = async() => {
    const data = await requestContructor('mergeCart', '', {
      method: 'POST',
      data: { anonymousCartId: cartID },
    });
    return data;
  };

  const personaliseData = async() => {
    const data = await getPersonalization();
    return data;
  };

  const handleErrorMessage = (errorData) => {
    errorData?.map((item) => {
      if (item?.code === 'ERR_ACC_06') {
        setLoginErrorMsg('Your password has been expired. Please reset your password to access your account.');
      } else {
        // eslint-disable-next-line max-len
        setLoginErrorMsg("We're sorry, we do not recognize the email and/or password you have entered. Please revise and try again.");
      }
    });
  };

  const reloadToPath = () => {
    if (!noReload) {
      if (page) {
        const allowURL = ['/account/profile', '/account/account-info', '/account/address-book', '/account/orders', '/account/wishlist'];
        if (allowURL.indexOf(page) > -1) {
          window.location = window.location.origin + page;
        } else {
          window.location = window.location.origin;
        }
      } else {
        window.location.href = asPath;
      }
    }
    setShow(false);
  };

  const handleSubmitForm = async(data) => {
    login(data.userName);
    const loginData = await requestContructor('signIn', '', {
      method: 'POST',
      data,
    }).then(
      (res) => {
        if (res) {
          if (getCookie('lu')) {
            setisLogged(true);
            const isMergeCart = !!getCookie('arcCartId');
            const pData = personaliseData();
            pData.then(() => {
              if (isMergeCart) {
                const result = triggerMergeCart();
                result.then((mergeRes) => {
                  if (mergeRes.status === 200) {
                    reloadToPath();
                  }
                }).catch((e) => {
                  reloadToPath();
                });
              } else {
                reloadToPath();
              }
            });
          }
        }
      },
      (error) => {
        if (error) {
          handleErrorMessage(error?.errors);
          setErrorBanner(true);
        }
      },
    );
    return loginData;
  };
  return (
    <div>
      {props.children}
      <Modal
        show={show}
        size="lg"
        onHide={() => {
          isInActive && (window.location.href = '/');
          setShow(false);
        }}
        className="modal-login"
        onShow={
          () => getData()
        }
      >
        <LoginModel
          modelState={setShow}
          errorBanner={errorBanner}
          setErrorBanner={setErrorBanner}
          handleSubmitForm={(data) => handleSubmitForm(data)}
          openReset={updateOpenReset}
          passwordRegex={passwordRegex}
          passwordErrors={passwordErrors}
          loginErrorMsg={loginErrorMsg}
          isInActive={isInActive}
        />
      </Modal>
      <ResetPassword open={openReset} close={updateOpenReset} />
    </div>
  );
}
export default Index;
