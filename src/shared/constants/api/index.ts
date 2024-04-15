export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const REQUEST_URLS = {
  getFolderData: `/users/4/links`,
  getFolderNameData: `/users/4/folders`,
  getUserIDData: `/users/4`,
  getUserData: `/users`,
  postEmailCheck: `/check-email`,
  postSignIn: `/sign-in`,
  postSignUp: `/sign-up`,
} as const;
