/* eslint-disable spaced-comment */

/* eslint-disable no-shadow */



/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
import { getCookie } from '@retisio/sf-api';
import { Layout } from '@retisio/sf-ui';
// import Login from '../shared/components/Login';
// eslint-disable-next-line import/named
import { cartItems } from '../ThirdPartyScripts/Events';
import { useAppContext } from '../../context/appContext';
import { requestContructor } from '../../helpers/api';
import ComponentMap from '../componentMap';
import { useMiniCartDataContext } from '../../context/miniCartcontext';
import getPersonalization from '../../helpers/utils';
import config from '../../helpers/getConfig';

export default function MainLayout({
  data, abUrl = '', SEO, children, robotsFollow = '',
}) {
  const { state, updateState } = useAppContext();
  const {
    show, setShow, loginErrorMsg, setLoginErrorMsg, setErrorBanner, setIsInActive,
  } = useAppContext();
  const { isLogged } = useAppContext();
  const router = useRouter();
  let seoData = data?.page?.seo;
  // if (data && data.payLoad && data.payLoad.webEnabledAttr) {
  //   seoData = data.payLoad.webEnabledAttr;
  if (SEO) {
    seoData = SEO;
  }
  const ssrRootCategories = data?.megaMenuCategoryData?.categories;

  const i18n = useI18n();
  const [rootCatagories, setRootCatagories] = useState(ssrRootCategories);
  const getData = async() => {
    const res = await requestContructor('getCategoryList', '', {}, false);
    setRootCatagories(res?.payLoad?.categories);
    return res?.payLoad?.categories;
  };

  useEffect(() => {
    (async() => {
      let finalChannelData; let
        userData;
      if (!state.channelData) {
        const channelData = await requestContructor(
          'getChannelDetails',
          '',
          {},
          false,
        );
        const channelURL = window && window.location.origin.indexOf('localhost') < 0
          ? window.location.origin
          : 'https://us.ab-dev.retisio.com';
        finalChannelData = channelData[channelURL];
      }
      if (getCookie('lu')) {
        userData = await requestContructor(
          'getprofile',
          '',
          {},
          false,
        );
      }
      let finalState = { ...state };
      if(finalChannelData) {
        finalState = { ...finalState, channelData: { ...finalChannelData } };
      }
      if(userData) {
        finalState = { ...finalState, userData };
      }
      updateState(finalState);
      await getPersonalization();
    })();
  }, []);
  useEffect(() => {
    if (!ssrRootCategories) getData();
  }, []);
  useEffect(() => {
    async function changeLocale() {
      if (router.locale === 'en-US') {
        i18n.set('en-US', await import('../../../locales/en.json'));
        i18n.locale('en-US');
      } else if (router.locale === 'de') {
        i18n.set('de', await import('../../../locales/de.json'));
        i18n.locale('de');
      }
    }
    changeLocale();
  }, [router.locale]);
    /* *************Mini Cart functionality starts here ***************** */
  const { miniCartDetails, setMiniCartDetails } = useMiniCartDataContext();
  const getMiniCartData = async() => {
    const cartData = await requestContructor('getCartArc', '', {});
    cartItems(cartData);
    if (miniCartDetails.itemAdded === true) {
        //cartItems(cartData);
      setMiniCartDetails({
        ...miniCartDetails,
        itemAdded: false,
        miniCartData: cartData,
        showMiniCart: true,
      });
      document.querySelector('.ab-miniCart-Icon>i')?.focus();
    } else {
      setMiniCartDetails({
        ...miniCartDetails,
        itemAdded: false,
        miniCartData: cartData,
      });
    }
  };
  useEffect(() => {
      // if ((isLogged || getCookie('arcCartId')) && !('items' in miniCartDetails.miniCartData)
      // && (miniCartDetails.itemAdded === false)) {
      // to get cart details on load of the module.
    getMiniCartData();
      // }
    if (miniCartDetails?.showMiniCart) {
      setMiniCartDetails({ ...miniCartDetails, showMiniCart: false });
    }
  }, []);
    /** ********************* The below useEffect is for triggering the cart api
     after adding the new item in Cart from PDP page ************************ */
  useEffect(() => {
    if (miniCartDetails.itemAdded === true) {
      getMiniCartData();
    }
  }, [miniCartDetails.itemAdded]);
    /* *************Mini Cart functionality ends here *********************** */
  const [searchAheadData, setSearchAheadData] = useState(null);
  const getSearchAheadData = async(text) => {
    const res = await requestContructor(
      'getTypeAheadArc',
        `?searchKey=${text}&size=4`,
        {},
        false,
    );
    setSearchAheadData(res);
    return res;
  };
  const searchAheadChangeHandler = (text) => {
    if (text.trim().length > 2) {
      getSearchAheadData(text);
    } else {
      setSearchAheadData(null);
    }
  };
  const damPath = config.IMGPATH;
  const signout = async() => {
    const res = await requestContructor('signout', '', {}, false).then((data) => {
      if (data) {
        window.location.reload();
      }
    }).catch((error) => {
      if (error) {
        window.location.reload();
      }
    });
    return res;
  };

  const showLoginModal = (value) => {
    if(value) {
      setLoginErrorMsg('You have been logged out due to inactivity. Please login again.');
      setIsInActive(true);
      setShow(true);
      setErrorBanner(true);
    } else {
      setShow(false);
      setErrorBanner(false);
      setLoginErrorMsg('');
    }
  };
  
  return (
    <>
      {/* {show ? 'tue' : 'false sdf'}
      <button onClick={()=>{setShow(!show)}}>click</button> */}
      {/* <Login /> */}
      <Head>
        {seoData?.title ? (
          <title>{seoData?.title}</title>
        ) : (
          <title>Vantashala</title>
        )}
        {seoData?.description ? (
          <meta name="description" content={seoData?.description} />
        ) : (
          <meta name="description" content="Vantashala" />
        )}
        {seoData?.keywords ? (
          <meta name="keywords" content={seoData?.keywords} />
        ) : (
          <meta name="keywords" content="" />
        )}
        {seoData?.canonicalUrl ? (
          <link rel="canonical" href={seoData?.canonicalUrl} />
        ) : (
          <link rel="canonical" href={abUrl} />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {robotsFollow && <meta name="robots" content={robotsFollow} />}
      </Head>
      <Layout
        data={data}
        appData={state}
        transformText={i18n.t}
        rootCatagories={rootCatagories}
        searchAheadChangeHandler={searchAheadChangeHandler}
        searchAheadData={searchAheadData}
        componentMap={ComponentMap}
        damPath={damPath}
        setshowLogin={setShow}
        showLogin={show}
        isLogged={isLogged}
        signout={() => signout()}
        miniCartDetails={miniCartDetails}
        isNextJs={true}
        setMiniCartDetails={setMiniCartDetails}
        loginErrorMsg={loginErrorMsg}
        showLoginModal={showLoginModal}
      >
        {children}
      </Layout>
    </>
  );
}
