import { createTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
  interface ThemeOptions {    
    [key: string]: any;
  }
};

//TODO: Figure out what the theme colors and fonts will be
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