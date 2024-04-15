import { AxiosError } from 'axios';

import { REQUEST_URLS } from '@shared/constants/api';

import { axiosInstance } from '../instance';

const postLogIn = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(REQUEST_URLS.postSignIn, { email, password });

    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status) {
      return error.response?.status;
    }
    return error;
  }
};

export { postLogIn };
