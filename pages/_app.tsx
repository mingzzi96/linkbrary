import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { HydrationBoundary } from '@tanstack/react-query';
import styled from 'styled-components';

import LibConfigProviders from '@app/providers/lib-config-provider';

import GlobalStyle from '../src/shared/ui/styles/GlobalStyle';

import type { AppProps } from 'next/app';

export const StToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    font-size: 1.6rem;
  }
`;

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <LibConfigProviders>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <StToastContainer
            position='bottom-center'
            autoClose={4000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            theme='light'
          />
        </HydrationBoundary>
      </LibConfigProviders>
    </>
  );
}
