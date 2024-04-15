export const theme = {
  color: {
    black_000000: '#000000',
    black_111322: '#111322',

    white_FFFFFF: '#FFFFFF',

    primary_6D6AFE: '#6D6AFE',

    red_FF5B56: '#FF5B56',

    gray_373740: '#373740',
    gray_9FA6B2: '#9FA6B2',
    gray_CCD5E3: '#CCD5E3',
    gray_E7EFFB: '#E7EFFB',
    gray_F0F6FF: '#F0F6FF',
  },
} as const;

export type CustomTheme = typeof theme;
