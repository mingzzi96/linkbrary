import { AxiosError } from 'axios';

import { axiosInstance } from '@shared/api/instance';
import { REQUEST_URLS } from '@shared/constants/api';

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
