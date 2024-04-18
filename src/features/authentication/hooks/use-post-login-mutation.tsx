import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';

import { LoginSuccessResponse, PostLoginParam, postLogIn } from '@shared/api/authentication-api';

export const usePostLoginMutation = () => {
  return useMutation<LoginSuccessResponse, Error, PostLoginParam>({
    mutationFn: ({ email, password }) => postLogIn(email, password),
    onSuccess: (data) => {
      if (data === 400) {
        return toast.error('이메일과 비밀번호를 다시 확인해 주세요.');
      }

      return toast.success('로그인 성공!');
    },
  });
};
