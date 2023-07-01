/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-expressions */
import { useEffect } from 'react'

// eslint-disable-next-line import/named
import Router, { useRouter } from 'next/router'
import { PageBuilder } from '@retisio/sf-ui'
import Cookies from 'cookies';
import DefaultErrorPage from 'next/error'
import { requestContructor } from '../shared/helpers/api'
import { usePageDataContext } from '../shared/context/pageData-context'
import { useAppContext } from '../shared/context/appContext'
import MainLayout from '../shared/components/Layout'
import Yotpo from '../shared/components/ThirdPartyScripts/Yotpo'
import ComponentMap from '../shared/components/componentMap'
import { Loader } from '../shared/components/loader';

function Static({ data }) {
  // const i18n = useI18n();
  const { setPageData } = usePageDataContext()
  const { setShow, loader } = useAppContext()
  const router = useRouter()
  const { loggedInPopUp, page } = router.query
  const pageContent = data && data.page && data.page.segmentsMap
  useEffect(() => {
    data && setPageData(data)
    if (!data) {
      Router.push('/404')
    }
    if (loggedInPopUp) {
      setShow(true)
    }
  }, [])
  return (
    <>
      {loader && <Loader />}
      {data ? (
        <MainLayout data={data} robotsFollow="index;follow">
          {/* {i18n.t('title')} */}
          <PageBuilder pageContent={pageContent} ComponentMap={ComponentMap} isNextJs={true} />
        </MainLayout>
      ) : (
        <DefaultErrorPage statusCode={404} />
      )}
      <Yotpo />
    </>
  )
}

Static.getInitialProps = async context => {
  const {
    req, asPath, query, res
  } = context;
  const cookies = new Cookies(req, res);
  let response;
  const options = { customHeaders: {} };
  if(query.env) {
    cookies.set('env', query.env, {
      httpOnly: true, // true by default
    });
    options.customHeaders['x-env-name'] = query.env;
  }
  if(query.date) {
    cookies.set('date', query.date, {
      httpOnly: true, // true by default
    });
    options.customHeaders['x-env-date'] = query.date;
  }

  try {
    if (!query.id.includes('nginx-health')) {
      response = await requestContructor(
        `static/${query.id.join('/')}`,
        '',
        options,
        req,
        asPath
      )
    } else {
      return {
        notFound: true
      }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
  return {
    data: response
  }
}

export default Static
