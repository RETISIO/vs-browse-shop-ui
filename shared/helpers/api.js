/* eslint-disable linebreak-style */
/* eslint-disable operator-linebreak */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable import/no-import-module-exports */
import { Service } from '@retisio/sf-api'

const requestContructor = async (
  URL,
  params = '',
  options = {},
  req = null,
  pathname = ''
) => {
  let finalOriginURl = ''
  let relativeurl
  if (req) {
    finalOriginURl =
      req &&
      req.headers.host.indexOf('localhost') < 0 &&
      req.headers['x-forwarded-proto']
        ? `${req.headers['x-forwarded-proto']}://${req.headers.host}`
        : 'https://ab.qa.retisio.io'
    relativeurl = pathname
  } else if (window) {
    finalOriginURl =
      window && window.location.origin.indexOf('localhost') < 0
        ? window.location.origin
        : 'https://ab.qa.retisio.io'
    relativeurl = window.location.pathname
  }
  let finalHeaders = { originurl: finalOriginURl, relativeurl }
  let tempURI
  if (req) {
    finalHeaders.host = req.headers.host;
    finalHeaders.cookie = req.headers.cookie;
    finalHeaders['user-agent'] = req.headers['user-agent'];
  }
  if (req && req.headers.correlationid) {
    finalHeaders.correlationid = req.headers.correlationid
  }
  if (options.customHeaders) {
    finalHeaders = {
      ...finalHeaders,
      ...options.customHeaders
    }
  }
  // finalHeaders['x-chnl-id'] = process.env.NEXT_PUBLIC_CHANNELID || https://ab.qa.retisio.io';

  if (req) {
    tempURI = process.env.NEXT_PUBLIC_APIURL + URL + params
  } else {
    tempURI = `/arc/${URL}${params}`
  }
  // console.log('final request data', options, finalHeaders, tempURI);
  return Service.request(tempURI, { ...options, header: finalHeaders })
}

module.exports = { requestContructor }
