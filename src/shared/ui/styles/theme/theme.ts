export const theme = {
  deviceSize: {
    mobile: 'screen and (max-width: 768px)',
    tablet: 'screen and (max-width: 1025px)',
  },
  font: {
    pretendard_100: `'Pretendard-100', sans-serif`,
    pretendard_200: `'Pretendard-200', sans-serif`,
    pretendard_300: `'Pretendard-300', sans-serif`,
    pretendard_400: `'Pretendard-400', sans-serif`,
    pretendard_500: `'Pretendard-500', sans-serif`,
    pretendard_600: `'Pretendard-600', sans-serif`,
    pretendard_700: `'Pretendard-700', sans-serif`,
  },
  color: {
    black_000000: '#000000',
    black_111322: '#111322',

    white_FFFFFF: '#FFFFFF',

    violet_6D6AFE: '#6D6AFE',

    red_FF5B56: '#FF5B56',

    gray_373740: '#373740',
    gray_9FA6B2: '#9FA6B2',
    gray_CCD5E3: '#CCD5E3',
    gray_E7EFFB: '#E7EFFB',
    gray_F0F6FF: '#F0F6FF',

    gradient: 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)',
  },
} as const;

export type CustomTheme = typeof theme;
