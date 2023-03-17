import type { AppProps } from 'next/app';
import { lightTheme, darkTheme } from '../themes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '../styles/globals.css';
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  );
}

export default MyApp;
