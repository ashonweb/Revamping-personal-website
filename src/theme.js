import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4f8ef7', light: '#7eb3ff', dark: '#2b6fd4' },
    secondary: { main: '#64ffda' },
    background: { default: '#0a0e1a', paper: '#0f1626' },
    text: { primary: '#f1f5f9', secondary: '#cbd5e1', disabled: '#4b5977' },
    divider: 'rgba(255,255,255,0.07)',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 900, letterSpacing: '-2px', lineHeight: 1.0 },
    h2: { fontWeight: 800, letterSpacing: '-1.5px', lineHeight: 1.05 },
    h3: { fontWeight: 700 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          backgroundColor: '#0a0e1a',
        },
        '*, *::before, *::after': { boxSizing: 'border-box' },
        'a': { transition: 'color 0.2s, opacity 0.2s' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 8, fontFamily: '"Inter", sans-serif' },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: { backgroundColor: '#0f1626', borderLeft: '1px solid rgba(255,255,255,0.07)' },
      },
    },
  },
});

export default theme;
