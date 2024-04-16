import { useQuery } from '@tanstack/react-query';

import { authenticationQuery } from '../../../entities/authentication/api/authentication.queries';

const usePostLogin = (email: string, password: string) => {
  return useQuery({ ...authenticationQuery.login(email, password) });
};

export { usePostLogin };
