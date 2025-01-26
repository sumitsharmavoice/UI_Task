import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from "./Pages/Home";

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#1C1812',
    },
    fontFamily: 'Inter, sans-serif',
    body1: {
      fontSize: "20px",
      fontWeight: 400
    },
    h1: {
      fontSize: "56px",
      fontWeight: 600
    },
    h2: {
      fontSize: "48px",
      fontWeight: 600,
      "@media (max-width: 768px)": {
        fontSize: "40px"
      }
    },
    h3: {
      fontSize: "40px",
      fontWeight: 600
    },
    h4: {
      fontSize: "32px",
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Gluten, sans-serif',
      fontSize: "20px",
      fontWeight: 400
    },
    button: {
      fontSize: "16px",
      fontWeight: 400,
      textTransform: "none"
    },
    caption: {
      fontFamily: 'Gluten, sans-serif',
      fontSize: "32px",
      fontWeight: 400
    },
    subtitle1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px"
    },
    subtitle2: {
      fontSize: "12px",
      fontWeight: 400
    }
  },
  palette: {
    primary: {
      main: '#1C1812',
    },
    secondary: {
      main: '#AEADAA',
    },
    info: {
      main: "#65625E"
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
