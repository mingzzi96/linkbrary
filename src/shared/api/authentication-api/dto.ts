export interface PostLoginParam {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}
