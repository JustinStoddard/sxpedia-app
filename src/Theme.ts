import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
  interface ThemeOptions {    
    [key: string]: any;
  }
};

const themeValues = {
  palette: {
    primary: "",
    secondary: "",
  },
  fonts: {
    primary: "",
    secondary: "",
  },
};

const themeName = 'SpacexOpedia Theme';
const theme = createTheme({ themeValues, themeName });
export default theme;