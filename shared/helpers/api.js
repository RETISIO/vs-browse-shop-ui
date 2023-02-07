/* eslint-disable import/no-import-module-exports */
import { Service } from '@retisio/sf-api';

const requestContructor = async(URL, params = '', customHeaders = {}, req = null) => {
  let finalHeaders = {}; let tempURI;
  finalHeaders = {
    ...customHeaders,
    originurl: process.env.NEXT_PUBLIC_CHANNELDOMAIN || 'http://us.ab-dev.retisio.com',
  };
  // finalHeaders['x-chnl-id'] = process.env.NEXT_PUBLIC_CHANNELID;

  if(req) {
    tempURI = process.env.NEXT_PUBLIC_APIURL + URL + params;
  }else{
    tempURI = `arc/${URL}${params}`;
  }
  console.log('tempURI', tempURI);
  return Service.request(tempURI, { header: finalHeaders });
};

module.exports = { requestContructor };
