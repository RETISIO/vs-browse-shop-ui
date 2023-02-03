// import { Container, Row, Col} from 'react-bootstrap';
// import Skeleton from "react-loading-skeleton";
// import useSWR from "swr";
// import settings from '../config/settings';
// import {requestContructor} from '../config/api';
import { Template } from '@retisio/sf-ui';
import Head from 'next/head'
// import Link from "next/link";
// import { useEffect, useState } from 'react';
// import Router, { useRouter } from 'next/router'
// import { withRouter } from 'next/router'
// import DefaultErrorPage from 'next/error';
// import Cookies from 'cookies';
// import { v4 as uuidv4 } from 'uuid';







const Static = ({data,isAie}) => {
  return (
    <>
      <Head>
        {/* {data && data?.payload?.page?.seo?.title ? (
          <title>{data.payload.page.seo.title}</title>
        ) : (
          <title>Retisio Page</title>
        )}
        {data && data?.payload?.page?.seo?.description ? (
          <meta
            name="description"
            content={data.payload.page.seo.description}
          />
        ) : (
          <meta name="description" content="restisio home" />
        )}
        {data && data?.payload?.page?.seo?.keywords?<meta name="keywords" content={data.payload.page.seo.keywords} />:<meta name="keywords" content=""/>}
        {data && data?.payload?.page?.seo?.canonicalUrl ? (
          <link rel="canonical" href={data.payload.page.seo.canonicalUrl} />
        ) : (
          <link rel="canonical" href="restisio home" />
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {isAie && <link rel="icon" href="/Favicon.png"></link>} */}
      </Head>

      {/* {data && data ? (
        <Template templateData={data && data.payload.page.segmentsMap} layoutData={data && data.payload.page.layout}/>
      ) : (
        <DefaultErrorPage statusCode={404} />
      )} */}
      <div>Hello This is testing</div>
    </>
  );
}

// Static.getInitialProps = async (context) =>{
//   let {req,query,res} = context,headers={};
//   // const cookies = new Cookies(req, res);
//   // let UUID = uuidv4();
//   // res.setHeader('CORRELATIONID', UUID);
//   // try{
//   //   headers['CORRELATION-ID'] = UUID;
//   //   if(cookies.get('env')){
//   //     headers['x-env-name'] = cookies.get('env');
//   //   }
//   //   if(cookies.get('date')){
//   //     headers['x-env-date'] = cookies.get('date');
//   //   }
//   //   if(query.env){
//   //     cookies.set('env', query.env, {
//   //         httpOnly: true // true by default
//   //     })
//   //     headers['x-env-name'] = query.env;
//   //   }
//   //   if(query.date){
//   //     cookies.set('date', query.date, {
//   //         httpOnly: true // true by default
//   //     })
//   //     headers['x-env-date'] = query.date;
//   //   }  
//     // const {data, error} = await requestContructor(req,settings.endPoints.staticPage,query.id.join('/'),headers);
//     const {data, error} = await requestContructor('static/home', '', {}, false);
//     return {
//       data: data
//       // isAie:req.headers.host.endsWith('aienterprise.com')?true:false
//     };
//   }catch(e){
//     if(e?.response?.data?.status===404){
//       // console.log('e?.response?.data',e?.response?.data);
//       // res.writeHead(302, { Location: '/' });
//       // res.end();
//     }

//     return {
//       data:""
//     }
//   }
  
// }

export default Static;
