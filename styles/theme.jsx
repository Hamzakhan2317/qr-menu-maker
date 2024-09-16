"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
export function createCustomTheme(options = {}) {
  const {
    palette = {
      primary: {
        main: "#1F2937", // Must have a `main` property
      },
      secondary: {
        main: "#E6034B", // Must have a `main` property
      },
      tertiary: {
        main: "#111827", // If you want to use `tertiary`, ensure it has a `main` property
      },
      button: {
        backgroundColor: "#315FFF",
      },
      mode: "light",
      error: {
        main: "#D32F2F",
        light: "#EF5350",
        dark: "#C62828",
        contrastText: "#fff",
      },
      warning: {
        main: "#FF9800",
        light: "rgb(255, 200, 117)",
        dark: "rgb(178, 122, 0)",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      info: {
        main: "#2196F3",
        light: "rgb(71, 145, 219)",
        dark: "rgb(17, 82, 147)",
        contrastText: "#fff",
      },
      success: {
        main: "#4CAF50",
        light: "rgb(111, 207, 151)",
        dark: "rgb(53, 122, 63)",
        contrastText: "rgba(0, 0, 0, 0.87)",
      },
      text: {
        primary: "#1B1B1B",
        secondary: "#555555",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(0, 0, 0, 0.14)",
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    typography = {
      fontFamily: "Nunito Sans",
      h1: {
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: 1.2,
        color: palette.text.primary,
      },
      h2: {
        fontWeight: 600,
        fontSize: "2rem",
        lineHeight: 1.125,
        color: palette.text.primary,
      },
      h3: {
        fontWeight: 600,
        fontSize: "1.5rem",
        lineHeight: 1,
        color: palette.text.primary,
      },
      h4: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 0.875,
        color: palette.text.primary,
      },
      modalLabel: {
        fontWeight: 600,
        fontSize: "0.75rem",
        lineHeight: 0.75,
        color: palette.text.primary,
      },
      formLabel: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 0.75,
        color: palette.text.primary,
      },
      bodyL: {
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.375,
        color: palette.text.primary,
      },
      bodyM: {
        fontWeight: 400,
        fontSize: "0.9375rem",
        lineHeight: 1.25,
        color: palette.text.primary,
      },
      bodyS: {
        fontWeight: 400,
        fontSize: "0.875rem",
        lineHeight: 1.125,
        color: palette.text.primary,
      },
      bodyXs: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1,
        color: palette.text.primary,
      },
      button: {
        fontWeight: 600,
        fontSize: "0.938rem",
        backgroundColor: palette.primary.main,
        "&:hover": {
          backgroundColor: "inherit",
          color: "inherit",
        },
        lineHeight: 1,
      },
      caption: {
        fontWeight: 400,
        fontSize: "0.75rem",
        lineHeight: 1,
      },
      overline: {
        fontWeight: 500,
        fontSize: "0.875rem",
        lineHeight: 1,
      },
    },
    shape = {
      borderRadius: 8,
    },
    breakpoints = {
      values: {
        xs: 0,
        sm: 600,
        md: 992,
        lg: 1140,
        xl: 1440,
        xxl: 1536,
        xxxl: 1920,
      },
    },
    ...other
  } = options;
  let theme = createTheme({
    palette,
    typography,
    shape,
    breakpoints,
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        },
      },
      MuiLoadingButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            borderRadius: "5px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            height: "40px",
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText || "#fff", // Ensure this is set
            marginTop: "15px",
            minWidth: "100px",
            lineClamp: 3,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: palette.secondary.main,
              color: "#fff",
            },
          },
          loadingIndicator: {
            color: "white",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-root input": {
              border: "none",
              padding: "15px",
              "&::placeholder": {
                color: "black",
              },
            },
            "& .MuiOutlinedInput-root": {
              background: "white",
              border: "1px solid #E1E1E1",
              borderRadius: "9px !important",
              width: "100% !important",
              fontSize: "16px",
              fontWeight: "400",
              "& fieldset": {
                borderColor: "transparent",
                border: "0",
              },
              "&:hover fieldset": {
                borderColor: "#8338EC",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#8338EC",
              },
              "& .MuiOutlinedInput-input": {
                height: "0.4375em",
              },
            },
            "& .MuiOutlinedInput-root:hover": {
              border: "1px solid #E5E5E5",
            },
          },
        },
      },
      MuiInputBase: {
        "&:hover": {
          borderColor: "blue", // Add blue border on hover
        },
        "&.Mui-focused": {
          borderColor: "blue", // Add blue border on focus
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            margin: "0px",
            justifyContent: "flex-start",
          },
          labelPlacementTop: {
            alignItems: "flex-start",
          },
          labelPlacementBottom: {
            alignItems: "flex-start",
          },
          label: {
            fontSize: "11px",
            color: palette.primary.main,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: "#9021FF",
            padding: "0px 0px 0px 0px",
            borderRadius: "5px",
            "&.Mui-checked": {
              color: "#9021FF",
              borderRadius: "5px",
            },
            "&:hover": {
              background: "none",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: "6px 0px",
            color: palette.primary.main,
            width: "16.82px",
            height: "16.82px",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            boxSizing: "content-box",
            padding: 3,
            fontSize: "1.125rem",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            transition: "ease-in-out 0.1s",
            "&:hover ": {
              borderColor: "#8338EC",
            },
            "&.Mui-focused": {
              borderColor: "#8338EC",
              boxShadow: "0px 0px 5px rgba(131, 56, 236, 0.2)",
            },
          },
        },
      },
    },
    ...other,
  });
  theme = responsiveFontSizes(theme);
  return theme;
}
