import { queryOptions } from '@tanstack/react-query';

import { postLogIn } from '@shared/api/authentication-api';

export const authenticationQueryKeys = {
  all: () => ['authentication'],
  login: (email: string, password: string) => [...authenticationQueryKeys.all(), email, password],
};

export const authenticationQuery = {
  all: () =>
    queryOptions({
      queryKey: authenticationQueryKeys.all(),
    }),

  login: (email: string, password: string) =>
    queryOptions({
      queryKey: authenticationQueryKeys.login(email, password),
      queryFn: () => postLogIn(email, password),
    }),
};
