import { useMutation } from '@tanstack/react-query';

import { postLogIn } from '@shared/api/authentication-api';

interface UsePostLoginMutationParam {
  email: string;
  password: string;
}

export const usePostLoginMutation = () => {
  return useMutation<undefined, Error, UsePostLoginMutationParam>({
    mutationFn: ({ email, password }) => postLogIn(email, password),
  });
};
