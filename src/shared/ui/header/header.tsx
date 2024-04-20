import { signOut } from 'next-auth/react';

const Header = () => {
  return (
    <div>
      <button type='button' onClick={() => signOut({ callbackUrl: '/' })}>
        로그아웃
      </button>
    </div>
  );
};

export { Header };
