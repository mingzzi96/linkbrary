import { toast } from 'react-toastify';

import { useMutation } from '@tanstack/react-query';

import { LoginSuccessResponse, PostLoginParam, postLogIn } from '@shared/api/authentication-api';

export const usePostLoginMutation = () => {
  return useMutation<LoginSuccessResponse, Error, PostLoginParam>({
    // 하나의 파람만 넘겨줄 수 있어서 객체로 보낸다.
    mutationFn: ({ email, password }) => postLogIn(email, password),
    onSuccess: (data) => {
      if (data === 400) {
        return toast.error('이메일과 비밀번호를 다시 확인해 주세요.');
      }

      return toast.success('로그인 성공!');
    },
  });
};
