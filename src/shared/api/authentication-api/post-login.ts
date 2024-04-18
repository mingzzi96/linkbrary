import { AxiosError, AxiosResponse } from 'axios';

import { axiosInstance } from '@shared/api/instance';
import { REQUEST_URLS } from '@shared/constants/api';

import { LoginSuccessResponse } from './dto';

const postLogIn = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post<LoginSuccessResponse, AxiosResponse>(REQUEST_URLS.postSignIn, {
      email,
      password,
    });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    if (error.response?.status) {
      return error.response.status;
    }
    return error;
  }
};

export { postLogIn };
