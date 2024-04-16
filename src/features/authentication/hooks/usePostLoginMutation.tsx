import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';

import { postLogIn } from '@shared/api/authentication-api';

const usePostLoginMutation = (email: string, password: string) => {
  return useMutation(() => postLogIn(email, password), {
    onSuccess: () => {
      toast.success('로그인 성공!');
    },
  });
};

export { usePostLoginMutation };
