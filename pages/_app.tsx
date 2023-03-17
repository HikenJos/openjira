import type { AppProps } from 'next/app';
import { lightTheme, darkTheme } from '../themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/globals.css';
import { UIProvider } from '../context/ui';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  );
}

export default MyApp;
