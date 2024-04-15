import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { postLogIn } from '@shared/api/authentication';
import { CommonInput } from '@shared/ui/inputs/common-input';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur', shouldFocusError: true });

  const handleSubmitLogin: SubmitHandler<FieldValues> = async (data) => {
    const result = await postLogIn(data.email, data.password);

    if (result === 400) {
      return toast.error('이메일과 비밀번호를 다시 확인해 주세요.');
    }

    return toast.success('로그인 성공!');
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitLogin)}>
      <CommonInput
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
      <button type='submit'>로그인하기</button>
    </form>
  );
};
