import axios from 'axios';


// import { configureFakeBackend } from '../services/fake-backend';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
});

const requestHandler = (request) => {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    // Thêm token vào header nếu user vẫn tồn tại
    request.headers['x-access-token'] = user.token;
  }
  return request;
};

const successHandler = (response) => {
  return response;
};

const errorHandler = (error) => {
  return Promise.reject({ ...error });
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));

axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);



export default axiosInstance;
