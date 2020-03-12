import axios, { AxiosRequestConfig } from 'axios';
import {
  showProgressAction,
  hideProgressAction,
} from '../store/progressbar/actions';
import store from '../store';

const config: AxiosRequestConfig = {
  baseURL: '//jsonplaceholder.typicode.com',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', 'X-Custom-Header': 'foobar' },
};

const http = axios.create(config);

http.interceptors.request.use(
  function(config) {
    store.dispatch(showProgressAction());

    return config;
  },
  function(error) {
    console.log('error');
    // Do something with request error
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  async function(response) {
    // const { config, data } = response;

    store.dispatch(hideProgressAction());

    // 401.

    return response;
  },
  function(error) {
    // const { config } = error;

    console.log('Error: ' + error.message);

    store.dispatch(hideProgressAction());

    return Promise.reject(error);
  }
);

export default http;
