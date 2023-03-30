/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
import { getCookie } from '@retisio/sf-api';
// import { Layout } from '@retisio/sf-ui';
import LayoutShared from '../layoutShared/index';
// import Login from '../shared/components/Login';
// eslint-disable-next-line import/named
import { useAppContext } from '../../context/appContext';
import { requestContructor } from '../../helpers/api';
import ComponentMap from '../componentMap';
import { useMiniCartDataContext } from '../../context/miniCartcontext';
import getPersonalization from '../../helpers/utils';

export default function MainLayout({ data, children }) {
  const { state, updateState } = useAppContext();
  const { show, setShow } = useAppContext();
  const { isLogged } = useAppContext();
  const router = useRouter();

  const i18n = useI18n();
  const [rootCatagories, setRootCatagories] = useState([]);
  const getData = async() => {
    const res = await requestContructor('getCategoryList', '', {}, false);

    setRootCatagories(res?.payLoad?.categories);
    return res?.payLoad?.categories;
  };

  useEffect(() => {
    if(!state.channelData) {
      (async() => {
        let channelData = await requestContructor('getChannelDetails', '', {}, false);
        channelData = channelData[process.env.NEXT_PUBLIC_CHANNELDOMAIN];
        updateState({ ...state, channelData });
        await getPersonalization();
      })();
    }
  }, []);
  useEffect(() => {
    getData();
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
    if (miniCartDetails.itemAdded === true) {
      setMiniCartDetails({
        ...miniCartDetails, itemAdded: false, miniCartData: cartData, showMiniCart: true,
      });
      document.querySelector('.ab-miniCart-Icon>i')?.focus();
    } else {
      setMiniCartDetails({ ...miniCartDetails, itemAdded: false, miniCartData: cartData });
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
    const res = await requestContructor('getTypeAheadArc', `?searchKey=${text}&size=4`, {}, false);
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
  const damPath = process.env.NEXT_PUBLIC_IMAGEPATH;
  const signout = async() => {
    const res = await requestContructor('signout', '', {}, false).then((data) => {
      if(data) {
        window.location.reload();
      }
    });
    return res;
  };
  return (
    <>
      {/* {show ? 'tue' : 'false sdf'}
      <button onClick={()=>{setShow(!show)}}>click</button> */}
      {/* <Login /> */}
      <Head>
        {data && data?.page?.seo?.title ? (
          <title>{data.page.seo.title}</title>
        ) : (
          <title>Retisio Page</title>
        )}
        {data && data?.page?.seo?.description ? (
          <meta
            name="description"
            content={data.page.seo.description}
          />
        ) : (
          <meta name="description" content="restisio home" />
        )}
        {data && data?.page?.seo?.keywords
          ? <meta name="keywords" content={data.page.seo.keywords} />
          : <meta name="keywords" content="" />}
        {data && data?.page?.seo?.canonicalUrl ? (
          <link rel="canonical" href={data.page.seo.canonicalUrl} />
        ) : (
          <link rel="canonical" href="restisio home" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LayoutShared
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
        setMiniCartDetails={setMiniCartDetails}
      >
        {children}
      </LayoutShared>
    </>
  );
}
