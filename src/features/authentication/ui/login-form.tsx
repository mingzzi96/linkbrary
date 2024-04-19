import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import { PostLoginParam } from '@shared/api/authentication-api';
import { CommonButton } from '@shared/ui/buttons/common-button';
import { CommonInput } from '@shared/ui/inputs/common-input';
import { OauthBox } from '@shared/ui/oauth-box';

import * as S from './form-style';
import { usePostLoginMutation } from '../hooks';

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

  const handleNaverLogin = () => {
    console.log('naver!');
  };

  return (
    <S.AuthArea>
      <S.AuthLogoWrap>
        <h1>
          <Link href='/'>
            <Image
              src='./assets/images/logos/logo.svg'
              alt='Linkbrary 메인 페이지로 바로가기'
              width={210}
              height={38}
            />
          </Link>
        </h1>
        <h2>
          <p>회원이 아니신가요?</p>
          <Link href='/sign-up'>회원 가입하기</Link>
        </h2>
      </S.AuthLogoWrap>
      <S.AuthFormWrap>
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
          <OauthBox explainText='소셜 로그인' handleClickNaver={handleNaverLogin} />
        </form>
      </S.AuthFormWrap>
    </S.AuthArea>
  );
};
