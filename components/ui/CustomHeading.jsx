import { createCustomTheme } from "@/styles/theme";
import { Typography } from "@mui/material";
import React from "react";

const theme = createCustomTheme();

const CustomHeading = ({ text = "", ...rest }) => {
  return <Typography sx={{ ...defaultStyles, ...rest }}>{text}</Typography>;
};

const defaultStyles = {
  fontSize: "2.25rem",
  lineHeight: "2.75rem",
  fontWeight: "800",
  my: "20px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
  },
  [theme.breakpoints.up("xxl")]: {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    fontWeight: "900",
  },
};

export default CustomHeading;
