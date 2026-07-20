"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    primary: {
      main: "#000000",
      light: "#1A1A1A",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C9A962",
      light: "#D9C48A",
      dark: "#A88B4A",
      contrastText: "#000000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#5A5A5A",
    },
    divider: "rgba(0, 0, 0, 0.08)",
  },
  typography: {
    fontFamily: "var(--font-body), sans-serif",
    h1: {
      fontFamily: "var(--font-display), serif",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    h2: {
      fontFamily: "var(--font-display), serif",
      fontWeight: 500,
      letterSpacing: "0.01em",
    },
    h3: {
      fontFamily: "var(--font-display), serif",
      fontWeight: 500,
    },
    h4: {
      fontFamily: "var(--font-display), serif",
      fontWeight: 500,
    },
    h5: {
      fontFamily: "var(--font-display), serif",
      fontWeight: 500,
    },
    h6: {
      fontFamily: "var(--font-display), serif",
      fontWeight: 500,
    },
    subtitle1: {
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.85,
    },
    body2: {
      lineHeight: 1.8,
    },
    button: {
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      fontWeight: 600,
      fontSize: "0.8rem",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "14px 36px",
          transition: "all 0.3s ease",
        },
        containedPrimary: {
          backgroundColor: "#000000",
          color: "#FFFFFF",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: "#1A1A1A",
            boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
            transform: "translateY(-2px)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #D9C48A, #C9A962)",
          color: "#000000",
          boxShadow: "0 8px 24px rgba(201,169,98,0.35)",
          "&:hover": {
            background: "linear-gradient(135deg, #C9A962, #A88B4A)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: 1.5,
          "&:hover": { borderWidth: 1.5 },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            "&.Mui-focused fieldset": {
              borderColor: "#C9A962",
              borderWidth: 1.5,
            },
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#A88B4A",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          boxShadow: "none",
          "&::before": { display: "none" },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        },
      },
    },
  },
});

export default theme;
