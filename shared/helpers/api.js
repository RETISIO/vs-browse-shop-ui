/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
import { Service } from '@retisio/sf-api';

const requestContructor = async(URL, params = '', options = {}, req = null) => {
  let finalOriginURl = '';
  if(req) {
    finalOriginURl = req && req.headers.host.indexOf('localhost') < 0 && req.headers['x-forwarded-proto'] ? `${req.headers['x-forwarded-proto']}://${req.headers.host}` : 'http://us.ab-dev.retisio.com';
  }else if(window) {
    finalOriginURl = window && window.location.origin.indexOf('localhost') < 0 ? window.location.origin : 'http://us.ab-dev.retisio.com';
  }
  let finalHeaders = { originurl: finalOriginURl }; let tempURI;
  if(options.customHeaders) {
    finalHeaders = {
      ...finalHeaders,
      ...options.customHeaders,
    };
  }
  // finalHeaders['x-chnl-id'] = process.env.NEXT_PUBLIC_CHANNELID || 'http://us.ab-dev.retisio.com';

  if(req) {
    tempURI = process.env.NEXT_PUBLIC_APIURL + URL + params;
  }else{
    tempURI = `/arc/${URL}${params}`;
  }
  console.log('final request data', options, finalHeaders, tempURI);
  return Service.request(tempURI, { ...options, header: finalHeaders });
};

module.exports = { requestContructor };
