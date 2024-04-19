import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';

import { PostLoginParam } from '@shared/api/authentication-api';
import { CommonButton } from '@shared/ui/buttons/common-button';
import { CommonInput } from '@shared/ui/inputs/common-input';

import * as S from './login-form-style';
import { usePostLoginMutation } from '../hooks';

// import { OauthBox } from '@shared/ui/oauth-box';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PostLoginParam>({ mode: 'onBlur', shouldFocusError: true }); // useForm 타입 지정 필요

  const { mutate: postLoginMutate } = usePostLoginMutation();

  const handleSubmitLogin: SubmitHandler<PostLoginParam> = async (value) => {
    postLoginMutate(
      { email: value.email, password: value.password },
      {
        onSuccess: () => {
          return toast.success('로그인 성공!');
        },
        onError: (error) => {
          if (error instanceof AxiosError) {
            if (error.response?.status === 400) {
              return toast.error('이메일과 비밀번호를 다시 확인해 주세요.');
            }
          }
          return toast.error('로그인 실패.');
        },
      },
    );
  };

  return (
    <S.LoginFormWrap>
      {/* {register('password')} */}
      <form onSubmit={handleSubmit(handleSubmitLogin)}>
        <CommonInput
          label='이메일'
          id='email'
          inputType='email'
          placeholder='이메일을 입력해 주세요.'
          errorMessage={errors.email?.message?.toString()}
          {...register('email', {
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: '올바른 이메일 주소가 아닙니다.',
            },
            required: {
              value: true,
              message: '이메일을 입력해 주세요.',
            },
          })}
        />
        <CommonInput
          label='비밀번호'
          id='password'
          inputType='password'
          placeholder='비밀번호를 입력해 주세요.'
          errorMessage={errors.password?.message?.toString()}
          {...register('password', {
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
              message: '비밀번호를 다시한번 확인해 주세요.',
            },
            required: {
              value: true,
              message: '비밀번호를 입력해 주세요.',
            },
          })}
        />
        <CommonButton className='submit-button' backgroundColor='gradient' buttonType='submit'>
          로그인하기
          {/* {isLoading ? '잠시만 기다려 주세요...' : '로그인하기'} */}
        </CommonButton>
        {/* <OauthBox explainText='소셜 로그인' /> */}
      </form>
    </S.LoginFormWrap>
  );
};
