import { axiosInstance } from '@shared/api/instance';
import { REQUEST_URLS } from '@shared/constants/api';

import { LoginSuccessResponse } from './dto';

const postLogIn = async (email: string, password: string) => {
  const response = await axiosInstance.post<LoginSuccessResponse>(REQUEST_URLS.postSignIn, {
    email,
    password,
  });
  return response.data;
};

export { postLogIn };
