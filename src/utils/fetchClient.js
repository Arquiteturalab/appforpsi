import axios from 'axios';
// Locals
import {apikey} from '~/config';
export const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_API_PATH,
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function(config) {
    // const token = localStorage.getItem('token');
    // config.headers.Authorization = token ? `Bearer ${token}` : '';
    config.headers.apikey = apikey;
    return config;
  });

  return instance;
};

// export default fetchClient();
