import { PropsWithChildren } from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@shared/ui/styles/theme';

type StyledThemeProviderProps = PropsWithChildren;

const StyledThemeProvider = ({ children }: StyledThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
