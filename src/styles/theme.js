import { palette as _palette } from '@leafygreen-ui/palette';
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
        light: _palette.green.light1,
        main: _palette.gray.base,
        contrastText: _palette.gray.light3,
    },
    secondary: {
      light: _palette.green.light1,
      main: _palette.green.base,
      contrastText: _palette.green.dark2,
    },
    blue: {
        light: _palette.blue.light1,
        main: _palette.blue.base,
        contrastText: _palette.blue.dark1,
    },
    gray: {
        light: _palette.gray.light1,
        main: _palette.gray.base,
        contrastText: _palette.gray.dark1,
    },
    green: {
      light: _palette.green.base,
      main: _palette.green.dark1,
      contrastText: _palette.green.dark2,    
    },
    yellow: {
      light: _palette.yellow.light2,
      main: _palette.yellow.base,
      contrastText: _palette.yellow.dark1,
    },
    red: {
      light: _palette.red.light1,
      main: _palette.red.base,
      contrastText: _palette.red.dark2,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  fontFamily: [
    'Euclid Circular A',
    'MongoDB Value Serif',
    'Open Sans',
  ].join(','),
  components: {
    MuiAppBar: {
      root: {
        colorPrimary: {
          backgroundColor: _palette.green.dark2
        }
      }
    },
    MuiToolBar: {
        root: {
            backgroundColor: _palette.green.dark2
        }
      }
  }
});


