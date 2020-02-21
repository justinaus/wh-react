import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', 'X-Custom-Header': 'foobar' },
};

const http = axios.create(config);

console.log('http');

export default http;
