import { useMutation } from '@tanstack/react-query';

import { LoginSuccessResponse, PostLoginParam, postLogIn } from '@shared/api/authentication-api';

export const usePostLoginMutation = () => {
  return useMutation<LoginSuccessResponse, Error, PostLoginParam>({
    mutationFn: ({ email, password }) => postLogIn(email, password),
  });
};
