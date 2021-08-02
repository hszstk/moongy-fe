import axios from 'axios';

const httpRequest = axios.create({
  baseURL: 'http://api.tvmaze.com/',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default httpRequest;
