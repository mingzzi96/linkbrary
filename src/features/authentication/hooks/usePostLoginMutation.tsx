import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authenticationQueryKeys } from '@entities/authentication/api';
import { postLogIn } from '@shared/api/authentication-api';

export const usePostLoginMutation = (email: string, password: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postLogIn(email, password),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authenticationQueryKeys.login(email, password) });
    },
  });
};
