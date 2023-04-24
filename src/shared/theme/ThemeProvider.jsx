import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
const theme = {
  palette: {
    default: {
      dark: '#242739',
      main: '#1D1E2B',
      light: '#FFFFFF',
    },
    primary: {
      dark: '#72D989',
      main: '#98E3A9',
    },
    secondary: {
      main: '#534581',
      light: '#635299',
    },
    background: {
      dark: '#141429',
      light: '#DCDFE9',
    },
    danger: {
      main: '#CF484B',
      light: '#D96D6F',
    },
    success: {
      main: '#38C0A8',
      light: '#71D6C4',
    },
    overlay: {
      light: 'rgba(0, 0, 0, 0.15)',
      main: 'rgba(0, 0, 0, 0.3)',
      dark: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    h1Mobile: {
      fontSize: '36px',
      lineHeight: '36px',
      letterSpacing: '-2%',
    },
    h1Tablet: {
      fontSize: '48px',
      lineHeight: '48px',
      letterSpacing: '-2%',
    },
    h1Desktop: {
      fontSize: '58px',
      lineHeight: '58px',
      letterSpacing: '-2%',
    },
    h2Mobile: {
      fontSize: '28px',
      lineHeight: '28px',
      letterSpacing: '-2%',
    },
    h2Tablet: {
      fontSize: '36px',
      lineHeight: '36px',
      letterSpacing: '-2%',
    },
    h2Desktop: {
      fontSize: '40px',
      lineHeight: '40px',
      letterSpacing: '-2%',
    },
    h3Mobile: {
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '-1%',
    },
    h3Tablet: {
      fontSize: '28px',
      lineHeight: '28px',
      letterSpacing: '-1%',
    },
    h3Desktop: {
      fontSize: '36px',
      lineHeight: '36px',
      letterSpacing: '-1%',
    },
    h4Mobile: {
      fontSize: '18px',
      lineHeight: '22px',
    },
    h4Tablet: {
      fontSize: '24px',
      lineHeight: '28px',
    },
    h4Desktop: {
      fontSize: '24px',
      lineHeight: '28px',
    },
    body: {
      fontSize: '16px',
      lineHeight: '22.4px',
      letterSpacing: '1%',
    },
    legal: {
      fontSize: '12px',
      lineHeight: '16.8px',
    },
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
