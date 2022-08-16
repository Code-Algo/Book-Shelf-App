import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'light',
      mode: 'light',
      primary: {
        main: '#0685bb',
        light: '#093562',
      },
      secondary: {
        main: '#d6044a',
      },
      background: {
        default: '#010c0c',
        paper: '#adadad',
      },
      error: {
        main: '#f11d0e',
      },
      info: {
        main: '#e8eff5',
      },
      text: {
        primary: 'rgba(239,226,226,0.87)',
      },
    },
  };

  const theme=createTheme(themeOptions);
  export default theme