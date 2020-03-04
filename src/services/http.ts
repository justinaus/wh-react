import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '//jsonplaceholder.typicode.com',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', 'X-Custom-Header': 'foobar' },
};

const http = axios.create(config);

export default http;
