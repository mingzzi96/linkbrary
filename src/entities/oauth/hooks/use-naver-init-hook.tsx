// import { useCallback, useEffect } from 'react';

// import { API_NAVER_CLIENT_ID, API_NAVER_CLIENT_SECRET } from '@shared/constants/oauth';

// declare global {
//   interface Window {
//     naver: any;
//   }
// }

// const useNaverInit = () => {
//   const handleNaverInit = useCallback(() => {
//     const naver = window?.naver;
//     console.log(naver);

//     const naverLogin = new naver.LoginWithNaverId({
//       clientId: API_NAVER_CLIENT_ID,
//       callbackUrl: API_NAVER_CLIENT_SECRET,
//       callbackHandle: true,
//       isPopup: false,
//       loginButton: {
//         color: 'green',
//         type: 1,
//         height: '60',
//       },
//     });
//     naverLogin.init();
//   }, []);

//   useEffect(() => {
//     handleNaverInit();
//   }, [handleNaverInit]);
// };

// export { useNaverInit };
