import { useEffect } from 'react';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import './styles/globalstyle.css';

// ----------------------------------------------------------------------

export default function App() {
  const settings = {
    themeMode: 'dark',
  };
  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(settings));
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}
