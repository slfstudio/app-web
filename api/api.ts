import { manageExceptionHTTP } from '@/utils/exceptionControls';
import axios from 'axios';
import { Platform } from 'react-native';

const getEnv = (prod: boolean = false) => {
  if (prod) {
    return Platform.OS === 'android' ? 'http://198.72.127.65' : 'https://bts_services.bajatuseguro.com';
  }
  return  'https://dev_bts_services.bajatuseguro.com';
};
const api = axios.create({
  baseURL: getEnv(false),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

api.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    manageExceptionHTTP(error.response);
  },
);

export default api;
