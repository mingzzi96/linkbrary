import axios from 'axios';

import { API_BASE_URL } from '@shared/constants/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 2000,
});

export { axiosInstance };
