"use client";
import { createCustomTheme } from "../theme";

const theme = createCustomTheme();
export const mainHeadingStyle = {
  color: "white",
  fontSize: "3.8rem",
  fontWeight: 900,
  lineHeight: 1.2,
  [theme.breakpoints.up("xs")]: {
    fontSize: "2rem",
    fontWeight: 800,
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
    fontWeight: 700,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.8rem",
  },
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
};
export const middleTextStyle = {
  backgroundColor: "#efefef",
  borderTop: "15px solid #e6034b ",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "60px",

  [theme.breakpoints.up("xs")]: {
    padding: "1rem 2rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "3rem",
    fontWeight: 700,
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.8rem",
  },
};
export const subHeadingStyle = {
  fontSize: "3rem",
  fontWeight: 600,
  textAlign: "center",
  margin: "15px 0 ",
  [theme.breakpoints.up("xs")]: {
    fontSize: "2.3rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};
export const cardsGridTextStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  flexDirection: "column",
  [theme.breakpoints.up("xs")]: {
    justifyContent: "center",
  },
  [theme.breakpoints.up("sm")]: {
    justifyContent: "center",
    fontSize: "2.8rem",
  },
  [theme.breakpoints.up("md")]: {
    justifyContent: "center",
    fontSize: "3rem",
  },
};
