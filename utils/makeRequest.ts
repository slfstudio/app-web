import api from '@/api/api';
import * as qs from 'querystring';
import * as aesjs from 'aes-js';
import { manageException } from './exceptionControls';

global.Buffer = global.Buffer || require('buffer').Buffer;

const SEED = '*B3R14t3c7*125h7';
const KEY = aesjs.utils.utf8.toBytes(SEED);
const IV = new Uint8Array(16);

export const encrypt = (data: string, isDataJSON = false, returnBuffer = false) => {
  try {
    if (data != '' && data.length > 0) {
      data = isDataJSON ? JSON.stringify(qs.parse(data)) : data.trim();
      let dataBytes = aesjs.utils.utf8.toBytes(data);
      const aesCbc = new aesjs.ModeOfOperation.cbc(KEY, IV);
      const encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(dataBytes));
      const hex = aesjs.utils.hex.fromBytes(encryptedBytes);
      const encrypted = Buffer.from(hex, 'hex').toString('base64').trim();
      return returnBuffer ? aesjs.utils.utf8.toBytes(encrypted) : encrypted;
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
    return data;
  }
};

export const decrypt = (data: string, returnJSON = true) => {
  try {
    if (data != '' && data.length > 0) {
      const buffer = Buffer.from(data, 'base64');
      const hex = buffer.toString('hex');
      const dataBytes = aesjs.utils.hex.toBytes(hex);
      const aesCbc = new aesjs.ModeOfOperation.cbc(KEY, IV);
      const decryptedBytes = aesCbc.decrypt(dataBytes);

      let decrypted = aesjs.utils.utf8.fromBytes(decryptedBytes).trimEnd();

      decrypted = isJSON(decrypted) ? decrypted : sanitize(decrypted);

      return returnJSON ? JSON.parse(decrypted) : decrypted;
    } else {
      return data;
    }
  } catch (e) {
    console.log(e);
    return data;
  }
};

const sanitize = (decrypted: string) => {
  decrypted = JSON.stringify(decrypted);
  const lastBrachet = decrypted.lastIndexOf('}');
  const sanitazed = `${decrypted.substring(0, lastBrachet + 1)}"`;
  return sanitazed;
};

export const makeRequest = async (uri: string, params: any | null = null, post = true) => {
  try {
    let response = null;
    if (post === true) {
      if (params) {
        params = typeof params === 'string' ? params : params.hasOwnProperty('params') ? params.params : null;
      }

      const arrayBuffer = params ? encrypt(params, isJSON(params), true) : [];

      const opts = getOpts(arrayBuffer);
      console.log('arrayBuffer==>', uri, arrayBuffer, opts);

      response = await api.post(uri, arrayBuffer, opts);
    } else {
      console.log('arrayBuffer==>', uri + '?' + params?.params);

      response = await api.get(uri + '?' + params?.params).catch((ex) => {
        console.log(ex);
      });
    }
    const { data } = response ?? {};
    const decrypted = decrypt(data, true);
    let dataRes = { data: typeof decrypted === 'string' ? JSON.parse(decrypted) : decrypted };
    manageException(dataRes);
    return dataRes;
  } catch (ex) {
    console.log('makeRequest: ', ex);
    throw ex;
  }
};

const getOpts = (data: any) =>{ 
  console.log("Array.isArray(data)",Array.isArray(data), typeof data, data)
  return ({
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Content-Type': 'text/plain',
    'Content-Length': Array.isArray(data) ? data.length : 0,
  },
})};

const isJSON = (string: string) => {
  try {
    JSON.parse(string);
    return true;
  } catch (e) {
    return false;
  }
};
