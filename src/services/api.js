import axios from 'axios';
import { API_URL, RAPIDAPIKEY, RAPIDAPIHOST } from '@env';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'x-rapidapi-key': RAPIDAPIKEY,
    'x-rapidapi-host': RAPIDAPIHOST,
    useQueryString: true,
  },
});

export default api;
