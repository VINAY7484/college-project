import axios from 'axios';
// When building the client into a static file, we do not need to include the server path as it is returned by it
const domain = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8000';

const http = (
  url,
  {
    method = 'GET',
    data = undefined,
  },
) => {
  return axios({
    url: `${domain}${url}`,
    method,
    data,
  });
};

// Main functions to handle different types of endpoints
const get = (url, opts = {}) => http(url, { ...opts });
const post = (url, opts = {}) => http(url, { method: 'POST', ...opts });


const methods = {
  get,
  post,
  
};

export default methods;